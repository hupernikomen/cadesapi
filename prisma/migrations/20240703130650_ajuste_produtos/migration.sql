-- AlterTable
ALTER TABLE "produtos" ALTER COLUMN "entradas" DROP NOT NULL,
ALTER COLUMN "entradas" SET DEFAULT 0,
ALTER COLUMN "saidas" DROP NOT NULL,
ALTER COLUMN "saidas" SET DEFAULT 0;
