export interface ArticleData {
  id: string
  title: string
  category: string
  imageUrl: string
  slug: string
  detail: string // Deskripsi singkat (Summary)
  content?: string // Isi lengkap artikel (HTML)
  date?: string
  readTime?: string
}

export const articles: ArticleData[] = [
  {
    id: '1',
    category: 'Tips Hemat',
    title: '5 Trik Makan Enak Akhir Bulan Anak Kos (Budget < 15rb)',
    imageUrl: '/static/images/article/hemat_makan.png',
    slug: '/article/trik-makan-hemat-anak-kos',
    date: '28 Nov 2025',
    readTime: '5 min read',
    detail:
      'Siapa bilang tanggal tua harus makan mie instan terus? Simak strategi berburu diskon makanan hotel dan resto di Meal Up agar tetap bergizi meski dompet menipis.',
    content: `
      <p>Siapa bilang tanggal tua harus makan mie instan terus? Simak strategi berburu diskon makanan hotel dan resto di <strong>Meal Up</strong> agar tetap bergizi meski dompet menipis. Berikut adalah rahasianya:</p>
      
      <h2>1. Pantau Flash Sale Meal Up</h2>
      <p>Banyak restoran hotel bintang 4 yang menjual sisa buffet sarapan mereka dengan harga miring di atas jam 10 pagi. Biasanya diskon bisa mencapai <strong>70%</strong>.</p>
      <ul>
        <li>Cek aplikasi secara berkala pada pukul 09.30 dan 13.30.</li>
        <li>Gunakan fitur "Filter Terdekat" untuk menghemat ongkir.</li>
      </ul>

      <h2>2. "Surprise Bag" Adalah Kunci</h2>
      <p>Jangan takut mencoba fitur <em>Surprise Bag</em>. Isinya seringkali melebihi nilai uang yang Anda keluarkan, mulai dari pastry premium hingga nasi box lengkap.</p>
      
      <blockquote>"Hemat pangkal kaya, tapi makan enak adalah hak segala bangsa (termasuk anak kos)."</blockquote>
      
      <h2>3. Ajak Teman Patungan</h2>
      <p>Beberapa merchant memberikan promo "Buy 1 Get 1" untuk makanan yang mendekati jam tutup toko. Ajak teman sekamar untuk berbagi biaya.</p>

      <p>Dengan strategi yang tepat, uang 15 ribu rupiah bisa menyulap makan siangmu setara menu kafe.</p>
    `
  },
  {
    id: '2',
    category: 'Edukasi Lingkungan',
    title: 'Kenapa Makanan Sisa Lebih Berbahaya dari Sampah Plastik?',
    imageUrl: '/static/images/article/makanan-berbahaya.jpg',
    slug: '/article/bahaya-makanan-sisa-metana',
    date: '25 Nov 2025',
    readTime: '7 min read',
    detail:
      'Mengenal Gas Metana, musuh tersembunyi di balik tumpukan sampah organik kita yang ternyata 21x lebih berbahaya bagi lapisan ozon dibandingkan CO2.',
    content: `
      <p>Kita seringkali merasa bersalah saat membuang botol plastik, tapi merasa biasa saja saat membuang sisa nasi. Padahal, <strong>makanan sisa adalah bom waktu bagi iklim kita.</strong></p>
      
      <h2>Efek Rumah Kaca yang Terlupakan</h2>
      <p>Saat sisa makanan membusuk di TPA tanpa oksigen (anaerob), proses ini menghasilkan gas <strong>Metana (CH4)</strong>. Gas ini memiliki kemampuan memerangkap panas jauh lebih kuat daripada karbon dioksida dari asap kendaraan.</p>
      
      <h3>Fakta Mengejutkan:</h3>
      <ul>
        <li>Sampah makanan menyumbang 8-10% emisi gas rumah kaca global.</li>
        <li>Metana 21x lebih berbahaya bagi lapisan ozon dibandingkan CO2.</li>
      </ul>

      <h2>Apa yang Bisa Kita Lakukan?</h2>
      <p>Mulailah dengan menghabiskan apa yang ada di piringmu. Langkah kecil seperti "makan tanpa sisa" memiliki dampak besar jika dilakukan oleh jutaan orang. Selain itu, mengompos sisa makanan di rumah juga bisa menjadi solusi jitu.</p>
    `
  },
  {
    id: '3',
    category: 'Food Hack',
    title: 'Jangan Dibuang! Cara Simpan Sayur Agar Awet Seminggu',
    imageUrl: '/static/images/article/vegetable_storage.png',
    slug: '/article/cara-simpan-sayur-awet',
    date: '20 Nov 2025',
    readTime: '4 min read',
    detail:
      'Sering membuang sayur karena cepat layu di kulkas? Pelajari teknik "blanching" dan cara membungkus yang benar agar stok makananmu tahan lama.',
    content: `
      <p>Sering membuang sayur karena cepat layu di kulkas? Ternyata cara menyimpan kita selama ini salah. Yuk pelajari teknik <em>food prep</em> yang benar.</p>
      
      <h2>Teknik Blanching (Rebus Sebentar)</h2>
      <p>Teknik ini sangat ampuh untuk sayuran seperti brokoli, wortel, dan buncis. Caranya:</p>
      <ol>
        <li>Didihkan air, masukkan sayuran selama <strong>1-2 menit</strong> saja.</li>
        <li>Angkat dan langsung masukkan ke dalam air es (ini namanya <em>shock thermal</em>).</li>
        <li>Tiriskan hingga kering, lalu simpan di wadah kedap udara.</li>
      </ol>
      <p>Teknik ini menghentikan aktivitas enzim yang menyebabkan pembusukan, sehingga sayur tetap renyah.</p>

      <h2>Kertas Koran vs Tisu Dapur</h2>
      <p>Membungkus sayuran hijau (seperti bayam atau kangkung) dengan tisu dapur dapat menyerap kelembapan berlebih yang menjadi penyebab utama sayur menjadi "lender" dan busuk.</p>
    `
  },
  {
    id: '4',
    category: 'Kisah Mitra',
    title: 'Kisah Warung Bu Siti: Dari Buang 5kg Nasi, Kini Ludes Tiap Hari',
    imageUrl: '/static/images/article/nasi.jpg',
    slug: '/article/kisah-sukses-warung-bu-siti',
    date: '15 Nov 2025',
    readTime: '6 min read',
    detail:
      'Inspirasi dari satu warung kecil di Kuningan yang berhasil mengubah kerugian harian menjadi keuntungan tambahan lewat teknologi Meal Up.',
    content: `
      <p>Di sudut ramainya daerah Kuningan, Jakarta Selatan, Warung Tegal "Berkah" milik Bu Siti kini selalu ramai antrian ojek online saat jam 8 malam. Padahal, tiga bulan lalu kondisinya berbeda.</p>
      
      <h2>Masalah Klasik Warteg</h2>
      <p>Bu Siti dulu sering menangis saat harus membuang nasi dan lauk sisa di malam hari. <em>"Sayang mas, beras mahal. Kalau dikasih orang kadang basi di jalan, kalau disimpan besok rasanya beda,"</em> ujarnya mengenang masa sulit.</p>
      
      <h2>Solusi Digital</h2>
      <p>Sejak bergabung sebagai mitra, Bu Siti menjual paket <strong>"Makan Malam Hemat"</strong> di jam 8 malam lewat aplikasi. Dampaknya luar biasa:</p>
      <ul>
        <li><strong>Zero Waste:</strong> Tidak ada lagi nasi 5kg yang terbuang percuma.</li>
        <li><strong>Profit Tambahan:</strong> Omzet harian naik 20% dari penjualan makanan sisa layak makan.</li>
        <li><strong>Pelanggan Baru:</strong> Banyak mahasiswa yang kini jadi langganan tetap.</li>
      </ul>
      <p>Kini, Bu Siti bisa tersenyum lega. Usahanya tidak hanya menguntungkan keluarga, tapi juga menyelamatkan lingkungan.</p>
    `
  },
  {
    id: '5',
    category: 'Resep Zero Waste',
    title: 'Sulap Roti Tawar Sisa Menjadi Puding Mewah',
    imageUrl: '/static/images/article/roti-to-puding.jpg',
    slug: '/article/resep-puding-roti-sisa',
    date: '10 Nov 2025',
    readTime: '15 min (Cooking)',
    detail:
      'Punya roti yang hampir kadaluwarsa dan pinggirannya keras? Jangan dibuang. Cukup 15 menit untuk mengubahnya menjadi dessert kelas kafe.',
    content: `
      <p>Punya roti yang hampir kadaluwarsa dan pinggirannya keras? Jangan dibuang! Mari kita ubah sampah makanan potensial ini menjadi hidangan penutup bintang lima.</p>
      
      <h2>Bahan-bahan yang Dibutuhkan:</h2>
      <ul>
        <li><strong>5 lembar</strong> roti tawar sisa (potong dadu kecil)</li>
        <li><strong>2 butir</strong> telur ayam</li>
        <li><strong>200ml</strong> susu cair (bisa UHT atau susu sisa)</li>
        <li>3 sdm Gula pasir</li>
        <li>Bubuk kayu manis secukupnya (opsional)</li>
        <li>Kismis atau chocochips untuk topping</li>
      </ul>
      
      <h2>Cara Membuat (Langkah demi Langkah):</h2>
      <ol>
        <li>Kocok telur dan gula hingga larut dalam mangkuk besar.</li>
        <li>Masukkan susu cair dan bubuk kayu manis, aduk rata.</li>
        <li>Tata potongan roti tawar di wadah tahan panas (aluminium foil atau pyrex).</li>
        <li>Siramkan campuran susu ke atas roti, biarkan meresap selama 5 menit.</li>
        <li>Taburkan topping, lalu kukus selama <strong>15-20 menit</strong>.</li>
      </ol>
      <p>Sajikan hangat atau dingin. Puding ini membuktikan bahwa bahan sisa bisa jadi istimewa!</p>
    `
  },
  {
    id: '6',
    category: 'Opini',
    title: 'Ironi Negeri Lumbung Padi: Kenyang di Data, Lapar di Nyata',
    imageUrl: '/static/images/article/food-insecurity.jpg',
    slug: '/article/ironi-pangan-indonesia',
    date: '01 Nov 2025',
    readTime: '8 min read',
    detail:
      'Menilik data Bappenas tentang paradoks Indonesia sebagai pembuang makanan terbesar kedua, sementara angka stunting dan kelaparan masih tinggi.',
    content: `
      <p>Indonesia sering disebut sebagai negeri <em>gemah ripah loh jinawi</em>. Namun, ada ironi besar yang tersaji di meja makan kita setiap hari.</p>
      
      <h2>Paradoks yang Menyedihkan</h2>
      <p>Data Bappenas menunjukkan Indonesia membuang <strong>23-48 juta ton</strong> makanan setiap tahunnya. Jumlah ini cukup untuk memberi makan 28 juta orang miskin di Indonesia.</p>
      
      <blockquote>"Makanan yang kita buang hari ini, adalah doa dari mereka yang kelaparan."</blockquote>
      
      <h2>Kenyang di Data, Lapar di Nyata</h2>
      <p>Di satu sisi, restoran membuang berton-ton makanan sisa buffet. Di sisi lain, angka <em>stunting</em> (gizi buruk) pada balita di Indonesia masih menjadi PR besar pemerintah. Kesenjangan distribusi ini bukan hanya masalah logistik, tapi masalah empati.</p>
      
      <p>Artikel ini mengajak kita untuk merenung dan bertindak lebih bijak dalam mengelola konsumsi harian kita. Jangan ambil lebih dari yang bisa kamu habiskan.</p>
    `
  }
]
