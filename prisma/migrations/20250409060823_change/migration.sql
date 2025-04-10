/*
  Warnings:

  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "enrollment" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER'
);
INSERT INTO "new_User" ("address", "createdAt", "email", "emailVerified", "enrollment", "id", "image", "name", "password", "phone", "role", "updatedAt") SELECT "address", "createdAt", "email", "emailVerified", "enrollment", "id", "image", "name", "password", "phone", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_enrollment_key" ON "User"("enrollment");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
