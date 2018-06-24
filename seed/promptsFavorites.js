const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');
let promptsAdded = 0;

db.serialize(() => {
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is something you cooked recently that was new and tasty?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is your favorite computer game and why?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is a simple activity that you enjoy doing? '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is the cutest thing you saw today?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is a movie that tends to improve your mood?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'Who is someone you are glad exists?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is a really interesting question somebody asked you? '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });

  db.all('SELECT * FROM Prompt', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Added ${promptsAdded} new prompts to the Favorites collection. There are ${rows.length} rows in the Prompt table.`);
  });

});
