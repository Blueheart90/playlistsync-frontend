/*
  Warnings:

  - You are about to drop the column `user_id` on the `providers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,name]` on the table `providers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `providers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `providers` DROP FOREIGN KEY `providers_user_id_fkey`;

-- DropIndex
DROP INDEX `providers_user_id_name_key` ON `providers`;

-- AlterTable
ALTER TABLE `providers` DROP COLUMN `user_id`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `providers_userId_name_key` ON `providers`(`userId`, `name`);

-- AddForeignKey
ALTER TABLE `providers` ADD CONSTRAINT `providers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
