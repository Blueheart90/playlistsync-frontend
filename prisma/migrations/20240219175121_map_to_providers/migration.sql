/*
  Warnings:

  - You are about to drop the `Provider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Provider` DROP FOREIGN KEY `Provider_user_id_fkey`;

-- DropTable
DROP TABLE `Provider`;

-- CreateTable
CREATE TABLE `providers` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('GOOGLE', 'SPOTIFY') NOT NULL,
    `providerAccountId` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `providers_id_key`(`id`),
    UNIQUE INDEX `providers_user_id_name_key`(`user_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `providers` ADD CONSTRAINT `providers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
