function loadAbsen() {
  const tbody = document.querySelector("#tabel-absen tbody");
  tbody.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("dataAbsen")) || [];

  data.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nim }</td>
      <td>${item.nama}</td>
      <td>${item.tanggal}</td>
      <td>${item.jam }</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="hapusAbsen(${index})">🗑️ Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
