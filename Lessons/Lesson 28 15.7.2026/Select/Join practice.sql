select * from orders;

select o.id , o.shippedDate, c.companyName
 from customers as c left join orders as o
 on c.id = o.customerId
 where year(orderDate) = 1997;
 

 