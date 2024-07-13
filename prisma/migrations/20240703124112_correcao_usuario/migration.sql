/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `pedidos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_usuarioId_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "usuarioId";
