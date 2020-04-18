CREATE TABLE category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50)
);

CREATE TABLE cashier(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50)
);

CREATE TABLE product(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR (50),
    price INT,
    id_category INT,
    FOREIGN KEY (id_category) REFERENCES category(id),
    id_cashier INT,
    FOREIGN KEY (id_cashier) REFERENCES cashier(id)
);

INSERT INTO category(nama) VALUES ('Food');
INSERT INTO category(nama) VALUES ('Drink');

INSERT INTO cashier(nama) VALUES ('Pevita Pearce');
INSERT INTO cashier(nama) VALUES ('Raisa Andriana');
INSERT INTO cashier(nama) VALUES ('Lukman Hadi');

INSERT INTO product(nama, price, id_category, id_cashier) VALUES ('Latte','10000','2','1');
INSERT INTO product(nama, price, id_category, id_cashier) VALUES ('Cake','20000','1','2');
INSERT INTO product(nama, price, id_category, id_cashier) VALUES ('Apem','45000','1','3');


SELECT p.id AS pid, p.nama AS pnama, cat.nama AS catnama, cas.nama AS casnama
FROM product p
    INNER JOIN category cat ON p.id_category = cat.id
    INNER JOIN cashier cas ON p.id_cashier = cas.id