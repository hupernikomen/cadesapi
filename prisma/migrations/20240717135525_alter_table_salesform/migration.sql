/*
  Warnings:

  - The `paidOut` column on the `salesforms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "salesforms" DROP COLUMN "paidOut",
ADD COLUMN     "paidOut" DOUBLE PRECISION;
