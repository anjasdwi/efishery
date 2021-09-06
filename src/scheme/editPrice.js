export default ({areas, sizes}) => {
  return {
    Komoditas: {
      type: 'text',
      placeholder: 'Komoditas',
      required: true,
      defaultValue: 'adas'
    },
    Harga: {
      type: 'currency',
      placeholder: 'Harga',
      required: true,
      defaultValue: '10000'
    },
    Ukuran: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Ukuran',
      options: sizes || [],
      defaultValue: '30'
    },
    Area: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Area',
      options: areas || [],
      defaultValue: 'ACEH KOTA, ACEH'
    },
    Tanggal: {
      type: 'date',
      placeholder: 'Tanggal',
      format: 'dd MMMM yyyy',
      required: true,
      defaultValue: new Date('2020-06-09T15:08:58.122Z')
    },
    Simpan: {
      type: 'submit'
    }
  }
}
