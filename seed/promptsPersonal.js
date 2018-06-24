const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');
let promptsAdded = 0;

db.serialize(() => {
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'How have you changed for the better (in your opinion) in the past year?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Have you made a new friendship recently? Who is it and what do you like about that person?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What is a quality that you admire in someone else? What are examples of this quality? '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What is something that makes you feel wonder? Hope? Motivation? Love?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Open up your phone photos and find one that makes you smile. What is it?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What is something worthwhile you learned in the past week?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What are you thankful for?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Write down three good things in your life right now. They can be minor or major. '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What is something that helps you relieve anxiety? '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Describe something that can be a negative but is also somewhat funny or amusing. '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Write a description of a place in which you spend a large amount of your time. What is one way you have positively impacted that space?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'How do you feel when you are doing something you are passionate about? Describe it.'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Describe something you created that you are proud of. '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'What is something you have changed your mind in and felt more enlightened because of it?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Describe a time when you were right and somebody else was wrong. '
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'When was a time you suffered but made it through the suffering?'
          }, (err) => {
            if (err) {
              throw err;
            } else {
              promptsAdded++;
            }
  });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Personal',
            $promptText: 'Find the most meaningful object in the room. Describe it.'
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
    console.log(`Added ${promptsAdded} new prompts to the Personal collection. There are ${rows.length} rows in the Prompt table.`);
  });

});
