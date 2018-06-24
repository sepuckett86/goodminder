const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');
let gmindersAdded = 0;
db.serialize(() => {

  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: `This is the story: It was Spring. The warm sunshine and soft breezes were trying to lure students away from their classes.\
          Santayana was seated at his desk reading to his students. His listeners were sitting, or reclining, in various attitudes of inattention.\
          Santayanas voice trailed off, his eyes traveled over his students, and fixed themselves on a tree which grew outside the window.\
          Its leaves were small and tender, and of the green green of new leaves. Santayana closed the book. A short silence elapsed.\
          He rose, and said: "Gentlemen, it is Spring!" He took his hat and never returned.`,
            $author: 'Will Durant',
            $promptID: null,
            $reason: null,
            $source: 'On the Meaning of Life',
            $who: 'A participant in an inquiry on the meaning of life',
            $rating: 3,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Happy',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: 'Everything that one has ever created achieves reality.',
            $author: 'Halldor Laxness',
            $promptID: null,
            $reason: null,
            $source: 'Independent People',
            $who: null,
            $rating: 2,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Food for a Hungry Brain',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: '...a man should fight for the victims, but if he ceases caring for anything outside that, whats the use of his fighting?',
            $author: 'Albert Camus',
            $promptID: null,
            $reason: null,
            $source: 'The Plague',
            $who: null,
            $rating: 4,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Food for a Hungry Brain',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: 'I realized then that when people are happy they become kind.',
            $author: 'Jung Chang',
            $promptID: null,
            $reason: null,
            $source: 'Wild Swans: Three Daughters of China',
            $who: null,
            $rating: 4,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Food for a Hungry Brain',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: 'Almost everybody feels at peace with nature: listening to the ocean waves against the shore, by a still lake, in a field of grass, on a windblown heath. One day, when we have learned the timeless way again, we shall feel the same about our towns, and we shall feel as much at peace in them, as we do today walking by the ocean, or stretched out in the long grass of a meadow.',
            $author: 'Christopher Alexander',
            $promptID: null,
            $reason: null,
            $source: 'The Timeless Way of Building',
            $who: null,
            $rating: 3,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Food for a Hungry Brain',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });

  db.all('SELECT * FROM Gminder', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Finished seeding. Added ${gmindersAdded} goodminders. There are ${rows.length} rows into the Gminder table.`);
  });

});
