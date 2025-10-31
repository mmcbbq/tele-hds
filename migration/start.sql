Drop DATABASE IF EXISTS company;

CREATE DATABASE company;
use company;
create table employee(
    id int auto_increment PRIMARY KEY,
    fname varchar(255),
    lname varchar(255)
);

INSERT INTO employee(fname, lname)
values ('Peter', 'Pan'),
       ('Donald', 'Trump'),
       ('George', 'Busch');


