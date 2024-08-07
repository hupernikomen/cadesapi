/*
  Warnings:

  - You are about to drop the `budgets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collaborators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salesforms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_productID_fkey";

-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_salesformID_fkey";

-- DropForeignKey
ALTER TABLE "salesforms" DROP CONSTRAINT "salesforms_clientID_fkey";

-- DropForeignKey
ALTER TABLE "salesforms" DROP CONSTRAINT "salesforms_collaboratorID_fkey";

-- DropTable
DROP TABLE "budgets";

-- DropTable
DROP TABLE "clients";

-- DropTable
DROP TABLE "collaborators";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "salesforms";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "codigoDeBarras" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "saida" INTEGER DEFAULT 0,
    "reservado" INTEGER DEFAULT 0,
    "valorAtacado" TEXT NOT NULL,
    "valorVarejo" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordensDeCompras" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Aberto',
    "formaDePagamento" TEXT,
    "valorPago" DOUBLE PRECISION,
    "tempoDePegamento" TEXT,
    "observacao" TEXT,
    "valoAdiantado" DOUBLE PRECISION,
    "clienteID" TEXT,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "usuarioID" TEXT,

    CONSTRAINT "ordensDeCompras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itensDoPedido" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "produtoID" TEXT NOT NULL,
    "ordemDeCompraID" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "itensDoPedido_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ordensDeCompras" ADD CONSTRAINT "ordensDeCompras_clienteID_fkey" FOREIGN KEY ("clienteID") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordensDeCompras" ADD CONSTRAINT "ordensDeCompras_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itensDoPedido" ADD CONSTRAINT "itensDoPedido_produtoID_fkey" FOREIGN KEY ("produtoID") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itensDoPedido" ADD CONSTRAINT "itensDoPedido_ordemDeCompraID_fkey" FOREIGN KEY ("ordemDeCompraID") REFERENCES "ordensDeCompras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
