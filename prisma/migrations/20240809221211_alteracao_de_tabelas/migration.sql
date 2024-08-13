/*
  Warnings:

  - You are about to drop the column `totaldaNota` on the `ordensDeCompras` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ordensDeCompras" DROP COLUMN "totaldaNota",
ADD COLUMN     "totalDaNota" DOUBLE PRECISION;
