'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoginModal from '@/components/LoginModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'บริการของเรา', href: '/service' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ]

  return (
    <>
      {/* Keyframe แสงไฟ LED และอนิเมชั่น Mega Pixel Ball Sequence */}
      <style jsx global>{`
        @keyframes led-fast-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes led-fast-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-led-fast-right {
          animation: led-fast-right 0.9s linear infinite;
        }
        .animate-led-fast-left {
          animation: led-fast-left 0.9s linear infinite;
        }

        /* ----- บอลฟ้า: หมุนวนสลับเร็วขึ้น (ขนาดใหญ่ขึ้นเกือบเต็ม Nav) ----- */
        @keyframes pixel-blue-mega {
          0% { transform: translate(0px, -12px) scale(1); opacity: 0.9; }
          10% { transform: translate(18px, 8px) scale(1.15); opacity: 1; }
          20% { transform: translate(36px, -12px) scale(1); opacity: 0.9; }
          30% { transform: translate(18px, 8px) scale(1.15); opacity: 1; }
          40% { transform: translate(0px, -12px) scale(1); opacity: 0.9; }
          50% { transform: translate(18px, 8px) scale(1.15); opacity: 1; }
          /* 5s-7s: ดึงเข้าหากันเพื่อเตรียมรวมร่าง */
          60% { transform: translate(18px, -4px) scale(1); opacity: 1; }
          70% { transform: translate(18px, 0px) scale(0.2); opacity: 0.5; }
          75%, 100% { transform: translate(18px, 0px) scale(0); opacity: 0; }
        }

        /* ----- บอลแดง: หมุนวนสลับทิศทางกับฟ้าอย่างรวดเร็ว ----- */
        @keyframes pixel-red-mega {
          0% { transform: translate(36px, 8px) scale(1); opacity: 0.9; }
          10% { transform: translate(18px, -12px) scale(1.15); opacity: 1; }
          20% { transform: translate(0px, 8px) scale(1); opacity: 0.9; }
          30% { transform: translate(18px, -12px) scale(1.15); opacity: 1; }
          40% { transform: translate(36px, 8px) scale(1); opacity: 0.9; }
          50% { transform: translate(18px, -12px) scale(1.15); opacity: 1; }
          /* 5s-7s: ดึงเข้าหากันเพื่อเตรียมรวมร่าง */
          60% { transform: translate(18px, 4px) scale(1); opacity: 1; }
          70% { transform: translate(18px, 0px) scale(0.2); opacity: 0.5; }
          75%, 100% { transform: translate(18px, 0px) scale(0); opacity: 0; }
        }

        /* ----- บอลม่วงยักษ์: ขยายใหญ่เต็ม Nav -> พุ่งขวาสุด ----- */
        @keyframes pixel-purple-giant {
          0%, 70% { transform: translate(18px, -50%) scale(0); opacity: 0; }
          /* 7s-8s: ขยายใหญ่ยักษ์เต็มความสูง Nav */
          75% { transform: translate(18px, -50%) scale(1.2); opacity: 1; }
          82% { transform: translate(18px, -50%) scale(1.6); opacity: 1; }
          /* 8s-9s: พุ่งทะยานไปขวาสุด */
          90% { transform: translate(1550px, -50%) scale(1.6); opacity: 1; }
          91%, 100% { transform: translate(1550px, -50%) scale(0); opacity: 0; }
        }

        /* ----- คลื่นระเบิดม่วงดำขนาดยักษ์ ----- */
        @keyframes pixel-dark-shockwave {
          0%, 89% { transform: translate(350px, -50%) scale(0); opacity: 0; }
          90% { transform: translate(1550px, -50%) scale(0.4); opacity: 1; }
          95% { transform: translate(1550px, -50%) scale(4.5); opacity: 0.85; }
          100% { transform: translate(1550px, -50%) scale(7); opacity: 0; }
        }

        .animate-mega-blue { animation: pixel-blue-mega 10s ease-in-out infinite; }
        .animate-mega-red { animation: pixel-red-mega 10s ease-in-out infinite; }
        .animate-giant-purple { animation: pixel-purple-giant 10s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .animate-giant-explode { animation: pixel-dark-shockwave 10s ease-out infinite; }
      `}</style>

      {/* Navigation Bar ชิดขอบซ้าย-ขวาสุดเต็มหน้าจอ */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50">
        <div
          className={`relative w-full transition-all duration-500 backdrop-blur-xl ${
            isScrolled
              ? 'bg-slate-950/85 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              : 'bg-slate-900/80 shadow-[0_5px_20px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* ================= 1. เส้นไฟ LED ด้านบน ================= */}
          <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none z-20">
            <div
              className={`w-full h-full animate-led-fast-right transition-all duration-500 ${
                isScrolled
                  ? 'bg-gradient-to-r from-transparent via-sky-300 via-indigo-300 to-transparent opacity-60 drop-shadow-[0_0_6px_rgba(186,230,253,0.8)]'
                  : 'bg-gradient-to-r from-transparent via-cyan-400 via-pink-500 via-purple-400 to-transparent opacity-100 drop-shadow-[0_0_12px_rgba(34,211,238,1)]'
              }`}
            />
          </div>

          {/* ================= 2. เส้นไฟ LED ด้านล่าง ================= */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none z-20">
            <div
              className={`w-full h-full animate-led-fast-left transition-all duration-500 ${
                isScrolled
                  ? 'bg-gradient-to-r from-transparent via-rose-300 via-teal-300 to-transparent opacity-60 drop-shadow-[0_0_6px_rgba(253,164,175,0.8)]'
                  : 'bg-gradient-to-r from-transparent via-fuchsia-400 via-amber-300 via-violet-500 to-transparent opacity-100 drop-shadow-[0_0_12px_rgba(217,70,239,1)]'
              }`}
            />
          </div>

          {/* คอนเทนต์ภายในเนฟบาร์ */}
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="flex h-16 md:h-20 items-center justify-between">
              
              {/* Logo Section */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center overflow-hidden rounded-2xl p-[2px] transition-transform duration-300 hover:scale-110">
                  <div className="absolute -inset-[150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)] opacity-90" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950/90 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300">
                    <span className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] font-black text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                      ZZZ
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* หัวข้อแบรนด์พร้อมอนิเมชั่นพิกเซลลูกบอลใหญ่ยักษ์ */}
                  <div className="flex items-center gap-3 relative">
                    <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                      BangBoo Shop
                    </h1>

                    {/* Container ของ Mega Pixel Orbs */}
                    <div className="relative w-12 h-12 flex items-center pointer-events-none">
                      {/* บอลสีฟ้า (ใหญ่เกือบเต็ม Nav) */}
                      <div className="absolute top-1/2 -mt-3.5 animate-mega-blue w-7 h-7 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee,0_0_30px_#06b6d4]" />

                      {/* บอลสีแดง (ใหญ่เกือบเต็ม Nav) */}
                      <div className="absolute top-1/2 -mt-3.5 animate-mega-red w-7 h-7 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e,0_0_30px_#e11d48]" />

                      {/* บอลม่วงยักษ์ (รวมร่างแล้วใหญ่เต็ม Nav) */}
                      <div className="absolute top-1/2 animate-giant-purple w-9 h-9 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full shadow-[0_0_25px_#a855f7,0_0_50px_#c084fc]" />

                      {/* คลื่นระเบิดม่วงเข้มปนดำสุดอลังการ */}
                      <div className="absolute top-1/2 animate-giant-explode w-16 h-16 bg-radial from-purple-900 via-slate-950 to-black rounded-full border-2 border-purple-500/80 shadow-[0_0_40px_#581c87,inset_0_0_20px_#000]" />
                    </div>
                  </div>

                  <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    เติมเกมเสร็จเร็ว
                  </p>
                </div>
              </Link>

              {/* Menu & Action Buttons */}
              <div className="flex items-center gap-2 md:gap-4">
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 mr-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Cart Button */}
                <Link
                  href="/cart"
                  className="relative p-2.5 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-[10px] font-black text-white shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                    3
                  </span>
                </Link>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                  <div className="relative overflow-hidden rounded-full p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95">
                    <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#38bdf8,#a855f7,#ffffff)] opacity-90" />
                    <button
                      onClick={() => setIsLoginModalOpen(true)}
                      className="relative rounded-full bg-slate-950 px-6 py-2 text-sm font-extrabold text-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:bg-cyan-500 hover:text-slate-950"
                    >
                      เข้าสู่ระบบ
                    </button>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden rounded-full p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="space-y-1.5">
                    <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45 text-cyan-400' : ''}`} />
                    <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45 text-cyan-400' : ''}`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100 pb-4 pt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-1 p-3 bg-slate-950/90 border border-cyan-500/30 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-xl">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-300 rounded-xl transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="h-px bg-slate-800 my-1 w-full" />

                <div className="relative overflow-hidden rounded-xl p-[2px] mt-1">
                  <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#38bdf8,#a855f7,#ffffff)] opacity-90" />
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      setIsLoginModalOpen(true)
                    }}
                    className="relative w-full rounded-[10px] bg-slate-950 px-4 py-2.5 text-center text-sm font-extrabold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] active:bg-cyan-500 active:text-slate-950 transition-all"
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}