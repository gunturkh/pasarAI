/*
  Warnings:

  - You are about to drop the column `Type` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `type` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "Type",
ADD COLUMN     "type" TEXT NOT NULL;
