const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');
let promptsAdded = 0;

db.serialize(() => {
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'General',
            $promptText: 'If you could be any animal, what would you be?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'General',
            $promptText: 'Find something you highlighted on your eBook reader that you find hilarious/profound/great.'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'General',
            $promptText: 'Write a funny joke. Or share one you like :)'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'General',
            $promptText: "What's something interesting and new today?"
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'General',
            $promptText: "How do you relax?"
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
    console.log(`Added ${promptsAdded} new prompts to the General collection. There are ${rows.length} rows in the Prompt table.`);
  });

});
