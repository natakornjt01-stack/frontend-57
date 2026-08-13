import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0F172A] to-[#1E1B4B]">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              🎮 ร้านเติมเกมอันดับ 1
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              เติมเกม
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                เร็ว ปลอดภัย คุ้มค่า
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              เติมเกม Free Fire, ROV, PUBG Mobile, Valorant
              และเกมยอดนิยมอีกมากมาย พร้อมโปรโมชั่นสุดคุ้มตลอด 24 ชั่วโมง
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/topup"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:scale-105"
              >
                เติมเกมเลย
              </Link>

              <Link
                href="/promotion"
                className="rounded-xl border border-purple-400 px-8 py-3 font-semibold text-purple-300 transition hover:bg-purple-500 hover:text-white"
              >
                ดูโปรโมชั่น
              </Link>
            </div>
          </div>

         
          <div className="flex justify-center">
            <div className="relative group">
              
              <div className="absolute -inset-4 animate-pulse rounded-[2.5rem] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              
              <div className="relative w-full max-w-lg overflow-hidden rounded-3xl p-[2px] transition-transform duration-500 hover:scale-[1.02]">
                {/* ไฟ LED หมุนวนรอบกรอบ */}
                <div className="absolute -inset-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#a855f7,#ec4899,#06b6d4)] opacity-100" />

             
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-slate-950">
                  <Image
                    src="https://zzz.honeyhunterworld.com/img/item/55002-item_full_icon.webp"
                    alt="Gaming"
                    width={2000}
                    height={6000}
                    className="w-full h-auto object-cover rounded-[22px] shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(168,85,247,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}