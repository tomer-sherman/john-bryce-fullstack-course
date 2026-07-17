use northwind;

-- Scalar a single value;
-- Scalar function - returns single value from each cell;

select name, floor(price) from products;
select name, ceil(price) from products;
select name, round(price , 1) from products;
select name, upper(name), price from products;
select name, lower(name), price from products;
select length(name), price from products;
select firstName, lastName, birthDate, year(birthDate) from employees;
select firstName, lastName, birthDate, month(birthDate) from employees;

-- Grouping functions
select avg(price) as priceAvg from products;
select max(price) as priceMax from products;
select min(price) as priceMin from products;
select sum(price) as priceSum from products;
select count(price) as priceCount from products;

select avg(price) , avg(stock) from products;
select count(price) , count(stock) from products;

select count(companyName), count(fax), count(*) from customers; -- Count doesn't count nulls meaning too check how much rows exist use *	

-- Group by - define which groups of values too work with which coloumn:
select categoryId , avg(price) from products group by categoryId; -- 2 couloumns one represents the categoryId num, the seconds represents the Avg of each category in this big chart of products
select supplierId, min(price) from products group by supplierId order by min(price);

-- Exercises

select categoryId, count(*) from products group by categoryId;
select cityId , count(*) from employees group by cityId;
select countryId, count(*) as cityNum from cities group by countryId;

select firstName, UPPER(lastName) , year(hireDate) from employees;
select avg(price) as avgBoxPrice from products where quantity like '%box%';
select CONCAT(FirstName, ' ', LastName) AS FullName , monthname(birthDate) as birthMonth, monthname(hireDate) from employees;	

-- Nulls:
select * from customers;
select  companyName, fax from customers where fax is null; -- When working with null you use is null / is not null
select  companyName, fax from customers where fax is not null;
select  companyName, ifnull(fax,'NO FAX') fax from customers;

select phone, fax from customers
union
select phone, fax from suppliers;

-- sub quary
select avg(price) from products;
select * from products where price < (select avg(price) from products);

-- Exercises

select * from employees;
select countryId from employees where reportsTo is null; -- Checks the country id where Reports too field is null CHECKS what is the big boosss country ID
select * from employees where countryId = (select countryId from employees where reportsTo is null); -- checks all the employees which live in this country ID. 

-- Joins
select name,price , categoryId from products;

select name , price , name as category from products join categories; -- will not work cause name has 2 meanings

-- Join
select products.name, price , categoryId, categories.name as category, categories.id -- That is why you add the dots 
 from products join categories
 on categoryId = categories.id; -- When you join you need too usee Join here not where

-- Join using alias for table names:
select p.name, price , categoryId, c.name as category, c.id 
 from products as p join categories as c
 on categoryId = c.id;

-- join exercise
select * from products;

select name, price , stock , companyName , phone
 from products  join suppliers
 on supplierId = suppliers.id
 where stock > 0
 order by companyName;
 
 -- Three table join
 select p.name, price , c.name as category, companyName
 from products as p
 join categories as c
 on categoryId = c.id
 join suppliers as s
 on supplierId = s.id;
 
 -- Inner join- same as join returns only rows contains related in both tables:
 select p.name, p.price , c.name as category
 from products as p join categories as c
 on categoryId = c.id;
 
 -- Left join from the left site table - return all rows, but only related rows from the right table:
  select p.name, p.price , c.name as category
 from products as p left join categories as c
 on categoryId = c.id;
 
 
 -- Right join:
 select p.name, p.price , c.name as category
 from products as p right join categories as c
 on categoryId = c.id;
 
 
 
 
 -- Full join/ outer join
select p.name, p.price , c.name as category
 from products as p left join categories as c 
 on categoryId = c.id
 union                                           -- Union adds rows join add coloumns
 select p.name, p.price , c.name as category
 from products as p right join categories as c 
 on categoryId = c.id;
 
 
 
 

