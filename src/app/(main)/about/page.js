import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const stats = [
    { id: 1, value: "100K+", label: "รายการเติมสำเร็จ" },
    { id: 2, value: "24/7", label: "บริการรวดเร็วตลอดวัน" },
    { id: 3, value: "100%", label: "ปลอดภัย ไม่โดนแบน" },
    { id: 4, value: "4.9/5", label: "คะแนนรีวิวจากเกมเมอร์" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0F172A] to-[#1E1B4B] py-20 lg:py-28">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            🚀 ABOUT US
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
            เกี่ยวกับเรา
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              ศูนย์บริการเติมเกมอันดับ 1 ในใจเกมเมอร์ทั่วโลก
            </span>
          </h1>
        </div>

        {/* Story Content Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Image with Neon Frame */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 blur-2xl" />
              <div className="relative rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-3 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.25)]">
                <Image
                  src="https://i.pinimg.com/236x/50/4b/f2/504bf215c77261547d43515a85caa63c.jpg"
                  alt="ทีมงานเติมเกม"
                  width={900}
                  height={600}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Details */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              เราคือใคร?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              เราคือแพลตฟอร์มบริการเติมเกมออนไลน์ที่มุ่งมั่นมอบประสบการณ์การเติมเกมที่{" "}
              <span className="font-semibold text-cyan-300">รวดเร็ว ปลอดภัย และคุ้มค่าที่สุด</span>{" "}
              รองรับเกมยอดนิยมมากมาย เช่น Free Fire, ROV, Valorant และ PUBG Mobile
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              ด้วยระบบทำรายการอัตโนมัติที่ทันสมัย ทีมงานมืออาชีพพร้อมดูแลและให้บริการตลอด 24 ชั่วโมง ช่วยให้ทุกการทำรายการของคุณราบรื่น ไม่สะดุดทุกความสนุกในโลกแห่งเกม
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/topup"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:scale-105"
              >
                เติมเกมเลย
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-purple-400 px-8 py-3 font-semibold text-purple-300 transition hover:bg-purple-500 hover:text-white"
              >
                สอบถามเพิ่มเติม
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 text-center backdrop-blur-md transition hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-300 md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}