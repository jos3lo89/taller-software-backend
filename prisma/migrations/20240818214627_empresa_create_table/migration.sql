/*
  Warnings:

  - You are about to drop the `Ping` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ping";

-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(90) NOT NULL,
    "telphone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "photo" VARCHAR(100) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);
