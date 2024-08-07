/*
  Warnings:

  - You are about to drop the column `tempoDePegamento` on the `ordensDeCompras` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ordensDeCompras" DROP COLUMN "tempoDePegamento",
ADD COLUMN     "tempoDePagamento" TEXT;
