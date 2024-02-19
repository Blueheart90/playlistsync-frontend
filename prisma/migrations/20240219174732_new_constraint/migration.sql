/*
  Warnings:

  - You are about to drop the column `userId` on the `Provider` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,name]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Provider` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Provider` DROP FOREIGN KEY `Provider_userId_fkey`;

-- DropIndex
DROP INDEX `Provider_userId_name_key` ON `Provider`;

-- AlterTable
ALTER TABLE `Provider` DROP COLUMN `userId`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Provider_user_id_name_key` ON `Provider`(`user_id`, `name`);

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
