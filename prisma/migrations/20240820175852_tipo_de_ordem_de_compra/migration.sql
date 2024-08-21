-- AlterTable
ALTER TABLE "ordensDeCompras" ADD COLUMN     "tipo" TEXT;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "estado" SET DEFAULT true;
