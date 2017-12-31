mysql -u<user> -p<password>
CREATE database goodminderDb;
USE goodminderDb
CREATE USER 'goodminderAdmin'@'localhost' IDENTIFIED BY 'bDrednimdoog';
GRANT ALL PRIVILEGES ON * . * TO 'goodminderAdmin'@'localhost';

CREATE TABLE IF NOT EXISTS `usersTbl` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  `userPass` varchar(100) NOT NULL,
  `userStatus` enum('Y','N') NOT NULL DEFAULT 'N',
  `tokenCode` varchar(100) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userEmail` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;