/*
  Warnings:

  - Added the required column `tipo` to the `pagamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pagamentos" ADD COLUMN     "tipo" TEXT NOT NULL;
