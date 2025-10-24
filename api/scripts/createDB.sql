drop database if exists template_db;
create database template_db;

\c template_db

drop table if exists users cascade;
create table users (
    id serial primary key,
    username varchar(20) unique not null,
    first_name varchar(20),
    last_name varchar(20),
    password varchar(200) not null
);

do $$
  declare
    --Users
    john_user_id int;
    steven_user_id int;

  begin
    -- Password: Oh@myGod07
    INSERT INTO 
      users(email, username, first_name, last_name, password) 
    VALUES 
      ('john123', 'John', 'Michael', '$2b$10$yL7y7H3xU7etfZYboeZRUerbjN.C7wLZn0zRDow98JOgKnhOoOqFq')
    RETURNING id INTO john_user_id;

    INSERT INTO 
      users(email, username, first_name, last_name, password) 
    VALUES 
      ('steven45', 'Steven', 'Jones', '$2b$10$yL7y7H3xU7etfZYboeZRUerbjN.C7wLZn0zRDow98JOgKnhOoOqFq')
    RETURNING id INTO steven_user_id;

  end
$$