CREATE DATABASE bAmazon_DB;
USE bAmazon_DB;

CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY(item_id)
);

USE bamazon_db;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11111, "calculator", "school supplies", 25.00, 10),
(22222, "Illy Cafe", "groceries", 7.50, 25),
(33333, "mascara", "beauty", 5.00, 100),
(44444, "tent", "camping", 135.00, 2),
(55555, "O Me O My", "books", 15.00, 46),
(66666, "saline solution", "vision", 3.75, 34),
(77777, "Vitamin E", "health", 7.99, 58),
(88888, "Best of Cat Stevens", "music", 12.00, 64),
(99999, "lawnmower", "gardening", 325.00, 8),
(10203, "chrome stick", "electronic", 30.00, 70);