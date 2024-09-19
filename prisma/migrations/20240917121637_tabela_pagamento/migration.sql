-- CreateTable
CREATE TABLE "pagamentos" (
    "id" TEXT NOT NULL,
    "parcelas" INTEGER NOT NULL DEFAULT 0,
    "desconto" INTEGER,
    "totalDaNota" DOUBLE PRECISION NOT NULL,
    "valorAdiantado" DOUBLE PRECISION,
    "totalPago" DOUBLE PRECISION NOT NULL,
    "obs" TEXT,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ordemDeCompraID" TEXT,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_ordemDeCompraID_fkey" FOREIGN KEY ("ordemDeCompraID") REFERENCES "ordensDeCompras"("id") ON DELETE SET NULL ON UPDATE CASCADE;
