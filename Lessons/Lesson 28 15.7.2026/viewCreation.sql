select id, name, stock from products where stock > 0 and price between 10 and 20;
select id, name, price from products where stock > 0 ;
select name, price , stock from products where stock > 0 and name like  'a%';

create view inStockProducts as
select id, name , price, stock from products where stock > 0 ;

select * from inStockProducts where price between 10 and 20;
select id, name, price from instockproducts;
select name, price, stock from instockproducts where name like 'a%'; 

--  View exercise
-- The view returns
select * from orders;

create view shipTable as
select o.id, o.orderDate, o.freight, s.name
from orders as o join shippers as s -- the join sequence Could be right join left join, Or join like this
on s.id = o.shipperId; -- This is the relation connection s.id is the PK(in shipers) and FK(in orders)

select * from shiptable where freight < 50 order by freight;



