/*
  Warnings:

  - Added the required column `preco` to the `orcamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orcamentos" ADD COLUMN     "preco" TEXT NOT NULL;
