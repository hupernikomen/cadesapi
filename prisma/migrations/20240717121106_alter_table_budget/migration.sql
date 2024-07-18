/*
  Warnings:

  - Changed the type of `total` on the `budgets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `unit` on the `budgets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "total",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL,
DROP COLUMN "unit",
ADD COLUMN     "unit" DOUBLE PRECISION NOT NULL;
