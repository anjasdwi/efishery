export default ({areas, sizes}) => {
  return {
    Komoditas: {
      type: 'text',
      placeholder: 'Komoditas',
      required: true
    },
    Harga: {
      type: 'currency',
      placeholder: 'Harga',
      required: true
    },
    Ukuran: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Ukuran',
      options: sizes || []
    },
    Area: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Area',
      options: areas || []
    },
    Tanggal: {
      type: 'date',
      placeholder: 'Tanggal',
      format: 'dd MMMM yyyy',
      required: true
    },
    Simpan: {
      type: 'submit'
    }
  }
}
