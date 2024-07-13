/*
  Warnings:

  - You are about to drop the column `produtoId` on the `pedidos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_produtoId_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "produtoId";

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "pedidoId" TEXT;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
