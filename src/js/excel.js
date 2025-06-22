// excel.js

function pencadanganData() {
  const data = [
    ['Nomor', 'Nama', 'Tanggal', 'Jam'],
    ...dataAbsen.map(a => [a.nomor, a.nama, a.tanggal, a.jam])
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Absen');
  XLSX.writeFile(workbook, 'data_absen.xlsx');
}

function pemulihanData() {
  const file = document.getElementById('upload').files[0];
  if (!file) return alert("Pilih file terlebih dahulu!");

  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    dataAbsen = [];
    for (let i = 1; i < rows.length; i++) {
      const [nomor, nama, tanggal, jam] = rows[i];
      dataAbsen.push({ nomor, nama, tanggal, jam });
    }
    simpanData(keyAbsen, dataAbsen);
    tampilkanDataAbsen();
  };
  reader.readAsArrayBuffer(file);
}
