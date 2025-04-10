-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_File" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "userId" TEXT NOT NULL,
    CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_File" ("id", "mimeType", "name", "size", "uploadedAt", "url", "userId") SELECT "id", "mimeType", "name", "size", "uploadedAt", "url", "userId" FROM "File";
DROP TABLE "File";
ALTER TABLE "new_File" RENAME TO "File";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
