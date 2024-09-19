-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_ordemDeCompraID_fkey";

-- AlterTable
ALTER TABLE "pagamentos" ALTER COLUMN "ordemDeCompraID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_ordemDeCompraID_fkey" FOREIGN KEY ("ordemDeCompraID") REFERENCES "ordensDeCompras"("id") ON DELETE SET NULL ON UPDATE CASCADE;
