// absen.js
// Cek apakah sudah login
const loginInfo = JSON.parse(localStorage.getItem("mahasiswaLogin"));
if (!loginInfo || !loginInfo.nim) {
  window.location.href = "login.html";
}

const inputAbsen = document.getElementById('input-nomor')
const tabelAbsen = document.getElementById('data-absen')

function tampilkanDataAbsen() {
  tabelAbsen.innerHTML = ''
  dataAbsen.forEach(absen => {
    const mhs = dataMahasiswa.find(m => m.nomor === absen.nomor)
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <th class="text-center">${absen.nim}</th>
      <td>${mhs ? mhs.nama : 'Tidak ditemukan'}</td>
      <td>${absen.tanggal}</td>
      <td>${absen.jam}</td>
    `
    tabelAbsen.appendChild(tr)
  })
}

function tambahDataAbsen(nim) {
  if (isNaN(nim)) return alert('Masukkan nomor yang valid')
  const sudahAbsen = dataAbsen.find(a => a.nim === nim && a.tanggal === hariIni())
  if (sudahAbsen) return alert('Sudah absen hari ini')

  const sekarang = new Date()
  const data = {
    nim,
    tanggal: hariIni(),
    jam: sekarang.toLocaleTimeString()
  }

  dataAbsen.push(data)
  simpanData(keyAbsen, dataAbsen)
  tampilkanDataAbsen()
  inputAbsen.value = ''
}

function hariIni() {
  const d = new Date()
  return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`
}

tampilkanDataAbsen()
