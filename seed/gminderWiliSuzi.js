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
            $source: "Sophie's World: A Novel About the History of Philosophy",
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
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'quote',
            $mainResponse: "Recall the experiment of Pavlov's dogs, who are tricked into salivating on a bell they heard before getting a steak.  In a similar way, we risk salivating on money and not on happiness.  This leads to too much thinking on where money comes from, and not enough thinking on where happiness comes from.",
            $author: 'Will',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
            $collection: 'Wili',
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
            $mainResponse: "We still like to eat food when we are hungry, to drink water, to poo and pee, to find shelter, to grow plants and smell flowers, to sound a fart, build a fire, make babies and sleep in a warm bed.  These things are the most reliable sources of happiness in life.  Don't underestimate them.",
            $author: 'Will',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
            $collection: 'Wili',
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
            $mainResponse: '...if you happen to find a vein of pure metallic happiness in your life, this is a very special moment.  It best to occupy yourself with mining its depths.',
            $author: 'Will',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
            $collection: 'Wili',
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
            $mainResponse: 'I am a fan of finding happiness through tranquility and occupation.',
            $author: 'Will',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
            $collection: 'Wili',
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
            $mainResponse: "When I meditate, sometimes instead of clearing my mind of thought I have more diverse thoughts. They are my own thoughts, rather than someone else's, or influenced by a show or video that I am watching. Because they are my own, I find them more meaningful. It is an opportunity to know myself better. I can ask myself, what thoughts am I having now? And not dwell on any one thought for too long.",
            $author: 'Susan',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
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
            $mainResponse: "Imagine what it would be to be that bird up there. So easy, to just take flight and observe us earth-bound humans, going about our daily lives. So easy, to fly over us, finding patches of green and bodies of water.",
            $author: 'Susan',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
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
            $mainResponse: "To walk, without a hurry, in nature -- I glorify this.",
            $author: 'Susan',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
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
            $mainResponse: "If facts don't care about my feelings, I'd be wary of worshipping the facts. They are useful tools, but don't expect to find purpose there.",
            $author: 'Susan',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
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
            $mainResponse: "Media can trick us into believing we are connected, while being lacking in physical interaction that facilitates connections. It satiates one social urge, but too often does not deliver the desired outcome -- the reason why we have that urge.",
            $author: 'Susan',
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
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
            $mainResponse: 'A human being is not one in pursuit of happiness but rather in search of a reason to be happy.',
            $author: 'Viktor E. Frankl',
            $promptID: '',
            $reason: '',
            $source: "Man's Search for Meaning",
            $who: '',
            $rating: 5,
            $recordedDate: '6/28/18',
            $eventDate: '',
            $updatedDate: '6/28/18',
            $collection: 'Inspirational',
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
            $promptID: '',
            $reason: '',
            $source: '',
            $who: '',
            $rating: 5,
            $recordedDate: '6/20/18',
            $eventDate: '',
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
