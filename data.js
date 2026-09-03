// Ganti nilai pada objek ini ketika data riil tersedia. Struktur tampilan tidak perlu diubah.
window.UMROH_DATA = {
  departures: [
    { id: 1, name: "Umroh Maulid", date: "2026-11-15", price: 32500000, quota: 45, sold: 18, booking: 7, daysLeft: 73, status: "Perlu Didorong", packageStatus: "Aktif", notes: "Program 9 hari", color: "amber" },
    { id: 2, name: "Umroh Akhir Tahun", date: "2026-12-22", price: 34900000, quota: 45, sold: 31, booking: 5, daysLeft: 110, status: "Aman", packageStatus: "Aktif", notes: "Program liburan keluarga", color: "green" },
    { id: 3, name: "Umroh Awal Tahun", date: "2027-01-18", price: 31900000, quota: 45, sold: 9, booking: 4, daysLeft: 137, status: "Kritis", packageStatus: "Draft", notes: "Menunggu finalisasi maskapai", color: "red" }
  ],
  jamaah: [
    { id: 101, name: "Ahmad Fauzi", phone: "0812 3456 7890", nik: "3273••••9012", packageId: 1, status: "Booking", source: "Referral", type: "Grup", group: "Keluarga Ahmad", leader: "Ahmad Fauzi", due: "2026-10-15", passport: "Lengkap", visa: "Proses", pic: "Rahma", followup: "2026-09-06", notes: "Berangkat bersama istri" },
    { id: 102, name: "Siti Maryam", phone: "0813 7788 9900", nik: "3276••••1188", packageId: 2, status: "Follow Up", source: "WhatsApp", type: "Individu", group: "", leader: "", due: "", passport: "Belum Ada", visa: "Belum Proses", pic: "Fikri", followup: "2026-09-04", notes: "Menunggu konfirmasi keluarga" }
  ],
  payments: [
    { id: 9001, jamaahId: 101, date: "2026-09-05", amount: 10000000, method: "Transfer", scope: "Individu", sender: "Ahmad Fauzi", ref: "TRX-0905", admin: "Rahma", notes: "DP" }
  ],
  pipeline: [
    { label: "Lead Masuk", value: 92, color: "#A8B4C8" },
    { label: "Follow Up", value: 64, color: "#6483A9" },
    { label: "Booking", value: 36, color: "#2D6683" },
    { label: "Sudah DP", value: 26, color: "#079781" },
    { label: "Lunas", value: 18, color: "#D5A84B" }
  ],
  sources: [
    { label: "Referral", value: 13, pct: 36, color: "#14345A" },
    { label: "WhatsApp", value: 9, pct: 25, color: "#0B8F7C" },
    { label: "Instagram", value: 7, pct: 19, color: "#D4A846" },
    { label: "Komunitas", value: 4, pct: 11, color: "#6685A4" },
    { label: "Lainnya", value: 3, pct: 9, color: "#D9DFE7" }
  ],
  trend: [4, 6, 5, 9, 8, 12, 14, 18],
  finance: { revenue: 842500000, received: 495000000, receivable: 347500000, progress: 59 },
  alerts: [
    { tone: "red", icon: "!", title: "Pace di bawah target", body: "Umroh 15 Nov masih kurang 9 jamaah dari target minggu ini.", action: "Buka detail" },
    { tone: "amber", icon: "⌁", title: "8 jamaah belum lunas", body: "Jatuh tempo pelunasan dalam 14 hari ke depan.", action: "Lihat tagihan" },
    { tone: "blue", icon: "i", title: "Follow up hari ini", body: "12 prospek panas belum dihubungi lebih dari 2 hari.", action: "Lihat prospek" }
  ]
};
