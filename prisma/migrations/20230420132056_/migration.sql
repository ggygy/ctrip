-- CreateTable
CREATE TABLE `marketcity` (
    `cityName` VARCHAR(50) NOT NULL,
    `cityImgUrl` VARCHAR(255) NOT NULL,
    `cityTemLb` SMALLINT NOT NULL,
    `cityTemUb` SMALLINT NOT NULL,

    INDEX `cityName`(`cityName`, `cityImgUrl`, `cityTemLb`, `cityTemUb`),
    PRIMARY KEY (`cityName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marketdata` (
    `cityName` VARCHAR(50) NOT NULL,
    `hotelImgUrl` VARCHAR(255) NOT NULL,
    `hotelSkipUrl` VARCHAR(255) NOT NULL,
    `hotelName` VARCHAR(255) NOT NULL,
    `hotelStartingPrice` INTEGER NOT NULL,

    INDEX `cityName`(`cityName`),
    PRIMARY KEY (`hotelName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hotelrecommend` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `from` VARCHAR(191) NOT NULL,
    `picPath` VARCHAR(191) NOT NULL,
    `hotelName` VARCHAR(191) NOT NULL,
    `star` INTEGER NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `rate` VARCHAR(191) NOT NULL,
    `commentsNum` INTEGER NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
