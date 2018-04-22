DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers(
id integer(10) not NULL AUTO_INCREMENT,
burger_name VARCHAR(120) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);


