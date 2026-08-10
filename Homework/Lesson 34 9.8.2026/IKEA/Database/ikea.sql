-- ------------------------------------------------------
-- IKEA dummy store - database schema
-- Database: ikea
-- ------------------------------------------------------

DROP DATABASE IF EXISTS `ikea`;
CREATE DATABASE `ikea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `ikea`;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_UNIQUE` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryId` int NOT NULL,
  `size` varchar(30) NOT NULL COMMENT 'height x width x depth in cm, e.g. 30x50x100',
  `color` varchar(30) NOT NULL,
  `price` decimal(7,2) NOT NULL DEFAULT '0.00' COMMENT 'max 99999.99',
  PRIMARY KEY (`id`),
  KEY `product_category_idx` (`categoryId`),
  CONSTRAINT `product_category` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
  (1, 'Couches'),
  (2, 'Tables'),
  (3, 'Closets');

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`categoryId`, `size`, `color`, `price`) VALUES
  (1, '85x220x95',  'Grey',   3499.00),
  (1, '80x180x90',  'Beige',  2199.90),
  (1, '75x200x88',  'Black',  2890.00),
  (2, '75x120x80',  'Birch',   699.90),
  (2, '45x110x60',  'Black',   349.00),
  (2, '73x160x90',  'Oak',    1250.00),
  (3, '200x100x60', 'White',  1899.00),
  (3, '180x80x55',  'Walnut', 1450.50),
  (3, '220x150x60', 'Grey',   2390.00),
  -- couches
  (1, '88x218x88',  'Beige',      2990.00),
  (1, '66x180x88',  'Red',        1290.00),
  (1, '66x230x151', 'Dark Grey',  3990.00),
  (1, '83x290x99',  'Light Blue', 5490.00),
  (1, '80x241x98',  'White',      4290.00),
  (1, '78x164x89',  'Black',      3790.00),
  (1, '83x280x163', 'Green',      6190.00),
  -- tables
  (2, '45x55x55',   'White',        79.90),
  (2, '74x140x78',  'Ash',        1190.00),
  (2, '74x155x87',  'Black',      1890.00),
  (2, '75x152x80',  'Birch',      1490.00),
  (2, '50x90x50',   'Black',       349.00),
  (2, '46x118x75',  'Grey-Brown',  890.00),
  (2, '105x140x80', 'Oak',        2290.00),
  -- closets
  (3, '236x150x58', 'White',       2790.00),
  (3, '190x117x50', 'Walnut',      1590.00),
  (3, '197x108x59', 'White Stain', 2190.00),
  (3, '200x120x60', 'Brown',       1790.00),
  (3, '176x79x55',  'Black',        990.00),
  (3, '201x121x60', 'Dark Brown',  3490.00);
