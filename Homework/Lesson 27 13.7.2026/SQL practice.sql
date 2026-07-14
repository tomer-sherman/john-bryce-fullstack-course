USE `animal store`;

-- Creating animals base table
CREATE TABLE animals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    animalCategoryId INT NOT NULL,
    date_of_birth DATE NOT NULL,
    fullPrice DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(5, 2) DEFAULT 0.00 NOT NULL
);


-- Created animal category table
CREATE TABLE animal_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    animalCategory VARCHAR(20) NOT NULL UNIQUE
);

-- Added forign key TOO the ANIMALS TABLE.
ALTER TABLE animals
ADD CONSTRAINT fk_animal_category
FOREIGN KEY (animalCategoryId) REFERENCES animal_category(id)
ON DELETE RESTRICT
ON UPDATE CASCADE;


-- Added rules too the ANIMAL price:
ALTER TABLE animals
ADD CONSTRAINT chk_positive_price 
CHECK (fullPrice > 0);

-- Added rules too animal discount.
ALTER TABLE animals
ADD CONSTRAINT chk_valid_discount 
CHECK (discount >= 0.00 AND discount <= 100.00);

-- Cheking if the constrains/validations exist!!
SELECT tc.TABLE_NAME, cc.CONSTRAINT_NAME, cc.CHECK_CLAUSE 
FROM INFORMATION_SCHEMA.CHECK_CONSTRAINTS cc
JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc 
  ON cc.CONSTRAINT_NAME = tc.CONSTRAINT_NAME 
  AND cc.CONSTRAINT_SCHEMA = tc.CONSTRAINT_SCHEMA
WHERE tc.CONSTRAINT_SCHEMA = 'animalstore' 
  AND tc.TABLE_NAME = 'animals';
  
  -- Checking forigen keys connections:
  SELECT 
    CONSTRAINT_NAME AS 'Constraint Name',
    COLUMN_NAME AS 'Local Column',
    REFERENCED_TABLE_NAME AS 'Referenced Table',
    REFERENCED_COLUMN_NAME AS 'Referenced Column'
FROM 
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE 
    TABLE_SCHEMA = 'animalstore'
    AND TABLE_NAME = 'animals'
    AND REFERENCED_TABLE_NAME IS NOT NULL;
    
    
    
    -- EXERCISISING MY SELF:
    -- Creating a city table
    CREATE TABLE cities (
    id INT AUTO_INCREMENT PRIMARY KEY,
	name varchar(20) NOT NULL UNIQUE
);

-- Creating a customer table
	CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    cityId INT NOT NULL,
    address VARCHAR(50) NOT NULL
);

-- Linking customer cityId too the city table id:
ALTER TABLE customers
ADD CONSTRAINT fk_customer_city_id
FOREIGN KEY (cityId) REFERENCES cities(id)
ON DELETE RESTRICT
ON UPDATE CASCADE;

-- Creating phones table:
CREATE TABLE phones (
id INT AUTO_INCREMENT PRIMARY KEY,
phoneNum VARCHAR(14) NOT NULL,
customerId INT NOT NULL
);

-- Linking phones table with customer table:
ALTER TABLE phones
ADD CONSTRAINT fk_phone_customer_id
FOREIGN KEY (customerId) REFERENCES customers(id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Creating customers_buy_list table:
CREATE TABLE customer_buy_list (
customerId INT NOT NULL PRIMARY KEY,
animalId INT NOT NULL UNIQUE
);


-- Linking the customer buy list too the PK's
ALTER TABLE customer_buy_list
ADD CONSTRAINT fk_customer_id
FOREIGN KEY (customerId) REFERENCES customers(id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

ALTER TABLE customer_buy_list
ADD CONSTRAINT fk_animal_id
FOREIGN KEY (animalId) REFERENCES animals(id)
ON DELETE NO ACTION
ON UPDATE CASCADE;




    
  
  