/*
  Warnings:

  - Added the required column `referencia` to the `orcamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orcamentos" ADD COLUMN     "referencia" TEXT NOT NULL;
