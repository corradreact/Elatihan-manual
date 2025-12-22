import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ms-MY',
  title: 'E-Latihan',
  description: 'Manual Pengguna Kakitangan dan Admin untuk Sistem Latihan',

  head: [
    ['link', { rel: 'icon', href: '/elatihan-logo.png' }]
  ],

  themeConfig: {
    logo: '/elatihan-logo.png',

    // nav sengaja kosong – entry guna index.md
    // nav: [],

    sidebar: {

      /* =======================
         KAKITANGAN
         ======================= */
      '/kakitangan/': [
        {
          text: 'Dashboard (Latihan Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/kakitangan/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/kakitangan/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/kakitangan/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/kakitangan/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/kakitangan/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/kakitangan/latihan/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan (Dalaman)', link: '/kakitangan/latihan/cetak-sijil' }
          ]
        }
      ],

      /* =======================
         ADMIN IT
         ======================= */
      '/adminIT/': [
        {
          text: 'Pengurusan Pengguna',
          items: [
            { text: 'Tambah Pengguna', link: '/adminIT/pengurusan-pengguna/tambah-pengguna' },
            { text: 'Kemaskini Pengguna', link: '/adminIT/pengurusan-pengguna/kemaskini-pengguna' }
          ]
        },
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/adminIT/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Dalaman)', link: '/adminIT/laporan-latihan/pengurusan-penceramah' },
            { text: 'Pengurusan Penilaian', link: '/adminIT/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/adminIT/pengurusan-permohonan/senarai-permohonan' }
          ]
        }
      ],

      /* =======================
         ADMIN JABATAN
         ======================= */
      '/adminjab/': [
        {
          text: 'Dashboard Admin',
          items: [
            { text: 'Isi Anggaran Perbelanjaan', link: '/adminjab/tugasan/anggaran-perbelanjaan' },
            { text: 'Daftar Peserta Latihan', link: '/adminjab/tugasan/peserta-latihan' }
          ]
        },
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/adminjab/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Dalaman)', link: '/adminjab/laporan-latihan/pengurusan-penceramah' },
            { text: 'Pengurusan Penilaian', link: '/adminjab/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/adminjab/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Tetapan & Pengurusan Emel',
          items: [
            { text: 'Urus Tempoh Permohonan', link: '/adminjab/pengurusan-emel/tempoh-permohonan' },
            { text: 'Urus Template Emel', link: '/adminjab/pengurusan-emel/template-emel' },
            { text: 'Blast Emel Jemputan', link: '/adminjab/pengurusan-emel/blast-emel' }
          ]
        }
      ],

      /* =======================
         PENGARAH JABATAN (PJ)
         ======================= */
      '/pj/': [
        {
          text: 'Dashboard Tugasan',
          items: [
            { text: 'Sokong Permohonan Latihan Luaran', link: '/pj/tugasan/permohonan-latihan' },
            { text: 'Sokong Ketidakhadiran', link: '/pj/tugasan/ketidakhadiran' }
          ]
        },
        {
          text: 'Latihan Saya (Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/pj/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/pj/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/pj/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/pj/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/pj/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/pj/penilaian/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan', link: '/pj/penilaian/cetak-sijil' }
          ]
        }
      ]
    }
  }
})
