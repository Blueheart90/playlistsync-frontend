-- CreateTable
CREATE TABLE `Provider` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('GOOGLE', 'SPOTIFY') NOT NULL,
    `providerAccountId` VARCHAR(255) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Provider_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
