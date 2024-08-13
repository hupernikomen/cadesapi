-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "matricula" TEXT;

-- CreateTable
CREATE TABLE "bancodehoras" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "bancodehoras_pkey" PRIMARY KEY ("id")
);
