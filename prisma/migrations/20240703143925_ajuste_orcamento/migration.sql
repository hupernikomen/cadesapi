/*
  Warnings:

  - You are about to drop the column `cor` on the `orcamentos` table. All the data in the column will be lost.
  - You are about to drop the column `tamanho` on the `orcamentos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orcamentos" DROP COLUMN "cor",
DROP COLUMN "tamanho";
