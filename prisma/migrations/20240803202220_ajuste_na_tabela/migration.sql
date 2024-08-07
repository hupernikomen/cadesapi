/*
  Warnings:

  - You are about to drop the column `valoAdiantado` on the `ordensDeCompras` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ordensDeCompras" DROP COLUMN "valoAdiantado",
ADD COLUMN     "valorAdiantado" DOUBLE PRECISION;
