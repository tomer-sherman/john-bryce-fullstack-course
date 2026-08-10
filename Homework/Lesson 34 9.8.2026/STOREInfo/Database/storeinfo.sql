-- ============================================
-- StoreInfo Database
-- ============================================

DROP DATABASE IF EXISTS storeinfo;
CREATE DATABASE storeinfo
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE storeinfo;

-- ============================================
-- Tables
-- ============================================

-- The category table must be created first,
-- because stores.category points at it.
CREATE TABLE category (
    id   INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE stores (
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    category INT NOT NULL,
    address  VARCHAR(255) NOT NULL,
    CONSTRAINT fk_stores_category
        FOREIGN KEY (category) REFERENCES category(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ============================================
-- Seed data
-- ============================================

INSERT INTO category (name) VALUES
    ('Supermarket'),   -- 1
    ('Electronics'),   -- 2
    ('Fashion'),       -- 3
    ('Pharmacy'),      -- 4
    ('Coffee Shop');   -- 5

INSERT INTO stores (name, category, address) VALUES
    ('Shufersal Deal',      1, 'Ha-Arba 21, Tel Aviv'),
    ('Rami Levy',           1, 'Derech Hevron 101, Jerusalem'),
    ('KSP',                 2, 'Ibn Gabirol 30, Tel Aviv'),
    ('Bug Electronics',     2, 'Ha-Histadrut 5, Haifa'),
    ('Castro',              3, 'Dizengoff Center, Tel Aviv'),
    ('Fox Home',            3, 'Azrieli Mall, Ramat Gan'),
    ('Super-Pharm',         4, 'Jaffa 42, Jerusalem'),
    ('Be Pharm',            4, 'Ha-Nasi 12, Netanya'),
    ('Aroma Espresso Bar',  5, 'Rothschild 15, Tel Aviv'),
    ('Cofix',               5, 'Herzl 60, Rishon LeZion');

-- ============================================
-- Quick check
-- ============================================

SELECT s.id,
       s.name  AS store_name,
       c.name  AS category_name,
       s.address
FROM stores AS s
JOIN category AS c ON c.id = s.category
ORDER BY c.name, s.name;
