// halaman.js

const tombolNavigasi = document.querySelectorAll('nav button')
const semuaHalaman = document.querySelectorAll('.halaman')

// Fungsi untuk menampilkan halaman berdasarkan tombol yang ditekan
tombolNavigasi.forEach(tombol => {
  tombol.addEventListener('click', () => {
    const idTujuan = tombol.getAttribute('halaman')

    semuaHalaman.forEach(hal => hal.classList.add('halaman')) // sembunyikan semua
    document.getElementById(idTujuan).classList.remove('halaman') // tampilkan yang dipilih
  })
})
