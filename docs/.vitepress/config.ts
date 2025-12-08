import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ms-MY',
  title: 'E-Latihan',
  description: 'Manual Pengguna Staff dan Admin untuk Sistem Latihan',
  // head: [
  //   ['link', { rel: 'icon', href: '/ww.png' }]
  // ],

  themeConfig: {
    logo: '/elatihan-logo.png',

    nav: [
      { text: 'Utama', link: '/' },

      {
        text: 'Staff',
        items: [
          { text: 'Manual Staff (Utama)', link: '/staff/' },
          { text: 'Pengurusan Akaun', link: '/staff/pengurusan-akaun/pendaftaran-pengguna' },
          { text: 'Pengurusan Permohonan', link: '/staff/pengurusan-permohonan/permohonan-latihan-luaran' },
          { text: 'Latihan Luaran / Dalaman', link: '/staff/latihan/daftar-kedatangan' }
        ]
      },

      {
        text: 'Admin',
        items: [
          { text: 'Manual Admin (Utama)', link: '/admin/' },
          { text: 'Laporan Latihan', link: '/admin/laporan-latihan/pengurusan-peserta' },
          { text: 'Pengurusan Permohonan', link: '/admin/pengurusan-permohonan/lihat-senarai-permohonan' },
          { text: 'Pengurusan Pengguna', link: '/admin/pengurusan-pengguna/tambah-pengguna-admin-jabatan' },
          { text: 'Pengurusan Emel', link: '/admin/pengurusan-emel/tambah-template-emel' }
        ]
      }
    ],

    sidebar: {
      '/staff/': [
        {
          text: 'Pengurusan Akaun',
          items: [
            { text: 'Pendaftaran Pengguna', link: '/staff/pengurusan-akaun/pendaftaran-pengguna' },
            { text: 'Log Masuk', link: '/staff/pengurusan-akaun/log-masuk' },
            { text: 'Kemaskini Profil', link: '/staff/pengurusan-akaun/kemaskini-profil' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/staff/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/staff/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Latihan Luaran / Dalaman',
          items: [
            { text: 'Daftar Kedatangan', link: '/staff/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran', link: '/staff/latihan/daftar-ketidakhadiran' },
            { text: 'Penilaian Latihan', link: '/staff/latihan/penilaian-latihan' },
            { text: 'Cetak Sijil (Latihan Dalaman)', link: '/staff/latihan/cetak-sijil'},
            { text: 'Senarai Latihan Terlibat', link: '/staff/latihan/senarai-latihan' }
          ]
        }
      ],
      '/admin/': [
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/admin/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Latihan Dalaman)', link: '/admin/laporan-latihan/pengurusan-penceramah-dalaman' },
            { text: 'Pengurusan Penilaian', link: '/admin/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/admin/pengurusan-permohonan/lihat-senarai-permohonan' },
            { text: 'Tetapan Tempoh Permohonan Latihan Luaran', link: '/admin/pengurusan-permohonan/tetapan-tempoh-permohonan-luaran' }
          ]
        },
        {
          text: 'Pengurusan Pengguna (Admin IT)',
          items: [
            { text: 'Tambah Pengguna (Admin Jabatan Sahaja)', link: '/admin/pengurusan-pengguna/tambah-pengguna-admin-jabatan' },
            { text: 'Kemaskini Pengguna', link: '/admin/pengurusan-pengguna/kemaskini-pengguna' }
          ]
        },
        {
          text: 'Pengurusan Emel',
          items: [
            { text: 'Menambah Template Emel', link: '/admin/pengurusan-emel/tambah-template-emel' },
            { text: 'Blast Emel', link: '/admin/pengurusan-emel/blast-emel' }
          ]
        }
      ]
    }
  }
})
