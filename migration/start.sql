Drop DATABASE IF EXISTS telehds;

CREATE DATABASE telehds;
use telehds;
create table employee(
    id int auto_increment PRIMARY KEY,
    fname varchar(255),
    lname varchar(255)
);

INSERT INTO employee(fname, lname)
values ('Peter', 'Pan'),
       ('Donald', 'Trump'),
       ('George', 'Busch');


