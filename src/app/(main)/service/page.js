import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  // สินค้าเติมเกมอย่างน้อย 6 รายการ
  const gameProducts = [
    {
      id: 1,
      game: "Free Fire",
      title: "1,080 Diamonds",
      price: "฿300",
      originalPrice: "฿350",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
      badge: "ขายดี",
    },
    {
      id: 2,
      game: "Free Fire",
      title: "2,200 Diamonds",
      price: "฿600",
      originalPrice: "฿700",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
      badge: "คุ้มสุด",
    },
    {
      id: 3,
      game: "ROV",
      title: "670 Vouchers",
      price: "฿500",
      originalPrice: "฿550",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80",
      badge: "ยอดนิยม",
    },
    {
      id: 4,
      game: "ROV",
      title: "1,400 Vouchers",
      price: "฿1,000",
      originalPrice: "฿1,150",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
      badge: "แนะนำ",
    },
    {
      id: 5,
      game: "Valorant",
      title: "2,050 VP",
      price: "฿650",
      originalPrice: "฿720",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&q=80",
      badge: "ราคาพิเศษ",
    },
    {
      id: 6,
      game: "Valorant",
      title: "5,350 VP",
      price: "฿1,600",
      originalPrice: "฿1,800",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
      badge: "เซ็ตใหญ่",
    },
  ];

  // โปรโมชั่นโดดเด่น 3 รายการ
  const promotions = [
    {
      id: 1,
      game: "Free Fire",
      title: "โปรต้อนรับซีซั่นใหม่!",
      description: "เติมเพชร Free Fire แถมฟรีทันทีกล่องสุ่มสกินปืนระดับเลเจนด์",
      discount: "โบนัส +25%",
      image: "https://cdn.indexgame.in.th/pack-icons/4b7c9a82-4a57-4ab2-b5b6-2a12cd14fa5c.png",
    },
    {
      id: 2,
      game: "ROV",
      title: "ROV Coupon Bonus x2",
      description: "เติมแพ็กใดก็ได้ รับคูปองเพิ่มสองเท่าทุกวันศุกร์-อาทิตย์",
      discount: "คุ้มค่า x2",
      image: "https://media.lnwtrue.com/images/products/rov-directs/sku/5PUEE1VSxFSFXL.webp",
    },
    {
      id: 3,
      game: "Valorant",
      title: "Valorant Night Market Sale",
      description: "เติม VP ซื้อสกิน Night Market รับเครดิตเงินคืนเข้ากระเป๋า 10%",
      discount: "Cashback 10%",
      image: "https://p2wtopup.com/static/images/Val_Logo.png",
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
            ⚡ OUR SERVICES
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
            บริการของเรา
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              เติมเกม อัตโนมัติ รวดเร็ว 24 ชั่วโมง
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-base md:text-lg">
            เลือกแพ็กเกจเติมเกมยอดนิยมพร้อมโปรโมชั่นสุดคุ้ม ทำรายการง่าย ได้รับไอเทมทันที ปลอดภัย 100%
          </p>
        </div>

        {/* ================= SECTION 1: PROMOTIONS ================= */}
        <div className="mt-20">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
            <h2 className="text-2xl font-bold text-white md:text-3xl flex items-center gap-2">
              🔥 โปรโมชั่นโดดเด่น
            </h2>
            <span className="text-sm font-medium text-cyan-400">อัปเดตสัปดาห์นี้</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-900/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                {/* Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-800">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {promo.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {promo.game}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {promo.description}
                  </p>
                  <Link
                    href="/promotion"
                    className="mt-5 block w-full rounded-xl border border-purple-400/50 bg-purple-500/10 py-2.5 text-center text-sm font-semibold text-purple-300 transition hover:bg-purple-500 hover:text-white"
                  >
                    รับโปรโมชั่นนี้
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: PRODUCTS (6 ITEMS) ================= */}
        <div className="mt-24">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
            <h2 className="text-2xl font-bold text-white md:text-3xl flex items-center gap-2">
              💎 แพ็กเกจเติมเกมยอดนิยม
            </h2>
            <span className="text-sm font-medium text-slate-400">3 เกมหลัก (Free Fire / ROV / Valorant)</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gameProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {product.badge}
                </div>

                {/* Card Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-slate-800">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Detail */}
                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-medium text-cyan-400">
                      {product.game}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-extrabold text-white">
                        {product.price}
                      </span>
                      <span className="ml-2 text-xs text-slate-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    <Link
                      href={`/topup?id=${product.id}`}
                      className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] transition hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                    >
                      เติมเงิน
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}