/*
  Warnings:

  - Made the column `ordemDeCompraID` on table `pagamentos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_ordemDeCompraID_fkey";

-- AlterTable
ALTER TABLE "pagamentos" ALTER COLUMN "ordemDeCompraID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_ordemDeCompraID_fkey" FOREIGN KEY ("ordemDeCompraID") REFERENCES "ordensDeCompras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
