/*
  Warnings:

  - You are about to drop the column `cor` on the `produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "cor";

-- CreateTable
CREATE TABLE "cores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "produtoId" TEXT,

    CONSTRAINT "cores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cores" ADD CONSTRAINT "cores_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
