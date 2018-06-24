const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('../db.sqlite');

// Begin db.serialize
db.serialize(function() {
db.run('DROP TABLE IF EXISTS Gminder',
  error => {
  if (error) {
        throw error;
      }
});
db.run('DROP TABLE IF EXISTS Prompt',
  error => {
  if (error) {
        throw error;
      }
});
db.run('DROP TABLE IF EXISTS Social',
  error => {
  if (error) {
        throw error;
      }
});
db.run('CREATE TABLE Gminder (id INTEGER PRIMARY KEY, userID INTEGER NOT NULL, category TEXT NOT NULL, mainResponse TEXT NOT NULL, author TEXT, promptID INTEGER, reason TEXT, source TEXT, who TEXT, rating INTEGER DEFAULT 0, recordedDate TEXT, eventDate TEXT, updatedDate TEXT, collection TEXT, publicFlag INTEGER, FOREIGN KEY(promptID) REFERENCES Prompt(id))',
  error => {
  if (error) {
    throw error;
  }
});

db.run('CREATE TABLE Prompt (id INTEGER PRIMARY KEY, collection TEXT, promptText TEXT NOT NULL)',
  error => {
  if (error) {
    throw error;
  }
});
db.run('CREATE TABLE Social (id INTEGER PRIMARY KEY, userID INTEGER, points INTEGER, lastUpdated TEXT)',
error => {
if (error) {
  throw error;
}
});

});
// End db.serialize
console.log(`The following tables have been dropped and recreated: Prompt, Gminder, Social`);
