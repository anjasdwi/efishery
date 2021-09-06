export default ({areas, sizes, values}) => {
  const {
    komoditas = '',
    price = 0,
    size = 0,
    area_kota = '',
    area_provinsi = '',
    tgl_parsed = ''
  } = values || {}
  const area = `${area_kota}, ${area_provinsi}`

  return {
    Komoditas: {
      type: 'text',
      placeholder: 'Komoditas',
      required: true,
      defaultValue: komoditas
    },
    Harga: {
      type: 'currency',
      placeholder: 'Harga',
      required: true,
      defaultValue: price
    },
    Ukuran: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Ukuran',
      options: sizes || [],
      defaultValue: size
    },
    Area: {
      type: 'select',
      required: true,
      placeholder: 'Cari & Pilih Area',
      options: areas || [],
      defaultValue: area
    },
    Tanggal: {
      type: 'date',
      placeholder: 'Tanggal',
      format: 'dd MMMM yyyy',
      required: true,
      defaultValue: tgl_parsed ? new Date(tgl_parsed) : ''
    },
    Ubah: {
      type: 'submit'
    }
  }
}
