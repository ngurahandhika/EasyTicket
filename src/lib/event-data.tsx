export interface Event {
  id: number;
  judul: string;
  organizer: string;
  tanggal: string;
  jam: string;
  lokasi: string;
  image: string;
  harga: number;
  hargaOriginal: number;
  tersedia: number;
  description: string;
  paket: Package[];
}

export interface Package {
  id: number;
  nama: string;
  harga: number;
  tersediaPaket: string[];
  tersedia: number;
}

export const eventsData: Event[] = [
  {
    id: 1,
    judul: "Live Music Concert",
    organizer: "Musik Group",
    tanggal: "Dec 25, 2025",
    jam: "8:00 PM",
    lokasi: "Bla Bla Bla, Jakarta",
    image: "/theater-stage.jpg",
    harga: 85000,
    hargaOriginal: 120000,
    tersedia: 113,
    description: `Bergabunglah dengan kami untuk malam yang tak terlupakan penuh musik live dari band-band terbaik!

    Nikmati suasana yang meriah, makanan lezat, dan minuman segar sambil menari sepanjang malam.`,
    paket: [
      {
        id: 1,
        nama: "Paket Reguler",
        harga: 85000,
        tersediaPaket: ["Standing area access", "1 Minuman gratis"],
        tersedia: 90,
      },
      {
        id: 2,
        nama: "Paket VIP",
        harga: 150000,
        tersediaPaket: [
          "VIP seating area",
          "Meet & Greet",
          "2 Minuman gratis & 1 Snack gratis",
        ],
        tersedia: 23,
      },
    ],
  },
  {
    id: 2,
    judul: "Tech Conference 2025",
    organizer: "TechHub Indonesia",
    tanggal: "Jan 15, 2026",
    jam: "9:00 AM",
    lokasi: "Grand Ballroom, Surabaya",
    image: "/tech-conference.jpg",
    harga: 200000,
    hargaOriginal: 300000,
    tersedia: 250,
    description: `Konferensi teknologi terbesar tahun ini dengan pembicara dari perusahaan teknologi terkemuka.

    Pelajari tentang AI, Cloud Computing, dan trend teknologi terbaru.`,
    paket: [
      {
        id: 1,
        nama: "Early Bird",
        harga: 200000,
        tersediaPaket: [
          "Akses semua sesi",
          "Lunch & coffee break",
          "Sertifikat digital",
        ],
        tersedia: 150,
      },
      {
        id: 2,
        nama: "Premium Pass",
        harga: 400000,
        tersediaPaket: [
          "Akses semua sesi",
          "Workshop eksklusif",
          "Networking dinner",
          "Swag bag",
        ],
        tersedia: 100,
      },
    ],
  },
  {
    id: 3,
    judul: "Stand Up Comedy Night",
    organizer: "Comedy Club Jakarta",
    tanggal: "Dec 31, 2025",
    jam: "7:00 PM",
    lokasi: "Comedy Lounge, Jakarta Selatan",
    image: "/comedy-club.jpg",
    harga: 100000,
    hargaOriginal: 150000,
    tersedia: 80,
    description: `Tutup tahun dengan tawa! Saksikan komika-komika terbaik Indonesia menghibur Anda.

    Malam spesial tahun baru dengan comedy dan kejutan menarik!`,
    paket: [
      {
        id: 1,
        nama: "General Admission",
        harga: 100000,
        tersediaPaket: ["Standing access", "1 Welcome drink"],
        tersedia: 50,
      },
      {
        id: 2,
        nama: "Reserved Table",
        harga: 250000,
        tersediaPaket: [
          "Table untuk 4 orang",
          "Priority seating",
          "Free snacks & drinks",
        ],
        tersedia: 30,
      },
    ],
  },
  {
    id: 4,
    judul: "Indie Film Screening",
    organizer: "Cinema Collective",
    tanggal: "Dec 20, 2025",
    jam: "5:00 PM",
    lokasi: "Kineforum, Jakarta",
    image: "/concert-stage.jpg",
    harga: 75000,
    hargaOriginal: 100000,
    tersedia: 60,
    description: `Pemutaran film indie pilihan dengan diskusi bersama sutradara dan pemain.

    Dukung perfilman Indonesia dan nikmati cerita-cerita unik yang menginspirasi.`,
    paket: [
      {
        id: 1,
        nama: "Standard Ticket",
        harga: 75000,
        tersediaPaket: ["Film screening", "Q&A session"],
        tersedia: 40,
      },
      {
        id: 2,
        nama: "Cinephile Pass",
        harga: 120000,
        tersediaPaket: [
          "Film screening",
          "Extended Q&A",
          "Meet the cast",
          "Exclusive poster",
        ],
        tersedia: 20,
      },
    ],
  },
  {
    id: 5,
    judul: "Stand Up Comedy Night 2",
    organizer: "Comedy Club Jakarta",
    tanggal: "Jan 8, 2026",
    jam: "7:00 PM",
    lokasi: "Comedy Lounge, Jakarta Selatan",
    image: "/comedy-club.jpg",
    harga: 100000,
    hargaOriginal: 150000,
    tersedia: 80,
    description: `Tutup tahun dengan tawa! Saksikan komika-komika terbaik Indonesia menghibur Anda.

    Malam spesial tahun baru dengan comedy dan kejutan menarik!`,
    paket: [
      {
        id: 1,
        nama: "General Admission",
        harga: 100000,
        tersediaPaket: ["Standing access", "1 Welcome drink"],
        tersedia: 50,
      },
      {
        id: 2,
        nama: "Reserved Table",
        harga: 250000,
        tersediaPaket: [
          "Table untuk 4 orang",
          "Priority seating",
          "Free snacks & drinks",
        ],
        tersedia: 30,
      },
    ],
  },
];

export function getEventById(id: number): Event | undefined {
  return eventsData.find((event) => event.id === id);
}

export function getAllEvents(): Event[] {
  return eventsData;
}
