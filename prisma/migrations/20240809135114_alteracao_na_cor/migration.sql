/*
  Warnings:

  - You are about to drop the column `produtoId` on the `cores` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cores" DROP CONSTRAINT "cores_produtoId_fkey";

-- AlterTable
ALTER TABLE "cores" DROP COLUMN "produtoId";

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "corID" TEXT;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_corID_fkey" FOREIGN KEY ("corID") REFERENCES "cores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
