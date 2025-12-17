import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ms-MY',
  title: 'E-Latihan',
  description: 'Manual Pengguna kakitangan dan Admin untuk Sistem Latihan',
  head: [
    ['link', { rel: 'icon', href: '/elatihan-logo.png' }]
  ],

  themeConfig: {
    logo: '/elatihan-logo.png',

    nav: [
      { text: 'Utama', link: '/' },

      {
        text: 'Kakitangan',
        items: [
          { text: 'Manual Kakitangan (Utama)', link: '/kakitangan/' },
          { text: 'Pengurusan Akaun', link: '/kakitangan/pengurusan-akaun/pendaftaran-pengguna' },
          { text: 'Pengurusan Permohonan', link: '/kakitangan/pengurusan-permohonan/permohonan-latihan-luaran' },
          { text: 'Latihan Luaran / Dalaman', link: '/kakitangan/latihan/daftar-kedatangan' }
        ]
      },

      {
        text: 'Admin',
        items: [
          { text: 'Manual Admin (Utama)', link: '/admin/' },
          { text: 'Laporan Latihan', link: '/admin/laporan-latihan/pengurusan-peserta' },
          { text: 'Pengurusan Permohonan', link: '/admin/pengurusan-permohonan/lihat-senarai' },
          { text: 'Pengurusan Pengguna', link: '/admin/pengurusan-pengguna/tambah-pengguna' },
          { text: 'Pengurusan Emel', link: '/admin/pengurusan-emel/template-emel' }
        ]
      },

      {
        text: 'Dashboard',
        items: [
          { text: 'Pengarah Jabatan', link: '/dashboard/pengarah-jabatan/permohonan-latihan' },
          { text: 'Admin Jabatan', link: '/dashboard/admin-jabatan/anggaran-perbelanjaan' },
          { text: 'KBLK', link: '/dashboard/kblk/ulasan-permohonan-latihan' },
          { text: 'JKP', link: '/dashboard/jkp/sokong-permohonan' },
          { text: 'YDP', link: '/dashboard/ydp/kelulusan-latihan' },
          { text: 'TYDP', link: '/dashboard/tydp/kelulusan-latihan' },
        ]
      }
    ],

    sidebar: {
      '/kakitangan/': [
        {
          text: 'Pengurusan Akaun',
          items: [
            { text: 'Pendaftaran Pengguna', link: '/kakitangan/pengurusan-akaun/pendaftaran-pengguna' },
            { text: 'Log Masuk', link: '/kakitangan/pengurusan-akaun/log-masuk' },
            { text: 'Kemaskini Profil', link: '/kakitangan/pengurusan-akaun/kemaskini-profil' }
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
          text: 'Latihan Luaran / Dalaman',
          items: [
            { text: 'Daftar Kedatangan', link: '/kakitangan/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran', link: '/kakitangan/latihan/daftar-ketidakhadiran' },
            { text: 'Penilaian Latihan', link: '/kakitangan/latihan/penilaian-latihan' },
            { text: 'Cetak Sijil (Latihan Dalaman)', link: '/kakitangan/latihan/cetak-sijil' },
            { text: 'Senarai Latihan Terlibat', link: '/kakitangan/latihan/senarai-latihan' }
          ]
        }
      ],

      '/admin/': [
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/admin/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Latihan Dalaman)', link: '/admin/laporan-latihan/pengurusan-penceramah' },
            { text: 'Pengurusan Penilaian', link: '/admin/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/admin/pengurusan-permohonan/lihat-senarai' },
            { text: 'Tetapan Tempoh Permohonan Latihan Luaran', link: '/admin/pengurusan-permohonan/tempoh-permohonan' }
          ]
        },
        {
          text: 'Pengurusan Pengguna (Admin IT)',
          items: [
            { text: 'Tambah Pengguna (Admin Jabatan Sahaja)', link: '/admin/pengurusan-pengguna/tambah-pengguna' },
            { text: 'Kemaskini Pengguna', link: '/admin/pengurusan-pengguna/kemaskini-pengguna' }
          ]
        },
        {
          text: 'Pengurusan Emel',
          items: [
            { text: 'Menambah Template Emel', link: '/admin/pengurusan-emel/template-emel' },
            { text: 'Blast Emel', link: '/admin/pengurusan-emel/blast-emel' }
          ]
        }
      ],

      '/dashboard/': [
        {
          text: 'Dashboard Pengarah Jabatan',
          items: [
            { text: 'Sokong Permohonan Latihan', link: '/dashboard/pengarah-jabatan/permohonan-latihan' },
            { text: 'Sokong Ketidakhadiran', link: '/dashboard/pengarah-jabatan/ketidakhadiran' }
          ]
        },
        {
          text: 'Dashboard Admin Jabatan',
          items: [
            { text: 'Isi Anggaran Perbelanjaan', link: '/dashboard/admin-jabatan/anggaran-perbelanjaan' },
            { text: 'Daftar Peserta Latihan', link: '/dashboard/admin-jabatan/peserta-latihan' }
          ]
        },
         {
          text: ' Dashboard KBLK',
          items: [
            { text: 'Ulasan Permohonan Latihan', link: '/dashboard/kblk/ulasan-permohonan-latihan' }
          ]
        },
        {
          text: 'Dashboard Pengarah JKP',
          items: [
            { text: 'Sokongan Permohonan Latihan', link: '/dashboard/jkp/sokong-permohonan' }
          ]
        },
        {
          text: 'Dashboard YDP',
          items: [
            { text: 'Kelulusan Latihan', link: '/dashboard/ydp/kelulusan-latihan' }
          ]
        },
        {
          text: 'Dashboard (TYDP)',
          items: [
            { text: 'Kelulusan Latihan', link: '/dashboard/tydp/kelulusan-latihan' },
            { text: 'Pengarah Jabatan', link: '/dashboard/tydp/pengarah-jabatan' }
          ]
        }
      ]
    }
  }
})
