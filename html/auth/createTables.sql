mysql -u<user> -p<password>
CREATE database goodminderDb;
USE goodminderDb
CREATE USER 'goodminderAdmin'@'localhost' IDENTIFIED BY 'bDrednimdoog';
GRANT ALL PRIVILEGES ON * . * TO 'goodminderAdmin'@'localhost';

CREATE TABLE IF NOT EXISTS `usersTbl` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) NOT NULL,
  `userNameFamiliar` varchar(100) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  `userPass` varchar(100) NOT NULL,
  `userStatus` enum('Y','N') NOT NULL DEFAULT 'N',
  `tokenCode` varchar(100) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userEmail` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS promptsTbl (
	promptId int(11) NOT NULL AUTO_INCREMENT,
	category char(25) DEFAULT NULL,
	promptText text(10000) DEFAULT NULL,
	PRIMARY KEY (promptId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS userCustomizationTbl	(
	customizationId int(11) NOT NULL AUTO_INCREMENT,
	userId int(11),
	backgroundPicture text(255) DEFAULT NULL,
	textFont text(25) DEFAULT NULL,
	PRIMARY KEY (customizationId),
	FOREIGN KEY (userId) REFERENCES usersTbl(userId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS collectionItemsTbl	(
	collectionId int(11) NOT NULL AUTO_INCREMENT,
	userId int(11),
	collectionType text(25) DEFAULT NULL,
    category text(25) DEFAULT NULL,
	mainResponse text(10000) DEFAULT NULL,
    who text(24) DEFAULT NULL,
	author text(255) DEFAULT NULL,
	promptId int(11),
	reason text(10000) DEFAULT NULL,
	source text (255) DEFAULT NULL,
	rating text(25) DEFAULT NULL,
	recordedDate datetime,
	eventDate datetime NULL,
	updatedDate datetime NULL,	
    publicFlag tinyint(1),
	PRIMARY KEY (collectionId),
	FOREIGN KEY (userId) REFERENCES usersTbl(userId),
	FOREIGN KEY (promptId) REFERENCES promptsTbl(promptId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS socialTbl (
	socialId int(11) NOT NULL AUTO_INCREMENT,
	userId int(11),
	points int(11) DEFAULT NULL,
	PRIMARY KEY (socialId),
    FOREIGN KEY (userId) REFERENCES usersTbl(userId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


