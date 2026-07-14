
-- Use northwind database in this script:
use northwind;

-- Select all columns and all rows from products table;
select * from products;

-- Select some columns and all rows from products:
select id, name, price, stock from products;

-- Select some coloums, but give different alias:
select id, name , price as amount, stock from products;

-- Sorting:
select * from products order by name;
select * from products order by name desc;

-- Primary and secondary sorting:
select * from products order by price, stock;

-- Select the top row of products
select * from products limit 10;
-- This works in pagination in amazon for example when you have serveral pages for the same products:
select * from products order by name limit 10 offset 7;

-- Where -- filter rows:
select * from products where price >=10 and price <=20;
select * from products where price >=10 and price <=20 order by price, stock;

-- Special operators: between, in, like:
select * from products where price between 10 and 20; -- > This is like &&
select * from products where price in (10, 20, 30); -- > This is like || 
select * from products where name = 'Chai';
select * from products where name like 'Chai'; 
select * from products where name like 'C%'; -- % --> Zero or more chars.
select * from products where name like '%ch%'; -- % --> strings with ch in the middle.


-- Exercises:

-- You can either select all and it looks like this
select * from employees;

-- Or you can show specific properties and only then filter:
select name, price, stock from products where stock < 0;

select firstName , lastName , birthDate, title from employees where title like '%Sales%';
select * from products where price < 100 and quantity like '%box%' order by price desc;