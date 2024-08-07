/*
  Warnings:

  - You are about to drop the column `installments` on the `salesforms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "salesforms" DROP COLUMN "installments",
ADD COLUMN     "cash" DOUBLE PRECISION,
ADD COLUMN     "timesToPay" TEXT;
