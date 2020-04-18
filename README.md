# ArkademyB16K3
Untuk seleksi bootcamp arkademy

Untuk file javascript 1 - 5, bisa dibuka / dicoba di https://es6console.com maupun di browser console

## Soal No. 1
* Kegunaan JSON pada REST API adalah sebagai format untuk mengirim (sending) dan meminta (requesting) data pada REST API. Selain JSON format data transfer bisa berupa XML (eXtensible Markup Language) dan plain text, tetapi format data JSON lebih populer karena berukuran ringan dan formatnya lebih mudah untuk dibaca dan dimengerti.
## Soal No. 2
* Pada sebuah form, terdapat 2 buah field yaitu: username dan password. Buatlah method/function untuk memvalidasi field-field tersebut
## Soal No. 3
* Buatlah sebuah fungsi untuk membuat Segitiga Sama Kaki.
## Soal No. 4
* Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0(nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil sort akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas. 
## Soal No. 5
* Buatlah sebuah fungsi untuk membuat bilangan matriks dengan ordo yang sudah ditentukan sesuai parameter. Isi bilangan matriks merupakan bilangan acak dari 1-99. Kemudian jumlahkan bilangan tersebut secara diagonal.

## Soal No. 6a
* Buatlah database dengan tabel Product, Category, dan Cashier. Dalam tabel Product terdapat kolom id, name, price,  id_category, dan id_cashier. Di tabel Category hanya terdapat kolom id dan name. Sedangkan di tabel Cashier terdapat kolom id dan name
```
CREATE TABLE Category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(200)
)ENGINE=InnoDB;

CREATE TABLE Cashier(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(200)
)ENGINE=InnoDB;

CREATE TABLE Product(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(200),
    price INT,
    id_category INT,
    FOREIGN KEY (id_category) REFERENCES Category(id),
    id_cashier INT,
    FOREIGN KEY (id_cashier) REFERENCES Cashier(id)
)ENGINE=InnoDB;
```

>SELECT p.id AS pid, p.nama AS pnama, cat.nama AS catnama, cas.nama AS casnama FROM product p INNER JOIN category cat ON p.id_category = cat.id INNER JOIN cashier cas ON p.id_cashier = cas.id

## Soal No. 6B dan 6C
Disini saya menggunakan NodeJS dan express,
untuk konfigurasinya ketikan perintah "npm --save" lalu "npm start" aplikasi akan berjalan pada port 3000

Tampilan HOME
  ![tampilan home](https://github.com/Lukman-Hadi/ArkademyB16K3/blob/master/ss.png)

