# Dashboard Kuota Umroh — Andira

Dashboard operasional lokal untuk memantau kuota keberangkatan, pace penjualan, pipeline jamaah, sumber jamaah, keuangan, alert, dan tren penjualan.

Menu **Master Paket** memungkinkan admin menambah, mengubah, dan menghapus paket beserta tanggal, harga, kuota, status, dan catatan. Perubahan tersimpan di browser dan langsung masuk ke perhitungan dashboard.

## Menjalankan aplikasi

Cara paling mudah: buka `index.html` langsung di Chrome atau Edge.

Alternatif dengan server lokal (disarankan):

```powershell
cd dashboard-umroh
python -m http.server 4173
```

Lalu buka `http://localhost:4173`.

## Mengganti data

Semua data contoh berada di `data.js`. Ubah nilai pada `departures`, `pipeline`, `sources`, `trend`, `finance`, dan `alerts`. Tampilan dan perhitungan dashboard akan mengikuti data tersebut secara otomatis.

## Struktur file

- `index.html` — struktur dashboard
- `styles.css` — warna, layout, dan tampilan responsif
- `data.js` — sumber data contoh
- `app.js` — kalkulasi, filter, grafik, dan interaksi

Tidak ada proses instalasi atau dependensi yang diperlukan.

## GitHub & Vercel

Proyek ini memakai pola yang sederhana seperti aplikasi TaQur: file web statis disimpan di GitHub, lalu setiap perubahan pada branch `main` otomatis dipublikasikan oleh Vercel.

1. Buat repository GitHub baru, misalnya `andira-dashboard-umroh`.
2. Upload seluruh isi folder ini ke repository tersebut.
3. Di Vercel, pilih **Add New → Project**, lalu impor repository GitHub tadi.
4. Framework Preset pilih **Other** dan biarkan pengaturan build kosong.
5. Klik **Deploy**.

Setelah GitHub terhubung, setiap update yang masuk ke branch `main` akan otomatis membuat deployment baru di Vercel.
