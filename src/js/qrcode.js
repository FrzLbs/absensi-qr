// qrcode.js

function tampilkanKodeQR() {
  const area = document.getElementById('area-cetak-qrcode')
  const ukuran = parseInt(document.getElementById('ukuran-kode').value)
  const perBaris = parseInt(document.getElementById('kode-per-baris').value)

  if (isNaN(ukuran) || isNaN(perBaris)) return alert('Masukkan ukuran dan jumlah per baris yang valid.')

  area.innerHTML = ''
  dataMahasiswa.forEach((mhs, i) => {
    const div = document.createElement('div')
    div.className = 'kartu-qr text-center'
    div.style.width = `${ukuran}px`

    const qr = document.createElement('div')
    new QRCode(qr, {
      text: mhs.nomor.toString(),
      width: ukuran,
      height: ukuran
    })

    const label = document.createElement('div')
    label.className = 'mt-1'
    label.innerText = `${mhs.nomor}\n${mhs.nama}`

    div.appendChild(qr)
    div.appendChild(label)
    area.appendChild(div)

    // Tambahkan line break setelah sejumlah per baris
    if ((i + 1) % perBaris === 0) {
      area.appendChild(document.createElement('br'))
    }
  })
}
