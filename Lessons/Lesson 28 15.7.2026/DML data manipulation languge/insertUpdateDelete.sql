-- Insert:

insert into products (name,price,stock) values('pizza', 100,200);
select * from products;


-- Insert:
insert into products(name, price, stock) values('apple', 3 ,default);

-- Update:

update products set name = 'Amazing Pizza', price = 120, stock = 240 where id = 79; -- Never RUN THIS WITHOUT WHERE!!!!! this is huge problemmmm!!!!!! NEVERRRRR

-- Delete:
delete from products where id= 79 ;

delete from products where id = 1; -- cannot delete chai because it has a FK connections with another table and it is restricted;

select * from employees;
-- Adding my self as a employee
insert into employees(firstName, lastName, title, birthDate, hireDate) values('Tomer','Sherman','Pro mega PRO developer', '2002-06-20', '2026-07-15');

update employees set title = 'AMAZING GIGA CHAD' where id = 10;

delete from employees where id = 10;