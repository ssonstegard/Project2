drop database if exists adventure_db;

create database adventure_db;

use adventure_db;

CREATE TABLE Adventures (
  id INT NOT NULL AUTO_INCREMENT,
  place varchar(40),
  image varchar (255),
  route1 int not null,
  route2 int,
  route3 int,
  route4 int,
   PRIMARY KEY (id)
);