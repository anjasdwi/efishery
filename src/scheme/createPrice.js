export default ({areas, sizes}) => {
  return {
    Komoditas: {
      type: 'text',
      required: true
    },
    Harga: {
      type: 'number',
      required: true
    },
    Ukuran: {
      type: 'select',
      required: true,
      options: sizes || []
    },
    Area: {
      type: 'select',
      required: true,
      options: areas || []
    },
    Tanggal: {
      type: 'date',
      format: 'dd MMMM yyyy',
      required: true
    },
    Simpan: {
      // button submit
      type: 'submit'
    }
  }
}
