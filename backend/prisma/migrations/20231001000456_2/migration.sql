/*
  Warnings:

  - You are about to drop the column `open` on the `Gate` table. All the data in the column will be lost.
  - Added the required column `locked` to the `Gate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opened` to the `Gate` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "locked" BOOLEAN NOT NULL,
    "opened" BOOLEAN NOT NULL
);
INSERT INTO "new_Gate" ("id") SELECT "id" FROM "Gate";
DROP TABLE "Gate";
ALTER TABLE "new_Gate" RENAME TO "Gate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
