import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'


function getEmailCredentials(): { server: string; from: string } {
  const server = process.env.EMAIL_SERVER
  const from = process.env.EMAIL_FROM
  if (!server || server.length === 0) {
    throw new Error('Missing Email_SERVER')
  }

  if (!from || from.length === 0) {
    throw new Error('Missing Email_FROM')
  }

  return { server, from }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    EmailProvider({
      server: getEmailCredentials().server,
      from: getEmailCredentials().from,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  // 在使用 JSON Web Tokens 时将访问令牌或用户 ID 等数据传递给浏览器，
  // 可以在调用回调时将数据保存在令牌中，然后在回调中将数据传递给浏览jwt器session。
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }
      
      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    redirect() {
      return 'http://www.pengyuanfan.top'
    },
  },
}
