/*
  Warnings:

  - You are about to drop the `bancodehoras` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "cores" ADD COLUMN     "corHexa" TEXT;

-- DropTable
DROP TABLE "bancodehoras";
