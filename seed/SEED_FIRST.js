const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');

db.serialize(() => {
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'What is a song that made you smile in the past month?'
          }, (err) => {
            if (err) {
              throw err;
            }
          });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Happenings',
            $promptText: 'Share a time when you were proud of yourself'
          }, (err) => {
            if (err) {
              throw err;
            }
          });
  db.run(`INSERT INTO Prompt (collection, promptText)
          VALUES ($collection, $promptText)`, {
            $collection: 'Favorites',
            $promptText: 'Who is your favorite person? Why?'
          }, (err) => {
            if (err) {
              throw err;
            }
          });

  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'prompt',
            $mainResponse: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
            $author: null,
            $promptID: 1,
            $reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
            $source: null,
            $who: null,
            $rating: 4,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Favorites',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            }
          });

  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: 'May your beer be laid under an enchantment of surpassing excellence for seven years!',
            $author: 'J.R.R. Tolkien',
            $promptID: null,
            $reason: 'One of the best read-out-loud moments in the book.',
            $source: 'The Fellowship of the Ring',
            $who: 'Gandalf',
            $rating: 5,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Happy',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            }
          });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'custom',
            $mainResponse: 'Smile at your thoughts :)',
            $author: null,
            $promptID: null,
            $reason: null,
            $source: null,
            $who: null,
            $rating: 4,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: null,
            $collection: 'Affirmations',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            }
          });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'prompt',
            $mainResponse: 'My husband, Will.',
            $author: null,
            $promptID: 3,
            $reason: 'I see him every day and he is such a positive influence on my life. <3',
            $source: null,
            $who: null,
            $rating: 5,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: null,
            $collection: 'Favorites',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            }
          });


  db.all('SELECT * FROM Gminder', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Finished seeding. There are ${rows.length} rows into the Gminder table.`);
  });
  db.all('SELECT * FROM Prompt', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`There are ${rows.length} rows into the Prompt table.`);
  });

});
