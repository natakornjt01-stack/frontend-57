import Image from "next/image";
import Link from "next/link";

export default function Cardsection() {
  const games = [
    {
      id: 1,
      name: "Free Fire",
      category: "Mobile Battle Royale",
      discount: "ลดสูงสุด 20%",
      image: "https://official.garena.com/intl/v1/config/banner_ff_mb.jpg",
      tag: "ขายดี",
    },
    {
      id: 2,
      name: "ROV : Aena of Valor",
      category: "Mobile MOBA",
      discount: "โบนัส คูปอง +15%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkby-FmbCKReXEQoGVwiSCbCUu5HOfinrwCBG8TSdYnfkofGoOquumvE&s=10",
      tag: "แนะนำ",
    },
    {
      id: 3,
      name: "Valorant",
      category: "PC FPS",
      discount: "VP ราคาพิเศษ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42QFjtRRgkL2vy0hU7pWF6j2maCfaYnXQNEUZGrhjaH52exsvyCJvoDVB&s=10",
      tag: "ฮิตแรง",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-16">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur">
            🔥 GAME SELECTION
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">
            เกมยอดนิยม
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}เติมทันที รับโปรสุดคุ้ม
            </span>
          </h2>
          <p className="mt-3 text-slate-400">
            เลือกเกมที่คุณต้องการเติม ระบบอัตโนมัติ รวดเร็ว 24 ชั่วโมง
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                {game.tag}
              </div>

              {/* Card Image Wrapper */}
              <div className="relative h-52 w-full overflow-hidden rounded-xl bg-slate-800">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Content */}
              <div className="mt-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-cyan-400">
                    {game.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {game.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-purple-400">
                    {game.discount}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/topup/${game.id}`}
                    className="block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:brightness-110"
                  >
                    เติมเกมนี้
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}