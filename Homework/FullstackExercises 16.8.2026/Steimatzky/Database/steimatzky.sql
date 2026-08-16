-- Create the Steimatzky database from zero:
DROP DATABASE IF EXISTS steimatzky;
CREATE DATABASE steimatzky;
USE steimatzky;

-- Genres table (must be created before books, since books references it):
CREATE TABLE genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Books table:
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    summary VARCHAR(1000) NOT NULL,
    genre INT NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (genre) REFERENCES genres(id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

-- Seed 6 genres:
INSERT INTO genres (name) VALUES
    ('Fantasy'),          -- 1
    ('Science Fiction'),  -- 2
    ('Mystery'),          -- 3
    ('Romance'),          -- 4
    ('Horror'),           -- 5
    ('Biography');        -- 6

-- Seed 20 books:
INSERT INTO books (name, summary, genre, price, stock) VALUES
    ('The Crystal Kingdom', 'A young mage discovers a hidden kingdom made entirely of crystal and must protect it from an ancient curse.', 1, 79.90, 12),
    ('Dragons of the North', 'Two rival clans must unite when dragons awaken from a thousand-year slumber in the frozen mountains.', 1, 89.90, 8),
    ('The Last Enchanter', 'The final wizard in a dying world searches for an apprentice to carry on the old magic.', 1, 69.90, 15),
    ('Whispers of the Forest', 'A woodcutter''s daughter learns she can speak with the ancient spirits living in the trees.', 1, 59.90, 20),
    ('Starship Horizon', 'The crew of humanity''s first interstellar ship discovers they are not alone in deep space.', 2, 94.90, 10),
    ('The Mars Protocol', 'A colony on Mars loses contact with Earth and must uncover the truth behind the silence.', 2, 84.90, 7),
    ('Quantum Shadows', 'A physicist accidentally opens a doorway to a parallel universe where history took a darker turn.', 2, 74.90, 18),
    ('Cybernetic Dawn', 'In 2150, a detective with artificial memories hunts a rogue AI hiding inside human hosts.', 2, 99.90, 5),
    ('The Midnight Letter', 'A detective receives an anonymous letter predicting a murder that has not yet happened.', 3, 64.90, 14),
    ('Silent Witness', 'The only witness to a gallery heist is a painting restorer who claims she saw nothing.', 3, 69.90, 11),
    ('The Vanishing Train', 'An entire train disappears between two stations, and one inspector refuses to close the case.', 3, 74.90, 9),
    ('Cold Case Harbor', 'A retired detective returns to her hometown to solve the case that ended her career.', 3, 59.90, 16),
    ('Letters to Amalia', 'Two strangers exchange letters through a used bookshop, falling in love before ever meeting.', 4, 54.90, 25),
    ('Summer in Jaffa', 'A chef and a food critic clash over a seaside restaurant, and slowly over their hearts.', 4, 49.90, 22),
    ('The Wedding Planner''s Secret', 'A wedding planner who has given up on love must organize the wedding of her old flame.', 4, 59.90, 13),
    ('The House on Willow Lane', 'A family moves into their dream home, only to find the previous owners never really left.', 5, 69.90, 6),
    ('Beneath the Cellar', 'Renovation workers uncover a sealed cellar door that should have stayed closed forever.', 5, 74.90, 4),
    ('The Hollow Man', 'A small town is haunted by a faceless figure that appears only in photographs.', 5, 64.90, 10),
    ('A Life in Ink', 'The memoir of a legendary publisher who shaped fifty years of modern literature.', 6, 89.90, 17),
    ('Steel and Stars', 'The inspiring biography of an engineer who rose from a small village to lead a space program.', 6, 94.90, 19);
