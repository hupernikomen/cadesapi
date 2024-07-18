/*
  Warnings:

  - You are about to drop the column `country` on the `clients` table. All the data in the column will be lost.
  - Added the required column `address` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "country",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salesforms" ADD COLUMN     "formPayment" TEXT;
