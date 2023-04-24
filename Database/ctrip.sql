/*
 Navicat Premium Data Transfer

 Source Server         : work
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : ctrip

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 24/04/2023 12:29:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `providerAccountId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `access_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `expires_at` int NULL DEFAULT NULL,
  `token_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `scope` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `id_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `session_state` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider` ASC, `providerAccountId` ASC) USING BTREE,
  INDEX `Account_userId_idx`(`userId` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------

-- ----------------------------
-- Table structure for marketcity
-- ----------------------------
DROP TABLE IF EXISTS `marketcity`;
CREATE TABLE `marketcity`  (
  `cityName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cityImgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cityTemLb` smallint NOT NULL,
  `cityTemUb` smallint NOT NULL,
  PRIMARY KEY (`cityName`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of marketcity
-- ----------------------------
INSERT INTO `marketcity` VALUES ('三亚', 'https://dimg04.c-ctrip.com/images/0zg52120009h11qpa2FF6.jpg', 27, 32);
INSERT INTO `marketcity` VALUES ('北海', 'https://dimg04.c-ctrip.com/images/0zg0d120009h0z263FC91.jpg', 24, 29);
INSERT INTO `marketcity` VALUES ('南京', 'https://dimg04.c-ctrip.com/images/0zg2r120009h11m5q3E31.jpg', 21, 34);
INSERT INTO `marketcity` VALUES ('合肥', 'https://dimg04.c-ctrip.com/images/0zg2q120009h0zoxeD717.jpg', 19, 33);
INSERT INTO `marketcity` VALUES ('夏门', 'https://dimg04.c-ctrip.com/images/0zg2i120009h11y5aEFA9.jpg', 21, 30);
INSERT INTO `marketcity` VALUES ('大理', 'https://dimg04.c-ctrip.com/images/0zg6u120009h0ypygCC80.jpg', 12, 29);
INSERT INTO `marketcity` VALUES ('常州', 'https://dimg04.c-ctrip.com/images/0zg3h120009h0z6cg015B.jpg', 19, 29);
INSERT INTO `marketcity` VALUES ('张家界', 'https://dimg04.c-ctrip.com/images/0zg5j120009h12ft10E05.jpg', 19, 31);
INSERT INTO `marketcity` VALUES ('成都', 'https://dimg04.c-ctrip.com/images/0zg3r120009h0z6ep9BC8.jpg', 20, 32);
INSERT INTO `marketcity` VALUES ('湖州', 'https://dimg04.c-ctrip.com/images/0zg2p120009h0zvjyB44F.jpg', 20, 33);
INSERT INTO `marketcity` VALUES ('澳门', 'https://dimg04.c-ctrip.com/images/0zg53120009h0yx0n7CF6.jpg', 23, 24);
INSERT INTO `marketcity` VALUES ('郑州', 'https://dimg04.c-ctrip.com/images/0zg2i120009h12dxh7FBD.jpg', 18, 30);

-- ----------------------------
-- Table structure for marketdata
-- ----------------------------
DROP TABLE IF EXISTS `marketdata`;
CREATE TABLE `marketdata`  (
  `cityName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotelImgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotelSkipUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotelName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotelStartingPrice` int NOT NULL,
  PRIMARY KEY (`hotelName`) USING BTREE,
  INDEX `cityName`(`cityName` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of marketdata
-- ----------------------------
INSERT INTO `marketdata` VALUES ('三亚', 'https://dimg04.c-ctrip.com/images/200s1900000169opw2822_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/14249344.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '三亚亚特兰蒂斯酒店', 5388);
INSERT INTO `marketdata` VALUES ('三亚', 'https://dimg04.c-ctrip.com/images/0201z120008xa8qv4070D_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/345522.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '三亚亚龙湾天域度假酒店', 1699);
INSERT INTO `marketdata` VALUES ('三亚', 'https://dimg04.c-ctrip.com/images/1mc5512000avjsa841D82_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/345078.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '三亚亚龙湾美高梅度假酒店', 1999);
INSERT INTO `marketdata` VALUES ('北海', 'https://dimg04.c-ctrip.com/images/02052120008alcyoyFDC7_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/431214.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '北海金昌开元名都大酒店', 506);
INSERT INTO `marketdata` VALUES ('北海', 'https://dimg04.c-ctrip.com/images/0200i1200099tsgzb6050_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/429545.html?checkin=2022-05-27&checkout=2022-05-28&ctm_ref=hp_mkt_pt_pro_01', '北海香格里拉大酒店', 643);
INSERT INTO `marketdata` VALUES ('北海', 'https://dimg04.c-ctrip.com/images/200s0t000000iraci4262_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/18518303.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '北海高铁站希尔顿欢朋酒店', 368);
INSERT INTO `marketdata` VALUES ('南京', 'https://dimg04.c-ctrip.com/images/0203g1200090p4of48E8C_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/79565368.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '南京园博园悦榕庄', 3298);
INSERT INTO `marketdata` VALUES ('南京', 'https://dimg04.c-ctrip.com/images/0203v120008yqinc4E576_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/76283442.html?checkin=2022-06-01&checkout=2022-06-02&ctm_ref=hp_mkt_pt_pro_01', '南京园博园英迪格酒店', 1388);
INSERT INTO `marketdata` VALUES ('南京', 'https://dimg04.c-ctrip.com/images/02009120008rqymvl708C_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/77410100.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '南京珺懋酒店傲途格精选', 1508);
INSERT INTO `marketdata` VALUES ('夏门', 'https://dimg04.c-ctrip.com/images/02067120009cusiv3A67E_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/78103902.html?checkin=2022-05-23&checkout=2022-05-24&ctm_ref=hp_mkt_pt_pro_01', '厦门W酒店', 1292);
INSERT INTO `marketdata` VALUES ('厦门', 'https://dimg04.c-ctrip.com/images/200d14000000vxk6q8EF4_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/434812.html?checkin=2022-06-01&checkout=2022-06-02&ctm_ref=hp_mkt_pt_pro_01', '厦门日月谷温泉渡假村', 658);
INSERT INTO `marketdata` VALUES ('厦门', 'https://dimg04.c-ctrip.com/images/1mc4b12000ar7i4nw093A_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/60185397.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '厦门特房波特曼七星湾酒店·曦海', 1199);
INSERT INTO `marketdata` VALUES ('合肥', 'https://dimg04.c-ctrip.com/images/200h1e000001fqfq344A9_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/52673172.html?checkin=2022-05-27&checkout=2022-05-28&ctm_ref=hp_mkt_pt_pro_01', '合肥君悦酒店', 800);
INSERT INTO `marketdata` VALUES ('合肥', 'https://dimg04.c-ctrip.com/images/200f0r000000gtifqEE73_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/419898.html?checkin=2022-05-21&checkout=2022-05-22&ctm_ref=hp_mkt_pt_pro_01', '合肥富力威斯汀酒店', 791);
INSERT INTO `marketdata` VALUES ('合肥', 'https://dimg04.c-ctrip.com/images/02034120009nn6yb47784_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/21900347.html?checkin=2022-05-21&checkout=2022-05-22&ctm_ref=hp_mkt_pt_pro_01', '合肥栢景朗廷酒店', 758);
INSERT INTO `marketdata` VALUES ('大理', 'https://dimg04.c-ctrip.com/images/0225112000am9vhbk8ED3_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/3443361.html?checkin=2022-05-31&checkout=2022-06-01&ctm_ref=hp_mkt_pt_pro_01', '大理实力希尔顿酒店', 1002);
INSERT INTO `marketdata` VALUES ('大理', 'https://dimg04.c-ctrip.com/images/20091g000001h8ekj3664_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/50176516.html?checkin=2023-04-17&checkout=2023-04-18&ctm_ref=hp_mkt_pt_pro_01', '大理颐雲酒店', 1152);
INSERT INTO `marketdata` VALUES ('常州', 'https://dimg04.c-ctrip.com/images/200w12000000s2wo4809A_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/30974751.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '常州丽豪假日酒店', 649);
INSERT INTO `marketdata` VALUES ('常州', 'https://dimg04.c-ctrip.com/images/02028120008yslkl09F99_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/17589382.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '常州尚品锦云智慧酒店', 346);
INSERT INTO `marketdata` VALUES ('常州', 'https://dimg04.c-ctrip.com/images/200u0u000000j4k57F9B1_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/21494056.html?checkin=2022-05-21&checkout=2022-05-22&ctm_ref=hp_mkt_pt_pro_01', '常州白金汉爵大酒店', 288);
INSERT INTO `marketdata` VALUES ('张家界', 'https://dimg04.c-ctrip.com/images/200f1a0000019ij8wFDAB_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/23922804.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '张家界梓山漫居', 2068);
INSERT INTO `marketdata` VALUES ('张家界', 'https://dimg04.c-ctrip.com/images/200t12000000t66zdD23E_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/651553.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '张家界禾田居度假酒店', 945);
INSERT INTO `marketdata` VALUES ('张家界', 'https://dimg04.c-ctrip.com/images/1mc7312000apdafqg4CD0_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/6747875.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '张家界纳百利度假酒店', 589);
INSERT INTO `marketdata` VALUES ('成都', 'https://dimg04.c-ctrip.com/images/0204t120008suo8zvDB23_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/512284.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '成都富力丽思卡尔顿酒店', 1283);
INSERT INTO `marketdata` VALUES ('成都', 'https://dimg04.c-ctrip.com/images/02027120008fy9ok332A3_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/1066373.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '成都瑞吉酒店', 1316);
INSERT INTO `marketdata` VALUES ('湖州', 'https://dimg04.c-ctrip.com/images/200u1d000001ehnvh5012_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/1628494.html?checkin=2022-05-21&checkout=2022-05-22&ctm_ref=hp_mkt_pt_pro_01', '湖州东吴亚朵酒店', 394);
INSERT INTO `marketdata` VALUES ('湖州', 'https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/11402467.html?checkin=2022-05-21&checkout=2022-05-22&ctm_ref=hp_mkt_pt_pro_01', '湖州东吴开元名庭酒店', 455);
INSERT INTO `marketdata` VALUES ('湖州', 'https://dimg04.c-ctrip.com/images/02041120009zeg7xo3363_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/70186340.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '湖州行政中心亚朵酒店', 421);
INSERT INTO `marketdata` VALUES ('澳门', 'https://dimg04.c-ctrip.com/images/02035120009hfit39E290_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/69459366.html?checkin=2022-05-22&checkout=2022-05-23&ctm_ref=hp_mkt_pt_pro_01', '澳门伦敦人酒店', 6960);
INSERT INTO `marketdata` VALUES ('郑州', 'https://dimg04.c-ctrip.com/images/200210000000p5fwa52C8_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/3665488.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '郑州富力万达文华酒店', 798);
INSERT INTO `marketdata` VALUES ('郑州', 'https://dimg04.c-ctrip.com/images/0201y120009b1habi9328_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/1053417.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '郑州绿地JW万豪酒店', 738);
INSERT INTO `marketdata` VALUES ('郑州', 'https://dimg04.c-ctrip.com/images/20041a0000018y4k22AB1_R_600_400_R5_D.jpg', 'https://hotels.ctrip.com/hotels/1302713.html?checkin=2022-05-20&checkout=2022-05-21&ctm_ref=hp_mkt_pt_pro_01', '郑州美盛喜来登大酒店', 816);

-- ----------------------------
-- Table structure for navmenu
-- ----------------------------
DROP TABLE IF EXISTS `navmenu`;
CREATE TABLE `navmenu`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `pid` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '上级菜单',
  `type` enum('route','menu_dir','menu') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'menu' COMMENT '类型:route=路由,menu_dir=菜单目录,menu=菜单项',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '标题',
  `path` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '路由路径',
  `icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '图标',
  `weigh` int NOT NULL DEFAULT 0 COMMENT '权重(排序)',
  `status` enum('1','0') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1' COMMENT '状态:0=禁用,1=启用',
  `updatetime` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `createtime` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `pid`(`pid` ASC) USING BTREE,
  INDEX `weigh`(`weigh` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '获取左侧菜单栏' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of navmenu
-- ----------------------------
INSERT INTO `navmenu` VALUES (1, 0, 'menu_dir', '酒店', '/', 'BankOutlined', 100, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (2, 1, 'menu', '国内酒店', '/', '', 99, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (3, 1, 'menu', '国外酒店', '/international', '', 99, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (4, 0, 'menu_dir', '机票', 'https://flights.ctrip.com/online/channel/domestic', 'RocketOutlined', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (5, 4, 'menu', '国内/国际/中国港澳台', 'https://flights.ctrip.com/online/channel/domestic', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (6, 4, 'menu', '特价机票', 'https://flights.ctrip.com/fuzzysearch/search', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (7, 4, 'menu', '航班动态', 'https://flights.ctrip.com/actualtime/search?newpchpheader=1', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (8, 4, 'menu', '值机选座', 'https://m.ctrip.com/webapp/flight/postservice/iframes/index.html?type=bookseat&newpchpheader=1', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (9, 4, 'menu', '退票改签', 'https://my.ctrip.com/myinfo/flight', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (10, 4, 'menu', '机场攻略', 'https://flights.ctrip.com/booking/airport-guides.html', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (11, 4, 'menu', '定制包机', 'https://flights.ctrip.com/itinerary/charter/book', '', 98, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (12, 0, 'menu_dir', '火车票', 'https://trains.ctrip.com/', 'InboxOutlined', 97, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (13, 12, 'menu', '国内火车票', 'https://trains.ctrip.com/', '', 97, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (14, 12, 'menu', '国际/中国港澳台', 'https://trains.ctrip.com/overseasTrains', '', 97, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (15, 0, 'menu_dir', '旅游', 'https://vacations.ctrip.com/', 'FlagOutlined', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (16, 15, 'menu', '旅游首页', 'https://vacations.ctrip.com/', '', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (17, 15, 'menu', '周末游', 'https://vacations.ctrip.com/around?startcity=14', '', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (18, 15, 'menu', '跟团游', 'https://vacations.ctrip.com/grouptravel', '', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (19, 15, 'menu', '自由行', 'https://vacations.ctrip.com/freetravel', '', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (20, 15, 'menu', '私家团', 'https://vacations.ctrip.com/privategroup', '', 96, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (21, 0, 'route', '攻略·景点', 'https://you.ctrip.com/', 'ZoomInOutlined', 95, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (22, 0, 'menu_dir', '汽车·船票', 'https://bus.ctrip.com/', 'CarOutlined', 94, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (23, 22, 'menu', '汽车票', 'https://bus.ctrip.com/', '', 94, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (24, 22, 'menu', '船票', 'https://ship.ctrip.com/ship', '', 94, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (25, 0, 'route', '门票·活动', 'https://huodong.ctrip.com/things-to-do/web-home?newheader=1', 'ScheduleOutlined', 93, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (26, 0, 'menu_dir', '用车', 'https://car.ctrip.com/zuche/landing?isList=0#ctm_ref=chp_var_txt', 'CarOutlined', 92, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (27, 26, 'menu', '国内租车', 'https://car.ctrip.com/zuche/landing?isList=0#ctm_ref=chp_var_txt', '', 92, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (28, 26, 'menu', '境外租车', 'https://car.ctrip.com/zuche/osdlanding#ctm_ref=chp_var_txt', '', 92, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (29, 26, 'menu', '接送机站', 'https://car.ctrip.com/airport-transfers/landing', '', 92, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (30, 26, 'menu', '按天包车', 'https://car.ctrip.com/chartered-online/index', '', 92, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (31, 0, 'menu_dir', '全球购', 'https://g.ctrip.com/', 'TagsOutlined', 91, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (32, 31, 'menu', '名店购', 'https://g.ctrip.com/', '', 91, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (33, 31, 'menu', '银联特惠', 'https://pages.c-ctrip.com/shoppingchic/unionpay/default.html', '', 91, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (34, 31, 'menu', '外币兑换', 'https://forex.ctrip.com/', '', 91, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (35, 0, 'menu_dir', '礼品卡', 'https://lipin.ctrip.com/lipinonline/', 'CreditCardOutlined', 90, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (36, 35, 'menu', '礼品卡首页', 'https://lipin.ctrip.com/lipinonline/', '', 90, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (37, 35, 'menu', '企业采购', 'https://lipin.ctrip.com/lipinonline/static/intentional', '', 90, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (38, 35, 'menu', '心意送礼', 'https://lipin.ctrip.com/lipinonline/static/wechat', '', 90, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (39, 35, 'menu', '礼品卡福袋', 'https://lipin.ctrip.com/xcb', '', 90, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (40, 0, 'route', '企业商旅', 'https://ct.ctrip.com/official?ctm_ref=xcct', 'UserAddOutlined', 0, '1', NULL, NULL);
INSERT INTO `navmenu` VALUES (41, 0, 'route', '携程金融', 'https://jr.ctrip.com/#/?clientSource=CTRIP&version=2.0', 'CrownOutlined', 0, '1', NULL, NULL);

-- ----------------------------
-- Table structure for session
-- ----------------------------
DROP TABLE IF EXISTS `session`;
CREATE TABLE `session`  (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sessionToken` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `Session_sessionToken_key`(`sessionToken` ASC) USING BTREE,
  INDEX `Session_userId_idx`(`userId` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of session
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `emailVerified` datetime(3) NULL DEFAULT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `apiKeyId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `User_email_key`(`email` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('clgq74f6v0000ujigpmlvgfb8', NULL, '18225666138@163.com', '2023-04-22 13:19:34.724', NULL, NULL);

-- ----------------------------
-- Table structure for verificationtoken
-- ----------------------------
DROP TABLE IF EXISTS `verificationtoken`;
CREATE TABLE `verificationtoken`  (
  `identifier` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  UNIQUE INDEX `VerificationToken_token_key`(`token` ASC) USING BTREE,
  UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier` ASC, `token` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of verificationtoken
-- ----------------------------
INSERT INTO `verificationtoken` VALUES ('18225666138@163.com', 'ae5a89e1dde4955d170676c6a5291afabbd6fd95bcc4770598653b3db52c6bc7', '2023-04-22 06:53:42.694');
INSERT INTO `verificationtoken` VALUES ('18225666138@163.com', 'e8d60cf9b72a6cc6f35bc12a76334a5f16de5ae81ad4230d16f62bddc3e73217', '2023-04-25 02:30:13.611');

SET FOREIGN_KEY_CHECKS = 1;
