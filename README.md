# 项目目录树
```
Ctrip
│  .env
│  .eslintrc.json
│  .gitignore
│  next-env.d.ts
│  next.config.js
│  package-lock.json
│  package.json
│  postcss.config.js
│  tailwind.config.js
│  tsconfig.json
│  yarn.lock
         
├─public 静态数据文件夹，存储静态数据
└─src
    │  middleware.ts 中间件
    ├─app
    │  ├─(main) 路由组
    │  │  │  layout.tsx 根布局
    │  │  │  not-found.tsx Error Boundary
    │  │  │  page.tsx  主页面，对应 / 路由的显示UI
    │  │  └─international
    │  │          page.tsx 国外酒店页面,对应 /international 路由的显示UI
    │  ├─api
    │  │  ├─hotelRecommend 获取酒店推荐数据的API
    │  │  │      fetchHotelRecommend.ts
    │  │  │      getHotelRecommend.ts
    │  │  │      hotelRecommend.d.ts
    │  │  │      route.ts
    │  │  ├─market 获取营销酒店数据的API
    │  │  │      getMarketData.ts
    │  │  │      market.d.ts
    │  │  │      route.ts
    │  │  ├─menus 获取左侧菜单栏数据的API
    │  │  │      fetchMenus.ts
    │  │  │      getMenus.ts 从数据库中获取，并将扁平数据树结构化
    │  │  │      navmenu.d.ts
    │  │  │      route.ts
    │  │  └─seasonHot 获取当季热推数据的API
    │  │          fetchSeasonHot.ts
    │  │          getSeasonHot.ts
    │  │          route.ts
    │  │          seasonHot.d.ts
    │  └─[...not-found]
    │          layout.tsx
    │          page.tsx
    ├─components 组件库
    │  │  bussinessInfo.tsx 酒店页面下方企业商旅、信息等组件汇总
    │  │  Header.tsx  Header组件
    │  │  hotelOrder.tsx    酒店预定组件
    │  │  hotelRecommend.tsx 酒店推荐组件
    │  │  International.tsx  国外酒店组件
    │  │  mainContent.tsx    主页面
    │  │  MarketPlayer.tsx  营销组件
    │  │  Menu.tsx 左侧菜单栏组件
    │  │  Providers.tsx   Theme, Session, store的Provider
    │  │  rotation.tsx     走马灯组件
    │  │  seasonHot.tsx    当季热推组件
    │  └─ui
    │      │  CountOption.tsx  星级组件的option
    │      │  datePick.tsx     日期选择组件
    │      │  footers.tsx      页脚组件
    │      │  GroupSelect.tsx   国外酒店界面的星级多选组件
    │      │  GuestSelect.tsx 	房间住客组件
    │      │  HotelInput.tsx 酒店输入组件
    │      │  Icon.tsx  自定义图标组件
    │      │  MenuItem.tsx  左侧菜单栏子项组件
    │      │  multiSelect.tsx 酒店星级多选组件
    │      ├─businessInfo     酒店企业商旅、信息等组件汇总
    │      │      businessTravel.tsx 企业商旅组件
    │      │      join.tsx    加盟组件
    │      │      nav.tsx     导航组件
    │      │      parter.tsx 合作伙伴组件
    │      │      safeGuard.tsx 版号等组件
    │      ├─header Header组件的子组件
    │      │      MobileDownload.tsx 移动端APP下载组件
    │      │      MyInfoDropdown.tsx  我的信息下拉栏组件
    │      │      Order.tsx  我的订单组件
    │      │      Service.tsx  客服中心组件
    │      │      ThemeToggle.tsx  主题切换组件
    │      ├─hotelRecommend 酒店推荐组件
    │      │      hotelCard.tsx 酒店推荐卡片组件
    │      │      hotelMenu.tsx 酒店推荐菜单组件
    │      ├─InternationalPage 国外酒店页面
    │      │      hotelSelect.tsx 酒店选择组件
    │      │      InternationRecomm.tsx 国外酒店推荐组件
    │      │      InternationSelect.tsx 酒店选择组件
    │      │      regionSelect.tsx      地区选择组件
    │      │      ServerUpdate.tsx      服务升级组件
    │      └─seasonHot 当季热推组件
    │              seasonCard.tsx  跟团游组件
    │              travelCard.tsx 	特价机票组件
    ├─lib
    │  │  auth.ts  Next-Auth的一些配置
    │  │  db.ts 定义全局Prisma实例
    │  │  getBaseUrl.ts 
    │  │  utils.ts 样式组合
    │  ├─api-middlewares  规定路由请求方式
    │  │      with-methods.ts
    │  ├─store  Redux相关文件
    │  │      index.ts
    │  │      menuStateSlice.ts
    │  └─validations
    │          auth.ts
    ├─pages
    │  └─api // 登录API
    │      └─auth
    │              [...nextauth].ts
    ├─styles
    │      globals.css 全局样式
    └─types
            next-auth.d.ts
            reset.d.ts
```
# 项目演示站点
[www.pengyuanfan.com](https://www.pengyuanfan.com)

# 文档


## 1.项目名称及使用指南
仿携程PC大首页

### 1.1 项目启动

1. 将Database文件夹中的sql文件导入自己的数据库中
2. 在 .env 文件中修改DATABASE_URL，下面是一个样例

`DATABASE_URL="mysql://root:123456@localhost:3306/ctrip"`

3. yarn dev 或者 npm run dev

## 2.成员分工

- 周王军：

左侧菜单栏、头部、业务D营销部分，PC和H5响应式设计、Theme | redux | session Provider、Prisma数据库配置、middleware、基于Next-Auth的用户认证、MyInfo页面、项目部署

- 吴益民：

业务A预定酒店、业务B轮播图切换、业务C酒店推荐、光暗主题设计、企业商旅、携程旅行保障、合作伙伴、页脚信息、路由组、国外酒店等

## 3.项目亮点

1. **基于 Next.js13  App目录实验性功能 开发**
2. **采用 Typescript 和 tailwind**
3. **采用 Prisma 操作数据库**
4. **日间、夜间模式切换**
5. **PC、H5响应式布局**
6. **基于Next-Auth的用户认证，路由守卫**
7. **Seo优化**
8. **项目部署上线**

## 4.技术说明

### 4.1 项目实现

1. Header
   1. 搜素框
      1. 使用antd Input 搜索组件
   2. 主题切换按钮
      1. 使用next-themes切换主题
   3. 登录按钮
      1. 初始显示未登录，登陆后显示尊敬的会员，并可跳转至MyInfo界面
      2. 点击后会跳转至/api/auth/signin，使用邮箱进行登录认证
   4. 我的订单
      1. 跳转至MyInfo页面，并通过动态段实现不同子路由渲染不同界面
   5. 适配H5布局，选择性显示功能区
2. 左侧菜单栏
   1. 通过服务获取后端数据库数据，并将扁平数据树结构化
   2. 展开按钮
      1. 点击按钮可展开/收缩菜单栏，再收缩状态下鼠标hover事件会导致默认展开
      2. 适配H5布局，PC页面不渲染关闭菜单栏的按钮，H5页面显示
   3. 菜单栏的每个菜单选项
      1. 气泡卡使用Antd Popover组件实现
      2. 每一个子项均是链接，点击即可跳转
3. 业务D营销部分
   1. 轮播图切换
      1. 使用Antd rotation组件
      2. 内部推荐的酒店信息是从数据库中获取
      3. 每隔20s动态变换一次内容
4. 业务A预定酒店
   1. 目的地选择
      1. 使用antd Select搜索组件
      2. 使用dropdownRender自定义下拉菜单
   2. 日期选择
      1. 使用antd RangePicker组件
      2. cellRender 筛选设置节日单元格样式
      3. renderExtraFooter 设置日历页脚内容
   3. 房间及住客
      1. 自定义组件GuestSelect实现
      2. 选项自定义组件ConutOption
      3. CountOption设置住客最大数量和最小数量限制，最大数量和最小数量与房间数相关
   4. 星级选择
      1. 使用antd 多选Select组件
      2. 样式修改使用全局CSS样式修改antd样式
5. 业务B轮播图切换
   1. 使用Antd rotation组件 
6. 业务C酒店推荐
   1. 自定义组件hotelRecommend组件
   2. 数据获取Api，数据使用mockjs生成
7. 路由组规划
   1. 由于用户登录界面的布局跟国外酒店和国内酒店的界面不同，我们使用了路由组技术，允许在不影响URL的情况下组织路由

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35018793/1682339991617-4b4f191d-3d9b-4c46-b6ff-7998095a71f7.png#averageHue=%2323292e&clientId=uf5f0e098-ef07-4&from=paste&height=242&id=u4a31326e&name=image.png&originHeight=333&originWidth=320&originalType=binary&ratio=1.375&rotation=0&showTitle=false&size=14304&status=done&style=none&taskId=u8ea0a9f5-4699-4a33-a9f9-fd2911368f1&title=&width=232.72727272727272)


### 4.2 项目难点

1. **扁平数据树结构化**

![image.png](https://cdn.nlark.com/yuque/0/2023/png/27781797/1682334244545-a3fbd63a-3029-47b9-a747-2816f79aa041.png#averageHue=%2331302f&clientId=u35d2d49f-0c2c-4&from=paste&height=450&id=u75b8e52f&name=image.png&originHeight=1011&originWidth=1817&originalType=binary&ratio=1.7954999208450317&rotation=0&showTitle=false&size=146176&status=done&style=none&taskId=u25f78412-7d7b-492e-bf97-6463063c1c4&title=&width=808.7962646484375)
```typescript
/**
 * 通过传入一个父级菜单以及一个嵌套菜单项，将嵌套菜单项绑定到父级菜单的children属性中
 * @param {navmenu[]} menus
 * @param {Object} childrens
 * @returns {navmenu[]} menus
 */
export function getChildren(menus:navmenu[], childrens:any) {
  menus.forEach((menu) => {
    if (menu.id in childrens) {
      menu.children = getChildren(childrens[String(menu.id)], childrens)
    }
  })
  return menus
}

/**
 * 获取PID 0 下的所有子菜单栏
 * 通过先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的key做存储。
 * @returns {navmenu[]} 
 */
export async function getMenus() {
  let childrens = {} as any
  let menuIds = await getMenuIds()
  menuIds.forEach((menu) => {
    if (!(menu.pid in childrens)) {
      childrens[String(menu.pid)] = []
    } 
    childrens[String(menu.pid)] = [...childrens[String(menu.pid)], menu]
  })


  return getChildren(childrens['0'], childrens)
}

```
```typescript
// 转化后的效果
[
  {
    "id": 1,
    "pid": 0,
    "type": "menu_dir",
    "title": "酒店",
    "path": "/",
    "icon": "BankOutlined",
    "weigh": 100,
    "status": "enable",
    "updatetime": null,
    "createtime": null,
    "children": [
      {
        "id": 2,
        "pid": 1,
        "type": "menu",
        "title": "国内酒店",
        "path": "/",
        "icon": "",
        "weigh": 99,
        "status": "enable",
        "updatetime": null,
        "createtime": null
      },
      {
        "id": 3,
        "pid": 1,
        "type": "menu",
        "title": "国外酒店",
        "path": "/international",
        "icon": "",
        "weigh": 99,
        "status": "enable",
        "updatetime": null,
        "createtime": null
      }
    ]
  },
  ...
]
```

2. **营销组件动态变换内容**
- Next.js 13 扩展fetch选项对象以允许每个请求**设置自己的**[**缓存和重新验证**](https://beta.nextjs.org/docs/data-fetching/caching)**规则**

重新验证是**清除缓存并重新获取最新数据**的过程。当数据发生变化并且希望确保应用程序显示最新版本而无需重建整个应用程序<br />`const res = await fetch('[https://...',](https://...',) { next: { revalidate: 10 } });`<br />相当于每隔10秒后的请求就会清除缓存，此时获取的是最新值

- 可以使用`router.refresh()`来刷新（获取更新的数据并在服务器上重新渲染）当前路由

通过调用router.refresh()，当前路由将刷新并从服务器获取最新的营销数据。这不会影响浏览器的历史记录，从根布局向下刷新数据。使用refresh()时，客户端状态不会丢失，包括React和浏览器状态。

3. **响应式布局**
- 基于tailwind实现各组件的布局适配
- 通过redux中的 isOpen变量 以及 当前设备的宽度 判断 是否显示菜单栏

![image.png](https://cdn.nlark.com/yuque/0/2023/png/27781797/1682336160879-a36f8a34-cbf3-4f61-abf1-5a7105e3c690.png#averageHue=%23fefefe&clientId=u35d2d49f-0c2c-4&from=paste&height=454&id=u38c04e78&name=image.png&originHeight=1035&originWidth=719&originalType=binary&ratio=1.7954999208450317&rotation=0&showTitle=false&size=73434&status=done&style=none&taskId=u8c015633-88a7-4acd-800d-140dd195fd9&title=&width=315.4455871582031)                ![image.png](https://cdn.nlark.com/yuque/0/2023/png/27781797/1682336177562-b961b818-b4c0-4c2f-b521-f9722e20ace9.png#averageHue=%23e7c499&clientId=u35d2d49f-0c2c-4&from=paste&height=453&id=u97030be5&name=image.png&originHeight=1035&originWidth=719&originalType=binary&ratio=1.7954999208450317&rotation=0&showTitle=false&size=192582&status=done&style=none&taskId=u6fffe5a1-e666-4e98-afc6-d856ad025f8&title=&width=314.4455871582031)

4. **酒店页面响应式多栏布局**
- 基于tailwind实现在h5界面和pc页面不同的布局
- 通过计算显示窗口的大小来滑动图标
- 通过计算左右隐藏的偏移量来判断左右图标是否显示



![image.png](https://cdn.nlark.com/yuque/0/2023/png/35018793/1682341246143-d845f7d5-98d3-4375-bb9a-1410654b743f.png#averageHue=%2375704e&clientId=uf5f0e098-ef07-4&from=paste&height=359&id=u36638f54&name=image.png&originHeight=494&originWidth=865&originalType=binary&ratio=1.375&rotation=0&showTitle=false&size=236923&status=done&style=none&taskId=u8798775a-7b96-4358-a743-b315184bd86&title=&width=629.0909090909091)

5. **预定酒店组件的难点**
- **时间选择窗口**
   - 使用antd RangePicker组件
   - cellRender 筛选设置节日单元格样式
   - renderExtraFooter 设置日历页脚内容
      - ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35018793/1682341715951-e23e0d45-d1ea-4a57-9171-bc91b1ea8385.png#averageHue=%23f8f7f7&clientId=uf5f0e098-ef07-4&from=paste&height=414&id=ue4e9f958&name=image.png&originHeight=778&originWidth=794&originalType=binary&ratio=1.375&rotation=0&showTitle=false&size=168115&status=done&style=none&taskId=u66d0c316-fdd8-4b4c-930b-40445373559&title=&width=422.45458984375)
- 房间及住客
   - 自定义组件GuestSelect实现
   - 项自定义组件ConutOption
   - CountOption设置住客最大数量和最小数量限制，最大数量和最小数量与房间数相关

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35018793/1682341739452-bb8347d6-8252-4d18-9a61-ca8899c03e80.png#averageHue=%23fbfbfa&clientId=uf5f0e098-ef07-4&from=paste&height=281&id=ua07d7aef&name=image.png&originHeight=387&originWidth=531&originalType=binary&ratio=1.375&rotation=0&showTitle=false&size=60461&status=done&style=none&taskId=u68b34c6a-b6e8-4da6-a27c-90418792ccd&title=&width=386.1818181818182)

## 5.成果展示(视频)
[https://www.bilibili.com/video/BV1JM4y187AX/](https://www.bilibili.com/video/BV1JM4y187AX/)

