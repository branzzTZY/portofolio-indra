export type ProjectCategory =
  | 'Semua'
  | 'Instalasi Penerangan'
  | 'Pengukuran & Panel'
  | 'Gambar Teknik';

export interface PracticalProject {
  id: string;
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'Semua'>;
  semester: string;
  standard: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  specs: {
    label: string;
    value: string;
  }[];
  tools: string[];
  safetyChecks: string[];
}

export interface CompetencyItem {
  index: string;
  title: string;
  subject: string;
  description: string;
  standards: string;
}

export interface AcademicMilestone {
  period: string;
  title: string;
  institution: string;
  detail: string;
}

export const STUDENT_PROFILE = {
  fullName: 'Moch. Dw. Rizkyi Indra Maulana',
  shortBrand: 'Moch. Dw. Rizkyi I. M.',
  classRoom: 'X TITL 2',
  majorShort: 'Teknik Instalasi Tenaga Listrik',
  majorField: 'Ketenagalistrikan (Listrik)',
  school: 'SMKN 1 Sidayu',
  location: 'Sidayu, Kab. Gresik, Jawa Timur',
  academicYear: '2026 / 2027',
  portraitUrl: '/src/assets/images/student_portrait_sidayu_1794896793443.jpg',
  portraitAlt:
    'Foto resmi Moch. Dw. Rizkyi Indra Maulana, siswa Kelas X TITL 2 SMKN 1 Sidayu mengenakan seragam praktik bengkel listrik sambil memegang multimeter digital',
  email: 'rizkyi.maulana.titl2@smkn1sidayu.sch.id',
  consultationHours: 'Senin – Jumat · 07.00 – 15.00 WIB',
  quote:
    'Ketelitian membaca diagram pengawatan dan kedisiplinan terhadap prosedur K3LH adalah fondasi utama setiap teknisi instalasi tenaga listrik.',
};

export const HERO_METRICS = [
  {
    label: 'Kelas & Rombel',
    value: 'X TITL 2',
    subtext: 'Tingkat Dasar Kejuruan',
  },
  {
    label: 'Program Keahlian',
    value: 'Instalasi Listrik',
    subtext: 'Teknik Ketenagalistrikan',
  },
  {
    label: 'Satuan Pendidikan',
    value: 'SMKN 1 Sidayu',
    subtext: 'Kabupaten Gresik',
  },
  {
    label: 'Acuan Praktikum',
    value: 'PUIL 2011 & K3LH',
    subtext: 'Keselamatan Instalasi',
  },
];

export const PROFILE_DETAILS = [
  { label: 'Nama Lengkap', value: 'Moch. Dw. Rizkyi Indra Maulana' },
  { label: 'Kelas / Rombongan Belajar', value: 'X TITL 2' },
  { label: 'Kompetensi Keahlian', value: 'Teknik Instalasi Tenaga Listrik (TITL)' },
  { label: 'Bidang Keahlian', value: 'Teknologi dan Rekayasa · Ketenagalistrikan' },
  { label: 'Sekolah', value: 'SMK Negeri 1 Sidayu, Gresik' },
  { label: 'Tahun Pelajaran', value: '2026 / 2027' },
];

export const WORKSHOP_TOOLS = [
  {
    name: 'Multimeter Digital & Analog',
    functionDesc: 'Pengukuran tegangan AC/DC, resistansi isolasi dasar, serta uji kontinuitas penghantar.',
  },
  {
    name: 'Tang Ampere (Clamp Meter)',
    functionDesc: 'Pengukuran arus beban pada penghantar fasa tanpa memutus sambungan rangkaian.',
  },
  {
    name: 'Tang Pengupas & Crimping Tool',
    functionDesc: 'Terminasi kabel NYA/NYM serta pemasangan skun kabel standar panel listrik.',
  },
  {
    name: 'Alat Pelindung Diri (APD) Bengkel',
    functionDesc: 'Sepatu safety sol karet isolasi, sarung tangan teknisi, dan kacamata pelindung kerja.',
  },
  {
    name: 'Peralatan Bending Pipa PVC',
    functionDesc: 'Pembentukan jalur pipa pelindung kabel (conduit) 20 mm sesuai tata letak bangunan.',
  },
  {
    name: 'Perangkat Gambar Teknik Listrik',
    functionDesc: 'Penyusunan diagram garis tunggal (single-line) dan pengawatan dengan simbol IEC 60617.',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    index: '01.',
    title: 'Keselamatan & Kesehatan Kerja (K3LH)',
    subject: 'Dasar Ketenagalistrikan',
    description:
      'Penerapan prosedur Lockout/Tagout dasar, penggunaan APD lengkap bengkel listrik, identifikasi bahaya kejut listrik, serta ketertiban area kerja.',
    standards: 'PUIL 2011 · K3 Bengkel',
  },
  {
    index: '02.',
    title: 'Gambar Teknik Listrik Standar IEC',
    subject: 'Gambar Teknik Listrik',
    description:
      'Membaca dan menggambar diagram garis tunggal (single-line), diagram pengawatan (wiring), serta interpretasi simbol sakelar, MCB, dan titik lampu.',
    standards: 'IEC 60617 · Proyeksi Ortogonal',
  },
  {
    index: '03.',
    title: 'Pengukuran Besaran Listrik',
    subject: 'Alat Ukur & Pengukuran',
    description:
      'Pengoperasian multimeter dan tang ampere secara presisi untuk mengukur tegangan 220V AC, arus beban, tahanan resistor, dan kontinuitas kabel.',
    standards: 'Multimeter · Clamp Meter',
  },
  {
    index: '04.',
    title: 'Pekerjaan Dasar Elektromekanik',
    subject: 'Elektromekanik Dasar',
    description:
      'Teknik penyambungan kabel ekor babi (pigtail), sambungan puntir (Western Union), pencabangan T-doos, serta pemasangan pipa conduit PVC.',
    standards: 'NYA 1.5–2.5 mm² · Conduit 20 mm',
  },
  {
    index: '05.',
    title: 'Instalasi Penerangan 1 Fasa Dasar',
    subject: 'Instalasi Penerangan',
    description:
      'Perakitan papan praktik instalasi rumah tinggal meliputi sakelar tunggal, sakelar seri, sakelar tukar (hotel), serta stop kontak berarde.',
    standards: '220V / 50Hz · Kode Warna PUIL',
  },
  {
    index: '06.',
    title: 'Dasar Elektronika & Rangkaian Kontrol',
    subject: 'Dasar Listrik & Elektronika',
    description:
      'Analisis rangkaian seri, paralel, dan campuran berdasarkan Hukum Ohm dan Kirchhoff, serta pengenalan komponen proteksi MCB dan ELCB.',
    standards: 'Hukum Ohm · Proteksi Arus Lebih',
  },
];

export const PRACTICAL_PROJECTS: PracticalProject[] = [
  {
    id: 'papan-instalasi-1-fasa',
    code: 'PRK-01',
    title: 'Perakitan Papan Instalasi Penerangan 1 Fasa & Stop Kontak',
    category: 'Instalasi Penerangan',
    semester: 'Semester 1 · 2026',
    standard: '220V AC · PUIL 2011',
    featured: true,
    summary:
      'Instalasi papan latih penerangan domestik menggunakan pipa conduit PVC 20 mm, box MCB grup ganda, sakelar seri, sakelar tukar, dan 3 titik beban lampu.',
    description:
      'Praktikum inti Kelas X TITL 2 dalam merangkai instalasi penerangan satu fasa di atas papan kerja bengkel. Pekerjaan mencakup penarikan kabel NYA berstandar kode warna (cokelat/merah untuk fasa, biru untuk netral, kuning-hijau untuk pembumian), penyambungan rapi di dalam kotak sambung (T-doos) tanpa isolasi terbuka, serta pengujian polaritas sebelum penyalaan sumber 220V.',
    image: '/src/assets/images/project_lighting_board_1794896777133.jpg',
    imageAlt:
      'Papan praktikum instalasi penerangan 1 fasa dengan box MCB, pipa conduit PVC, kotak sambung, sakelar, dan tiga titik lampu menyala',
    specs: [
      { label: 'Tegangan Kerja', value: '220 V / 50 Hz (1 Fasa)' },
      { label: 'Proteksi Grup', value: 'MCB 6A (Lampu) & 10A (Stop Kontak)' },
      { label: 'Penghantar', value: 'NYA 1.5 mm² & 2.5 mm²' },
      { label: 'Pelindung Jalur', value: 'Pipa Conduit PVC 20 mm' },
    ],
    tools: [
      'Obeng isolasi (+) dan (-)',
      'Tang kombinasi & tang pengupas kabel',
      'Tespen & multimeter digital',
      'Waterpass untuk kelurusan pipa conduit',
    ],
    safetyChecks: [
      'Verifikasi seluruh sambungan di dalam T-doos tertutup isolator konektor.',
      'Pengujian tahanan/kontinuitas antar jalur fasa dan netral sebelum MCB diaktifkan.',
      'Penempatan kabel pembumian (PE) terhubung langsung pada terminal arde stop kontak.',
    ],
  },
  {
    id: 'pengawatan-panel-mcb',
    code: 'PRK-02',
    title: 'Penataan Pengawatan Box Panel Distribusi & Terminal Blok',
    category: 'Pengukuran & Panel',
    semester: 'Semester 1 · 2026',
    standard: 'DIN Rail · Cable Duct',
    summary:
      'Latihan kerapian wiring panel distribusi menggunakan rel DIN, MCB pembagi, terminal blok bernomor, serta routing kabel di dalam cable duct.',
    description:
      'Proyek pelatihan kedisiplinan pengawatan panel industri dasar. Fokus utama terletak pada manajemen kabel di dalam slotted cable duct, pemasangan ferrule penanda nomor kabel (wire marker), pengencangan torsi sekrup terminal blok, serta pemisahan jalur fasa, netral, dan grounding sesuai standar kerapian bengkel teknik listrik.',
    image: '/src/assets/images/project_panel_wiring_1794896777835.jpg',
    imageAlt:
      'Interior box panel distribusi listrik dengan MCB pada rel DIN, terminal blok berlabel, dan susunan kabel rapi di dalam duct',
    specs: [
      { label: 'Sistem Rel', value: 'DIN Rail 35 mm Standar' },
      { label: 'Terminasi', value: 'Terminal Blok + Wire Ferrule' },
      { label: 'Manajemen Kabel', value: 'Slotted PVC Cable Duct' },
      { label: 'Identifikasi', value: 'Label Fasa L1/N/PE Bernomor' },
    ],
    tools: [
      'Tang crimping ferrule kabel',
      'Obeng presisi berisolasi 1000V',
      'Wire stripper otomatis',
      'Multimeter uji kontinuitas',
    ],
    safetyChecks: [
      'Tidak ada serabut tembaga terbuka keluar dari selongsong ferrule terminal.',
      'Uji tarik mekanis ringan pada setiap terminasi baut MCB dan busbar.',
      'Penutupan penutup duct dan pemasangan label peringatan tegangan panel.',
    ],
  },
  {
    id: 'pengukuran-besaran-listrik',
    code: 'PRK-03',
    title: 'Kalibrasi & Pengukuran Tegangan, Arus, dan Kontinuitas Rangkaian',
    category: 'Pengukuran & Panel',
    semester: 'Semester 1 · 2026',
    standard: 'SOP Pengukuran Dasar',
    summary:
      'Pengujian parameter kelistrikan pada modul terminal test menggunakan multimeter digital dan tang ampere dengan pencatatan tabel akurasi.',
    description:
      'Praktikum laboratorium pengukuran listrik guna melatih ketepatan pemilihan batas ukur (range selector), pembacaan nilai tegangan AC/DC, pengukuran arus beban AC dengan tang ampere tanpa memutus sirkuit, serta pendeteksian hubung singkat (short circuit) atau kabel putus menggunakan fitur continuity buzzer.',
    image: '/src/assets/images/project_multimeter_measurement_1794896777706.jpg',
    imageAlt:
      'Multimeter digital dan tang ampere mengukur tegangan serta arus pada papan uji terminal blok di meja laboratorium listrik',
    specs: [
      { label: 'Instrumen Utama', value: 'Multimeter Digital True RMS' },
      { label: 'Instrumen Arus', value: 'Tang Ampere (Clamp Meter)' },
      { label: 'Besaran Uji', value: 'Tegangan (V), Arus (A), Ohm (Ω)' },
      { label: 'Toleransi Baca', value: '± 1.5% Nilai Terukur' },
    ],
    tools: [
      'Multimeter digital beserta probe terisolasi',
      'Clamp meter AC digital',
      'Papan terminal uji beban resistif',
      'Lembar kerja pencatatan hasil ukur',
    ],
    safetyChecks: [
      'Memastikan selektor batas ukur sesuai besaran (ACV / DCV / Ohm) sebelum menyentuh probe.',
      'Memeriksa kondisi isolasi kabel probe agar bebas dari retakan atau terkelupas.',
      'Pengukuran resistansi hanya dilakukan saat sumber daya dalam kondisi terputus total.',
    ],
  },
  {
    id: 'gambar-diagram-instalasi',
    code: 'PRK-04',
    title: 'Gambar Diagram Garis Tunggal & Pengawatan Panel Standar IEC',
    category: 'Gambar Teknik',
    semester: 'Semester 1 · 2026',
    standard: 'IEC 60617 · Skala 1:50',
    summary:
      'Penyusunan gambar kerja kelistrikan meliputi diagram garis tunggal (single-line), legenda simbol komponen IEC, dan spesifikasi penampang kabel.',
    description:
      'Dokumentasi teknik sebelum perakitan bengkel dimulai. Gambar kerja memuat pembagian grup beban dari sakelar utama (Main Switch), jalur fasa-netral-PE, spesifikasi penampang penghantar tembaga, hingga daftar legenda simbol IEC 60617 yang mudah dibaca oleh rekan kerja maupun guru pengampu.',
    image: '/src/assets/images/project_cad_schematic_1794896778228.jpg',
    imageAlt:
      'Lembar gambar teknik kelistrikan diagram garis tunggal dan simbol IEC 60617 beserta penggaris skala dan pena gambar di meja kerja',
    specs: [
      { label: 'Standar Simbol', value: 'IEC 60617 (Internasional)' },
      { label: 'Format Gambar', value: 'Single-Line & Wiring Diagram' },
      { label: 'Skala Tata Letak', value: '1 : 50 · Kertas A4/A3' },
      { label: 'Informasi Beban', value: 'Kapasitas MCB & Penampang Cu' },
    ],
    tools: [
      'Pena gambar teknik (0.35 mm & 0.5 mm)',
      'Penggaris skala & mal simbol listrik',
      'Kertas gambar A4/A3 beretiket standar',
      'Perangkat lunak CAD diagram dasar',
    ],
    safetyChecks: [
      'Penamaan kode komponen (Q1, K1, M1) konsisten antara skema dan etiket gambar.',
      'Penulisan kapasitas pengaman arus (Ampere) tercantum jelas pada setiap cabang grup.',
      'Pencantuman jalur pembumian (PE) secara eksplisit pada diagram distribusi.',
    ],
  },
];

export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    period: 'Juli 2026',
    title: 'Diterima di Program Keahlian TITL — SMKN 1 Sidayu',
    institution: 'Kelas X TITL 2 · SMKN 1 Sidayu',
    detail:
      'Memulai pendidikan vokasi bidang Ketenagalistrikan dengan pengenalan tata tertib bengkel, budaya kerja industri (5R), dan dasar teknik listrik.',
  },
  {
    period: 'Agustus – September 2026',
    title: 'Penguasaan Keselamatan Kerja K3LH & Gambar Teknik Dasar',
    institution: 'Laboratorium Gambar & Dasar Listrik',
    detail:
      'Menyelesaikan modul standar K3LH bengkel listrik, pembacaan kode warna isolator PUIL 2011, serta pembuatan diagram pengawatan dasar berstandar IEC.',
  },
  {
    period: 'Oktober – November 2026',
    title: 'Praktikum Pengukuran Listrik & Instalasi Penerangan 1 Fasa',
    institution: 'Bengkel Instalasi Tenaga Listrik SMKN 1 Sidayu',
    detail:
      'Melaksanakan perakitan papan instalasi penerangan rumah tinggal, terminasi box MCB, dan pengukuran rangkaian listrik menggunakan multimeter digital.',
  },
  {
    period: 'Target Lanjutan 2027–2028',
    title: 'Kesiapan Uji Kompetensi Kejuruan & Praktik Kerja Lapangan (PKL)',
    institution: 'Kelas XI – XII TITL · Mitra Industri',
    detail:
      'Mempersiapkan kompetensi lanjutan pada instalasi tenaga 3 fasa, kontrol motor elektromagnetik (DOL & Star-Delta), serta otomasi PLC dasar.',
  },
];
