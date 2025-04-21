/*
  Warnings:

  - You are about to drop the column `sessionId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "zipcode" TEXT;

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "defaultLoyaltyType" "LoyaltyType",
ADD COLUMN     "logoUrl" TEXT,
ADD COLUMN     "themeColor" TEXT;

-- AlterTable
ALTER TABLE "LoyaltyCard" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "LoyaltyCardStamp" ADD COLUMN     "purchaseAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Reward" ADD COLUMN     "available" BOOLEAN,
ADD COLUMN     "stock" INTEGER,
ADD COLUMN     "type" "LoyaltyType";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sessionId",
ADD COLUMN     "hasFirstAccess" BOOLEAN DEFAULT true;

-- CreateTable
CREATE TABLE "LogsError" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "stackTrace" TEXT,
    "method" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "userId" TEXT,
    "customerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogsError_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LogsError" ADD CONSTRAINT "LogsError_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogsError" ADD CONSTRAINT "LogsError_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
