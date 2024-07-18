/*
  Warnings:

  - You are about to drop the column `color` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `ref` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `budgets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "color",
DROP COLUMN "ref",
DROP COLUMN "size";
