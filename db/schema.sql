DROP DATABASE IF EXISTS `gallery_db`;
CREATE DATABASE `gallery_db`;
USE gallery_db;

CREATE TABLE gallery(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  gallery_name VARCHAR(100),
  PRIMARY KEY (id)
);