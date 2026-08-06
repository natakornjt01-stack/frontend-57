"use client"; // 👈 ต้องอยู่บรรทัดแรกสุด ห้ามมีอะไรอยู่ข้างบน

import Link from "next/link";

export default function ContactSection() {
  const contactMethods = [
    {
      id: 1,
      title: "Line Official",
      details: "@yourgametopup",
      note: "ตอบเร็วที่สุด ทำรายการอัตโนมัติ 24 ชม.",
      color: "from-emerald-500 to-teal-600",
      borderColor: "hover:border-emerald-400/60",
      glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      icon: (
        <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.92 1.78 5.48 4.5 7.03-.2.74-.72 2.68-.83 3.12-.13.56.2.55.43.39.18-.12 2.87-1.9 4.04-2.69.61.09 1.23.15 1.86.15 5.52 0 10-3.82 10-8.5S17.52 2 12 2z" />
        </svg>
      ),
      link: "https://line.me",
    },
    {
      id: 2,
      title: "Facebook Fanpage",
      details: "YourGame TopUp - ร้านเติมเกมอันดับ 1",
      note: "ติดตามข่าวสารและกิจกรรมแจกโค้ด",
      color: "from-blue-500 to-indigo-600",
      borderColor: "hover:border-blue-400/60",
      glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
      icon: (
        <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.22 0-1.6.76-1.6 1.54V12h2.75l-.44 3h-2.31v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
      link: "https://facebook.com",
    },
    {
      id: 3,
      title: "Discord Community",
      details: "YourGame Official Server",
      note: "พูดคุย หาปาร์ตี้เล่นเกม แจ้งปัญหา",
      color: "from-indigo-500 to-purple-600",
      borderColor: "hover:border-purple-400/60",
      glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      icon: (
        <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
        </svg>
      ),
      link: "https://discord.com",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0F172A] to-[#1E1B4B] py-20 lg:py-28">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            💬 CONTACT US
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
            ติดต่อเรา
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              พร้อมดูแลและให้บริการตลอด 24 ชั่วโมง
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-base md:text-lg">
            หากพบปัญหาการเติมเกม สอบถามโปรโมชั่น หรือต้องการความช่วยเหลือ ติดต่อทีมงานได้หลากหลายช่องทางด้านล่างนี้
          </p>
        </div>

        {/* ================= CONTACT CARDS (3 COLUMNS) ================= */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 ${item.borderColor} ${item.glowColor} hover:-translate-y-1.5`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400">
                    {item.details}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                {item.note}
              </p>
              <div className="mt-6 flex items-center text-xs font-semibold text-purple-300 group-hover:translate-x-1 transition-transform">
                ติดต่อผ่านช่องทางนี้ →
              </div>
            </a>
          ))}
        </div>

        {/* ================= FORM & INFO GRID ================= */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Side: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-8 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)]">
            <h2 className="text-2xl font-bold text-white">
              ส่งข้อความหาเรา
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    ชื่อของคุณ / ชื่อในเกม
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น GamerPro99"
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    เบอร์โทรศัพท์ / Line ID
                  </label>
                  <input
                    type="text"
                    placeholder="08X-XXX-XXXX หรือ ID Line"
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  หัวข้อเรื่องที่ต้องการติดต่อ
                </label>
                <select className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400">
                  <option>แจ้งปัญหาการเติมเกม / เงินไม่เข้า</option>
                  <option>สอบถามรายละเอียดโปรโมชั่น</option>
                  <option>สมัครเป็นตัวแทนจำหน่าย / พาร์ทเนอร์</option>
                  <option>อื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  รายละเอียดเพิ่มเติม / หมายเลขคำสั่งซื้อ (ถ้ามี)
                </label>
                <textarea
                  rows={4}
                  placeholder="ระบุเกมที่เติม, UID ของตัวละคร, หรือรายละเอียดที่ต้องการให้ช่วยเหลือ..."
                  className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-center font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Right Side: Working Hours & FAQ (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Working Hours Card */}
            <div className="rounded-3xl border border-purple-500/30 bg-slate-900/60 p-8 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                🕒 เวลาทำการบริการ
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">ระบบเติมเงินอัตโนมัติ:</span>
                  <span className="font-semibold text-cyan-300">24 ชั่วโมง (ไม่มีวันหยุด)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">ทีมงานแอดมินสแตนด์บาย:</span>
                  <span className="font-semibold text-slate-200">09:00 - 02:00 น.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ระยะเวลาตอบกลับเฉลี่ย:</span>
                  <span className="font-semibold text-emerald-400">ภายใน 5 นาที</span>
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">
                ⚡ เติมเงินแล้วไม่เข้า ทำอย่างไร?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                หากทำรายการสำเร็จแต่ไอเทมไม่เข้าเกมภายใน 10 นาที โปรดเตรียม <span className="text-cyan-300 font-semibold">สลิปการโอนเงิน</span> และ <span className="text-cyan-300 font-semibold">UID ตัวละคร</span> แล้วส่งให้แอดมินทาง Line Official ได้ทันทีครับ
              </p>
              <Link
                href="/topup"
                className="mt-6 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                ดูประวัติรายการเติมเงินของคุณ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}