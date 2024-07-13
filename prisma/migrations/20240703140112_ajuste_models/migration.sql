-- DropIndex
DROP INDEX "orcamentos_pedidoId_key";

-- AlterTable
ALTER TABLE "pedidos" ALTER COLUMN "status" SET DEFAULT 'Criado';

-- AlterTable
ALTER TABLE "produtos" ALTER COLUMN "saida" SET DEFAULT 0;
