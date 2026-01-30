Drop DATABASE IF EXISTS telehds;

CREATE DATABASE telehds;
use telehds;
create table user(
    id int auto_increment PRIMARY KEY,
    email varchar(255) UNIQUE ,
    password varchar(255),
    role json
);

# INSERT INTO user(email, password)
# values ('Peter', 'Pan'),
#        ('Donald', 'Trump'),
#        ('George', 'Busch');

CREATE TABLE file(
    id int auto_increment PRIMARY KEY ,
    name varchar(255),
    path varchar(255),
    description varchar(255),
    userid int ,
    foreign key (userid) REFERENCES user(id)
)
