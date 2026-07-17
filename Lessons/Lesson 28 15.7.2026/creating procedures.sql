use northwind;

select * from products;

-- Change the delimiter from ; to $ so we could use ; as insidee the stored procedure:
delimiter $

create procedure getProducts(min DECIMAL(6,2), max DECIMAL(6,2)) -- > (6,2) --> 6 digits in total decimals included 9999.99
begin
	select * from products where price between min and max order by price;
end $

-- Change back the delimiter to ;
delimiter ;

-- Call the stored procedure
call getProducts(10,20);

delimiter $
create procedure getCustomersFromCountry(countryName varchar(50))
begin
select *  from customers where countryId = (select id from countries where name like countryName);
end $
delimiter ;

call getCustomersFromCountry('USA');

truncate table someTableName; -- Removes all the data resets the keys and all the data inside, but the main Coloumn structure is still there. delete doesn't reset the keys.

select * from customers;