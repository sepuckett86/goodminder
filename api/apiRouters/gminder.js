const express = require('express');
const gminderRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

gminderRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM Gminder',
  function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})

gminderRouter.get('/:id', (req, res, next) => {
  db.all('SELECT * FROM Gminder WHERE id = $id', {
    $id: req.params.id
  },
  function (error, row) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: row})
    }
  })
})

gminderRouter.post('/', (req, res, next) => {
  if (!req.body.gminder) {
    res.status(400).send();
  };
  const sql = 'INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag) ' +
                          'VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)';
  db.run(sql, {
    $userID: req.body.gminder.userID,
    $category: req.body.gminder.category,
    $mainResponse: req.body.gminder.mainResponse,
    $author: req.body.gminder.author,
    $promptID: req.body.gminder.promptID,
    $reason: req.body.gminder.reason,
    $source: req.body.gminder.source,
    $who: req.body.gminder.who,
    $rating: req.body.gminder.rating,
    $recordedDate: req.body.gminder.recordedDate,
    $eventDate: req.body.gminder.eventDate,
    $updatedDate: req.body.gminder.updatedDate,
    $collection: req.body.gminder.collection,
    $publicFlag: req.body.gminder.publicFlag,
  }, function(error) {
    if (error) {
      console.log(error)
      res.status(404).send();
    } else {
      const sql2 = 'SELECT * FROM Gminder WHERE Gminder.id = $id';
      db.get(sql2, {
        $id: this.lastID
      }, function(error, row) {
        if (error || !row) {
          res.status(404).send();
        } else {
          res.status(201).send({express: row});
        }
      })
    }
  })
})

gminderRouter.put('/:id', (req, res, next) => {
  const sql = 'UPDATE Gminder SET ' +
  'userID = $userID, ' +
  'category = $category, ' +
  'mainResponse = $mainResponse, ' +
  'author = $author, ' +
  'promptID = $promptID, ' +
  'reason = $reason, ' +
  'source = $source, ' +
  'who = $who, ' +
  'rating = $rating, ' +
  'recordedDate = $recordedDate, ' +
  'eventDate = $eventDate, ' +
  'updatedDate = $updatedDate, ' +
  'collection = $collection, ' +
  'publicFlag = $publicFlag ' +
  'WHERE id = $id';
  if (!req.body.gminder) {
    return res.status(400).send();
  } else {
    db.run(sql, {
      $userID: req.body.gminder.userID,
      $category: req.body.gminder.category,
      $mainResponse: req.body.gminder.mainResponse,
      $author: req.body.gminder.author,
      $promptID: req.body.gminder.promptID,
      $reason: req.body.gminder.reason,
      $source: req.body.gminder.source,
      $who: req.body.gminder.who,
      $rating: req.body.gminder.rating,
      $recordedDate: req.body.gminder.recordedDate,
      $eventDate: req.body.gminder.eventDate,
      $updatedDate: req.body.gminder.updatedDate,
      $collection: req.body.gminder.collection,
      $publicFlag: req.body.gminder.publicFlag,
      $id: req.params.id
    }, function(error) {
      if (error) {
        console.log(error);
        res.status(400).send();
      } else {
        const sql2 = 'SELECT * FROM Gminder WHERE id = $id';
        db.get(sql2, {
          $id: req.params.id
        }, function(error, row) {
          if (error || !row) {
            res.status(400).send();
          } else {
            res.status(200).send({express: row});
          }
        })
      }
    })
  }
})

gminderRouter.delete('/:id', (req, res, next) => {
  // Check for existence of menu-item
  const sqlItem = 'SELECT * FROM Gminder WHERE id = $id';
  db.get(sqlItem, {
    $id: req.params.id
  }, function(error, row) {
    if (error || !row) {
      res.status(404).send();
    } else {
      // Delete menu item
      const sqlDelete = 'DELETE FROM Gminder WHERE id = $id';
      db.run(sqlDelete, {
        $id: req.params.id
      }, function(error) {
        if (error) {
          res.status(404).send();
        } else {
          res.status(204).send();
        }
      })
    }
  })
})


module.exports = gminderRouter;
