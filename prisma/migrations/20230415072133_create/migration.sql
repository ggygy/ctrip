-- CreateTable
CREATE TABLE `hotelRecommend` (
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
