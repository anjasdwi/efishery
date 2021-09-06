# Penjelasan UI/UX

## Halaman Utama

![Home](/public/assets/home.png)

Dihalaman utama ini kita dihadapkan dengan list atau daftar harga perikanan di Indonesia. Disini ada beberapa komponen UI yang saya buat untuk menampilkan data, mengurutkan, menambahkan serta memfilter data.

### Header
Disini saya buat header sesuai dengan color pallete yg ada di eFishery.
### Card

Alih-alih saya menggunakan Table untuk menampilkan daftar harga, saya lebih menyukai Card seperti diatas, karena menurut saya Card component lebih nyaman di lihat, lebih simple, elegan dan dari sisi development lebih mudah dibanding menggunakan Table. 
Dari segi responsive layout juga lebih mudah untuk di atur sedemikan rupa agar terlihat lebih rapi dan nyaman dilihat.

### Kolom Pencarian
Terdapat kolom pencarian untuk memudahkan user mencari komoditas yang diinginkan.

![Home](/public/assets/home-search.png)
### Tombol Filter
User bisa memfilter data harga ikan di indonesia dengan mengklik tombol Filter, sehingga akan muncul tampilan seperti gambar dibawah ini:


![Home](/public/assets/home-filter.png)

Ada 2 kolom yang disediakan, yaitu area dan Ukuran, user bisa memilih area dan ukuran yang diinginkan.

### Tombol Urutkan
User bisa mengurutkan data harga ikan di indonesia dengan mengklik tombol Urutkan, sehingga akan muncul tampilan seperti gambar dibawah ini:


![Home](/public/assets/home-sorter.png)

Ada 4 radio button yang disediakan, sehingga user bisa mengurutkan data berdasarkan kolom yang dinginkan.

### Tombol Muat Lebih banyak & Tombol Scroll Top

![Home](/public/assets/home-scroll.png))

Disini saya menggunakan pagination scroll untuk memudahkan user scrolling daftar harga ikan dan juga untuk menghemat request data ke api.
Disediakan juga tombol Scroll top, yang apabila diklik akan secara otomotis scrolling kembali ke atas halaman. Tombol ini hanya muncul ketika user scrolling ke bawah