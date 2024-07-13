/*
  Warnings:

  - You are about to drop the column `entradas` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `saidas` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `entrada` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "entradas",
DROP COLUMN "saidas",
ADD COLUMN     "entrada" INTEGER NOT NULL,
ADD COLUMN     "saida" INTEGER;
