// pindai.js

let scanner
const kamera = document.getElementById('kamera')
const tombolPindai = document.getElementById('tombol-pindai')

tombolPindai.addEventListener('click', async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Browser tidak mendukung kamera.")
    return
  }

  // Inisialisasi scanner jika belum ada
  if (!scanner) {
    const codeReader = new ZXing.BrowserQRCodeReader()
    scanner = codeReader

    try {
      const videoInputDevices = await ZXing.BrowserQRCodeReader.listVideoInputDevices()
      const selectedDeviceId = videoInputDevices[0]?.deviceId
      if (!selectedDeviceId) throw new Error('Kamera tidak tersedia.')

      await codeReader.decodeFromVideoDevice(selectedDeviceId, kamera, (result, err) => {
        if (result) {
          const nomor = parseInt(result.getText())
          tambahDataAbsen(nomor)
        }
      })
    } catch (error) {
      alert("Gagal mengakses kamera: " + error.message)
    }
  }
})
