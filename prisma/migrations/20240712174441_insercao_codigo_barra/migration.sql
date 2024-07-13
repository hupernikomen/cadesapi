/*
  Warnings:

  - Added the required column `codigo` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "codigo" TEXT NOT NULL;
