//Materi ini ada di pertemuan 10
//Untuk membuat package.json menggunakan printah npm init
//Lalu lakukan npm install untuk melakukan copy folder node_modules
//Setelah itu kita membutuhkan express.js untuk membuat backand
//Untuk melakukan itu kita perlu memberi perintah npm install express
//Maka di package.json bagian dependencies akan bertambah express  

const express = require("express"); //Untuk mengakses node module lalu mengarahkan ke folder express
const app = express(); //Memanggil function yg ada di dalam folder express
const expressLayouts = require("express-ejs-layouts"); //Untuk mengakses node modul express-ejs-layouts 
const path = require('path');

//Menjalankan server
const port = 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
}) 
// Menjalankanya dengan npm run dev
// dev diambil dari file package.json, dan itu telah ditambahkan manual
// Perintahkan Ctrl + C untuk mematikan server

//Konfigurasi static (Fase 2)
app.use(express.static(path.join(__dirname, 'public')));
//__dirname ini artinya dirtur/folder yang aktif, lalu digabungkan dengan folder public karna ada fungsi join()

//Konfigurasi layout (Fase 3)
app.use(expressLayouts); //Menggunakan express-ejs-layouts.
//Untuk mengistal ini kita perlu npm install express-ejs-layouts

//Konfigurasi tamplate (Fase 3) => Web 1.0
//Set up view engine
app.set('view engine', 'ejs');
//Ini merupakan cara kita untuk menggunakan view engine ejs.
//Ketika ingin menggunakan ini jangan lupa perintah npm install ejs. untuk mendapatkan enginenya
app.set('views', path.join(__dirname, 'views'));
//__dirname ini artinya direktorat/folder yang aktif, lalu digabungkan dengan folder views karna ada fungsi join()

//Fase 3 : templating web 1.0
//Digunakan untuk ketika melakukan requess http://localhost:3000/ atau route to root
app.get('/', (req, res) => {
    const headline = {
        title: "Berita Utama Hari Ini",
        summary: "Ringkasan berita utama yang sedang trending.",
        image: "/images/news-banner.jpg" // Pastikan ada gambar di folder public/images
    };

    res.render("index", { title: "Beranda", headline });
}); 
//__dirname ini artinya direktorat/folder yang aktif, lalu digabungkan dengan folder views & file index.ejs karna ada fungsi join()
//Dan akan memberikan respon yang ada di dalam file index.ejs
//Ketika kita memanggil modul .render() itu artinya kita menggunakan view engine

//Fase 2 : static file
//Digunakan untuk ketika melakukan requess http://localhost:3000/static atau route
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'old-index.html'));
}); 
//__dirname ini artinya direktorat/folder yang aktif, lalu digabungkan dengan folder public & file index.html karna ada fungsi join()
//Dan akan memberikan respon yang ada di dalam file index.html
//Dikatakan static file karna kita langsung mengakses satu file.

//Fase 1 : just returning string
//Digunakan untuk ketika melakukan requess http://localhost:3000/hello atau route root
app.get('/hello', (req, res) => {
    res.send('Hello World');
}); //Dan akan memberikan respon Hello World

//Fase 3 : tamplating
app.get('/template', (req, res) => {
    res.render('index', {nama: 'Eko'});
});
//Ketika kita menggunakan perintah render makan kita akan menggunakan engine view ejs, yg sudah kita settup diawal.
//Dikatakan Tamplating karna engine ejs akan melakukan rendering/memproses di belakang dari file yg ada.

