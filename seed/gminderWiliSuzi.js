const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db.sqlite');
let gmindersAdded = 0;
db.serialize(() => {

  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: 'After vigintillions of years great Cthulhu was loose again, and ravening for delight.',
            $author: 'H. P. Lovecraft',
            $promptID: null,
            $reason: null,
            $source: 'The Call of Cthulhu',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Amusing',
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
            $mainResponse: 'Failure to make a decision was in itself a decision...',
            $author: 'Frank Herbert',
            $promptID: null,
            $reason: null,
            $source: 'Children of Dune',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
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
            $mainResponse: '...it was worth the tedium of visitors to experience the pleasure of their going.',
            $author: 'Daphne du Maurier',
            $promptID: null,
            $reason: null,
            $source: 'My Cousin Rachel',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
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
            $mainResponse: 'Pain can only feed on pain. Pain cannot feed on joy. It finds it quite indigestible.',
            $author: 'Eckhart Tolle',
            $promptID: null,
            $reason: null,
            $source: 'The Power of Now',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
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
            $mainResponse: 'There were times when it felt like words were mere threads, completely inadequate to contain the enormity of her thoughts. The landscape in her head rearranged with tectonic vigor, coming together with a certainty that was larger than her ability to explain.',
            $author: 'Courtney Milan',
            $promptID: null,
            $reason: null,
            $source: 'The Duchess War',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Beautiful Word Salad',
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
            $mainResponse: 'Socrates saw his task as helping people to "give birth" to the correct insight, since real understanding must come from within. It cannot be imparted by someone else.',
            $author: 'Jostein Gaarder',
            $promptID: null,
            $reason: null,
            $source: 'Sophie’s World: A Novel About the History of Philosophy',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Sounds Good on Paper',
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
            $mainResponse: 'Very sleek and fat did the cats appear, and sonorous with purring content.',
            $author: 'H. P. Lovecraft',
            $promptID: null,
            $reason: null,
            $source: 'H. P. Lovecraft: The Complete Collection',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Amusing',
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
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
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
            $mainResponse: 'You cannot possibly take on the whole world. Good thing you never have to.',
            $author: 'Susan',
            $promptID: null,
            $reason: null,
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Suzi',
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
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Present',
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
            $mainResponse: 'Imaging studies have shown that only a small, quarter-sized region of your brain lights up when someone tells you a series of facts. However, when someone tells you a story laced with those facts, or those facts in action, your entire brain lights up.',
            $author: 'Isaiah Hankel',
            $promptID: null,
            $reason: null,
            $source: 'Black Hole Focus',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Sounds Good on Paper',
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
            $mainResponse: 'I know nothing directly about the electrochemical activity of my brain--and yet this soggy miracle of computation appears to be working for the moment and generating a vision of the world.',
            $author: 'Sam Harris',
            $promptID: null,
            $reason: null,
            $source: 'Waking Up: A Guide to Spirituality Without Religion',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Present',
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
            $mainResponse: 'Movies and television magically transform the primordial context of face-to-face encounters, in which human beings have always been subjected to harrowing social lessons, allowing us, for the first time, to devote ourselves wholly to the act of observing other people. This is voyeurism of a transcendental kind.',
            $author: 'Sam Harris',
            $promptID: null,
            $reason: null,
            $source: 'Waking Up: A Guide to Spirituality Without Religion',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Present',
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
            $mainResponse: '...humor, more than anything else in the human make-up, can afford an aloofness and an ability to rise above any situation, even if only for a few seconds.',
            $author: 'Viktor E. Frankl',
            $promptID: null,
            $reason: null,
            $source: "Man's Search for Meaning",
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Present',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });


// Template
/*
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: '',
            $author: '',
            $promptID: null,
            $reason: null,
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: null,
            $updatedDate: '6/20/18',
            $collection: 'Present',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            } else {
              gmindersAdded++;
            }
  });

*/
  db.all('SELECT * FROM Gminder', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Finished seeding. Added ${gmindersAdded} goodminders. There are ${rows.length} rows into the Gminder table.`);
  });

});
