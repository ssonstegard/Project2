drop database if exists adventure_db;

create database adventure_db;

use adventure_db;

CREATE TABLE ADVENTURE (
  id int PRIMARY KEY,
  name varchar(40),
  image varchar (255),
  route1 int not null,
  route2 int not null,
  route3 int,
  route4 int
);