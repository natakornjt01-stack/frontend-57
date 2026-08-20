"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function FormEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  // ============================================================
  // 🔥 [เพิ่มจุดที่ 1] Effect สำหรับสร้างลูกไฟ 3 สีวิ่งชนขอบจอแล้วเด้งกลับ
  // ============================================================
  useEffect(() => {
    const canvas = document.getElementById("bouncing-balls-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // กำหนดค่าลูกไฟ 3 สี (ตำแหน่งเริ่มต้น, ความเร็ว dx/dy, ขนาด, สีหลัก, สีแสงเรือง)
    const balls = [
      { x: 120, y: 150, dx: 3, dy: 2, radius: 25, color: "#06b6d4", glow: "#22d3ee" }, // Cyan
      { x: 350, y: 250, dx: -2.5, dy: 3, radius: 30, color: "#d946ef", glow: "#e879f9" }, // Fuchsia
      { x: 550, y: 420, dx: 3.5, dy: -2, radius: 22, color: "#84cc16", glow: "#a3e635" }, // Lime
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.shadowColor = ball.glow;
        ctx.shadowBlur = 30; // ความฟุ้งเรืองแสงของลูกไฟ
        ctx.fill();
        ctx.closePath();

        // ดักการชนขอบซ้าย-ขวา
        if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
          ball.dx = -ball.dx;
        }
        // ดักการชนขอบบน-ล่าง
        if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
          ball.dy = -ball.dy;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fetchUser = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();

      setForm({
        txt_firstname: data.firstname ?? "",
        txt_lastname: data.lastname ?? "",
        txt_username: data.username ?? "",
        txt_password: "",
      });
    } catch (error) {
      setIsError(true);
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถโหลดข้อมูลได้",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#06b6d4",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const swalDark = {
      background: "#0f172a",
      color: "#fff",
      confirmButtonColor: "#06b6d4",
    };

    if (!form.txt_firstname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุชื่อ",
        text: "กรุณากรอกชื่อ",
        confirmButtonText: "ตกลง",
        ...swalDark,
      });
      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุนามสกุล",
        text: "กรุณากรอกนามสกุล",
        confirmButtonText: "ตกลง",
        ...swalDark,
      });
      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุ Username",
        text: "กรุณากรอก Username",
        confirmButtonText: "ตกลง",
        ...swalDark,
      });
      return false;
    }

    return true;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSaving(true);

      const payload = {
        firstname: form.txt_firstname,
        lastname: form.txt_lastname,
        username: form.txt_username,
      };
      if (form.txt_password) {
        payload.password = form.txt_password;
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "ปรับปรุงข้อมูลผู้ใช้เรียบร้อยแล้ว",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#10b981",
        });

        router.push("/users");
        return;
      }

      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#eab308",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#ef4444",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: `บันทึกไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#06b6d4",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 pt-24 md:pt-32 pb-12">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-6 py-4 border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
          <p className="text-cyan-400 font-semibold animate-pulse">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 pt-24 md:pt-32 pb-12">
        <div className="rounded-2xl bg-slate-900/80 p-6 border border-red-500/30 text-center shadow-[0_0_20px_rgba(239,68,68,0.2)]">
          <p className="text-red-400 font-bold">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-screen bg-slate-950 px-4 pb-12 pt-24 md:px-8 md:pt-32 text-white flex items-center justify-center overflow-hidden">
      
      {/* 🔥 [เพิ่มจุดที่ 2] Canvas สำหรับแสดงผลลูกไฟวิ่งเด้งชนขอบอยู่ด้านหลังสุด */}
      <canvas
        id="bouncing-balls-canvas"
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
      />

      {/* 🔥 [เพิ่มจุดที่ 3] ใส่ z-10 เพื่อให้ฟอร์มลอยอยู่เหนือ Canvas ลูกไฟ */}
      <div className="relative z-10 w-full max-w-3xl">

        {/* กรอบ LED เรืองแสงด้านนอกสุด */}
        <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_0_35px_rgba(0,0,0,0.9)]">
          {/* ไฟ LED หมุนรอบขอบแบบ Conic Gradient */}
          <div className="absolute -inset-[200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#a855f7,#ec4899,#06b6d4)] opacity-80" />

          {/* กล่องเนื้อหาหลักแบบ Glassmorphism */}
          <div className="relative rounded-[22px] bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl border border-slate-800">

            {/* Header */}
            <div className="mb-6 border-b border-slate-800/80 pb-4 flex items-center justify-between">
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                แก้ไขข้อมูลสมาชิก
              </h1>
              <span className="rounded-full bg-slate-950 px-3.5 py-1 text-xs font-mono font-bold text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                ID: #{id}
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdate} className="space-y-5">
              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  ชื่อ
                </label>
                <input
                  type="text"
                  name="txt_firstname"
                  value={form.txt_firstname}
                  onChange={handleChange}
                  placeholder="firstname"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 shadow-inner transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  นามสกุล
                </label>
                <input
                  type="text"
                  name="txt_lastname"
                  value={form.txt_lastname}
                  onChange={handleChange}
                  placeholder="lastname"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 shadow-inner transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Username
                </label>
                <input
                  type="text"
                  name="txt_username"
                  value={form.txt_username}
                  onChange={handleChange}
                  placeholder="username"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-2.5 text-cyan-300 font-mono placeholder-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 shadow-inner transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Password{" "}
                  <span className="text-[11px] normal-case text-slate-400 font-normal">
                    (เว้นว่างไว้หากไม่ต้องการเปลี่ยน)
                  </span>
                </label>
                <input
                  type="password"
                  name="txt_password"
                  value={form.txt_password}
                  onChange={handleChange}
                  placeholder="password"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 shadow-inner transition-all duration-300"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4">
                {/* ปุ่มบันทึกข้อมูล (พร้อมไฟ LED ขอบปุ่ม) */}
                <div className="relative overflow-hidden rounded-xl p-[2px] transition-transform duration-300 hover:scale-[1.02] active:scale-95">
                  <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#38bdf8,#06b6d4,#ffffff)] opacity-90" />
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="relative rounded-[10px] bg-slate-950 px-6 py-2.5 text-xs font-black text-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:bg-cyan-500 hover:text-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                  </button>
                </div>

                {/* ปุ่มยกเลิก */}
                <button
                  type="button"
                  onClick={() => router.push("/users")}
                  className="rounded-xl border border-slate-800 bg-slate-950/50 px-6 py-2.5 text-xs font-bold text-slate-400 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-slate-200"
                >
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}