/*
  Warnings:

  - Added the required column `cor` to the `orcamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanho` to the `orcamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orcamentos" ADD COLUMN     "cor" TEXT NOT NULL,
ADD COLUMN     "tamanho" TEXT NOT NULL;
