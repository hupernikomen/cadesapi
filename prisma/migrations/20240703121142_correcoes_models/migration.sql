/*
  Warnings:

  - You are about to drop the column `clienteId` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `pedidoId` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `entradas` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saidas` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pedidoId_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "clienteId",
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "pedidoId",
DROP COLUMN "quantidade",
ADD COLUMN     "entradas" INTEGER NOT NULL,
ADD COLUMN     "saidas" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "orcamentos" (
    "id" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orcamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orcamentos_pedidoId_key" ON "orcamentos"("pedidoId");

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orcamentos" ADD CONSTRAINT "orcamentos_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orcamentos" ADD CONSTRAINT "orcamentos_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
