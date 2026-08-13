"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginModal({ isOpen, onClose }) {
  // 1. State ควบคุมโหมด (True = Login, False = Register)
  const [isLoginMode, setIsLoginMode] = useState(true);

  // State สำหรับควบคุม Animation แสงวูบวาบเมื่อเปลี่ยนโหมด
  const [isGlowing, setIsGlowing] = useState(false);

  // 2. State สำหรับเก็บข้อมูลฟอร์ม
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  // 3. รีเซ็ตฟอร์มกลับเป็นค่าเริ่มต้นเมื่อเปิด Modal ขึ้นมาใหม่
  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(true);
      setForm({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // ฟังก์ชันสลับโหมด พร้อมส่งสัญญาณแสงวูบวาบ (Flash Effect)
  const handleToggleMode = () => {
    setIsGlowing(true);
    setIsLoginMode(!isLoginMode);
    setTimeout(() => setIsGlowing(false), 600);
  };

  // ฟังก์ชันอัปเดต State ตามชื่อ name ของ Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 4. ฟังก์ชันจัดการเมื่อกด Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      console.log("เข้าสู่ระบบด้วย:", {
        username: form.username,
        password: form.password,
      });

      await Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: `ยินดีต้อนรับกลับมาคุณ ${form.username}`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#06b6d4",
        background: "#0f172a",
        color: "#fff",
      });
      onClose();
    } else {
      try {
        const response = await fetch("https://api.itdev.cmtc.ac.th/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: form.firstname,
            lastname: form.lastname,
            username: form.username,
            password: form.password,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          await Swal.fire({
            icon: "success",
            title: `สมัครสมาชิกสำเร็จ`,
            text: "เพิ่มข้อมูลผู้ใช้เรียบร้อยแล้ว กรุณาเข้าสู่ระบบ",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#06b6d4",
            background: "#0f172a",
            color: "#fff",
          });

          setIsLoginMode(true);
          setForm({ firstname: "", lastname: "", username: "", password: "" });
        } else if (response.status === 400) {
          await Swal.fire({
            icon: "warning",
            title: `ข้อมูลไม่ถูกต้อง`,
            text: result.message || "เกิดข้อผิดพลาด",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#eab308",
            background: "#0f172a",
            color: "#fff",
          });
        } else if (response.status >= 500) {
          await Swal.fire({
            icon: "error",
            title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์`,
            text: result.message || "เกิดข้อผิดพลาด",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#ef4444",
            background: "#0f172a",
            color: "#fff",
          });
        }
      } catch (error) {
        await Swal.fire({
          icon: "warning",
          title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
          text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ec4899",
          background: "#0f172a",
          color: "#fff",
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      {/* Container หลักที่มีขอบไฟ LED วิ่งวน */}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl p-[2px] transition-all duration-500 ${
          isGlowing ? "scale-105" : "scale-100"
        }`}
      >
        {/* ================= 1. ไฟ LED วิ่งรอบกรอบ (Rotating Gradient Border) ================= */}
        <div
          className={`absolute -inset-[200%] animate-[spin_4s_linear_infinite] opacity-90 transition-all duration-500 ${
            isLoginMode
              ? "bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#a855f7,#06b6d4)]"
              : "bg-[conic-gradient(from_0deg,#10b981,#06b6d4,#ec4899,#10b981)]"
          }`}
        />

        {/* แสงฟุ้งด้านหลังกล่องเมื่อสลับโหมด */}
        <div
          className={`absolute inset-0 blur-2xl transition-opacity duration-500 ${
            isGlowing ? "opacity-100" : "opacity-30"
          } ${isLoginMode ? "bg-cyan-500" : "bg-purple-500"}`}
        />

        {/* ================= 2. ตัวกล่อง Modal ด้านใน (Dark Glassmorphism) ================= */}
        <div className="relative w-full rounded-[23px] bg-slate-900/90 p-8 backdrop-blur-xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* ปุ่มปิด Modal */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-all border border-transparent hover:border-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* ส่วนหัว (Header & Neon Logo) */}
          <div className="text-center mb-8 mt-2">
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white font-black text-2xl shadow-lg transition-all duration-500 ${
                isLoginMode
                  ? "bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                  : "bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              }`}
            >
              G
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white mt-4">
              {isLoginMode ? "ยินดีต้อนรับกลับมา" : "สร้างบัญชีใหม่"}
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              {isLoginMode
                ? "เข้าสู่ระบบเพื่อรับสิทธิพิเศษและบริการเติมเกมอัตโนมัติ"
                : "กรอกข้อมูลเพื่อสมัครสมาชิกและรับโบนัสพิเศษฟรี"}
            </p>
          </div>

          {/* ฟอร์ม */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ช่องกรอก ชื่อ-นามสกุล (แสดงเฉพาะโหมด Register) */}
            {!isLoginMode && (
              <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-3 duration-300">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ชื่อจริง
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    value={form.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950/80 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm"
                    placeholder="ระบุชื่อจริง"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    value={form.lastname}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950/80 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm"
                    placeholder="ระบูนามสกุล"
                  />
                </div>
              </div>
            )}

            {/* ช่อง Username */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                ชื่อผู้ใช้งาน (Username)
              </label>
              <input
                type="text"
                name="username"
                required
                value={form.username}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all text-sm ${
                  isLoginMode
                    ? "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
                    : "border-slate-700 focus:border-emerald-400 focus:ring-emerald-400"
                }`}
                placeholder="กรอกชื่อผู้ใช้งาน"
              />
            </div>

            {/* ช่อง Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  รหัสผ่าน
                </label>
                {isLoginMode && (
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    onClick={onClose}
                  >
                    ลืมรหัสผ่าน?
                  </Link>
                )}
              </div>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all text-sm ${
                  isLoginMode
                    ? "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
                    : "border-slate-700 focus:border-emerald-400 focus:ring-emerald-400"
                }`}
                placeholder="••••••••"
              />
            </div>

            {/* ปุ่ม Submit นีออน */}
            <button
              type="submit"
              className={`w-full py-3.5 px-4 mt-4 rounded-xl text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                isLoginMode
                  ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
                  : "bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)]"
              }`}
            >
              {isLoginMode ? "เข้าสู่ระบบทันที" : "ยืนยันการสมัครสมาชิก"}
            </button>
          </form>

          {/* ตัวคั่น (Divider) */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-slate-900 text-slate-500 font-medium">
                  หรือ
                </span>
              </div>
            </div>
          </div>

          {/* ปุ่มสลับโหมด */}
          <div className="text-center">
            <p className="text-xs text-slate-400">
              {isLoginMode
                ? "ยังไม่มีบัญชีสมาชิก? "
                : "มีบัญชีสมาชิกอยู่แล้ว? "}
              <button
                type="button"
                onClick={handleToggleMode}
                className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors ml-1 underline underline-offset-4 hover:decoration-cyan-300"
              >
                {isLoginMode ? "สมัครสมาชิกที่นี่" : "เข้าสู่ระบบที่นี่"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}