// import { PrismaClient } from "@prisma/client";
// import { Random } from 'mockjs';

// const prisma = new PrismaClient();

// async function create(count = 10, callback: (a: any) => Promise<void>) {
//   const p = new PrismaClient();
//   for (let i = 1; i <= count; i++) {
//     await callback(p);
//   }
// }
// const sites=['上海','北京','广州']
// const hotel_pic=['/static/hotel_pic/hotel_1.jpg',
// '/static/hotel_pic/hotel_2.jpg',
// '/static/hotel_pic/hotel_3.jpg',
// '/static/hotel_pic/hotel_4.jpg',
// ]

// const run= () => {
//   create(10, async (prisma:PrismaClient) => {
//     for (const site of sites) {
//       await prisma.user.create({
//         data:
//         mock({
//           "array|3": [
//             "Hello",
//             "Mock.js",
//             "!"
//           ]
//         })

//         // {
//         //   from:site,
//         //   picPath:hotel_pic[Random.]
//         //   hotelName:   String
//         //   star:3
//         //   grade       String
//         //   rate        String
//         //   commentsNum Int
//         //   price       String
//         //   url         String
//         // },
//       });
//     }

//   });
// };

// Promise.resolve().then(async () => {
//   const user = await prisma.user.findFirst();
//   console.log(user);
// });
