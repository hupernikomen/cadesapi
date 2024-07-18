/*
  Warnings:

  - You are about to drop the column `price` on the `budgets` table. All the data in the column will be lost.
  - Added the required column `total` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "price",
ADD COLUMN     "total" TEXT NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;
