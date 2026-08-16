-- ---------------------------------------------------------
-- AM:PM Store - Database Schema
-- ---------------------------------------------------------

DROP DATABASE IF EXISTS `am_pm`;
CREATE DATABASE `am_pm` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `am_pm`;

-- ---------------------------------------------------------
-- Categories (parent table - must be created first)
-- ---------------------------------------------------------
CREATE TABLE `categories` (
    `id`   INT          NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uq_categories_name` (`name`)
);

-- ---------------------------------------------------------
-- Products
-- price: DECIMAL(7,2) -> max 99999.99, steps of 0.01
-- ---------------------------------------------------------
CREATE TABLE `products` (
    `id`              INT           NOT NULL AUTO_INCREMENT,
    `name`            VARCHAR(200)  NOT NULL,
    `manufactureDate` DATE          NOT NULL,
    `expirationDate`  DATE          NOT NULL,
    `categoryId`      INT           NOT NULL,
    `price`           DECIMAL(7, 2) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `idx_products_categoryId` (`categoryId`),
    CONSTRAINT `fk_products_categories`
        FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT `chk_products_price` CHECK (`price` >= 0 AND `price` <= 99999.99),
    CONSTRAINT `chk_products_dates` CHECK (`expirationDate` >= `manufactureDate`)
);

-- ---------------------------------------------------------
-- Sample data
-- ---------------------------------------------------------
INSERT INTO `categories` (`name`) VALUES
    ('Dairy'),
    ('Bakery'),
    ('Drinks'),
    ('Snacks'),
    ('Frozen');

INSERT INTO `products` (`name`, `manufactureDate`, `expirationDate`, `categoryId`, `price`) VALUES
    ('Milk 3% 1L',        '2026-08-01', '2026-08-14', 1, 6.90),
    ('Cottage Cheese',    '2026-08-03', '2026-08-20', 1, 7.50),
    ('White Bread',       '2026-08-10', '2026-08-15', 2, 8.20),
    ('Cola 1.5L',         '2026-05-01', '2027-05-01', 3, 9.90),
    ('Potato Chips 150g', '2026-06-15', '2026-12-15', 4, 12.50),
    ('Vanilla Ice Cream', '2026-04-20', '2027-04-20', 5, 24.99);
