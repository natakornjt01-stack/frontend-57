"use client";


import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";


const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [deletingId, setDeletingId] = useState(null); //กำหนดค่า state

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setUsers(data);
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

  const handleEdit = (id) => {
    console.log("Edit user:", id);
  };

  const handleDelete = async (id) => {
  // หาข้อมูลคนนั้นจาก state เพื่อเอาชื่อไปแสดงในกล่องยืนยัน
  const user = users.find((u) => u.id === id);
  const result = await Swal.fire({
    icon: "warning",
    title: "ยืนยันการลบข้อมูล",
    html: user
      ? `ต้องการลบ <b>${user.firstname} ${user.lastname}</b> ใช่หรือไม่?<br>เมื่อลบแล้วจะไม่สามารถกู้คืนได้`
      : "เมื่อลบแล้วจะไม่สามารถกู้คืนได้",
    showCancelButton: true,
    confirmButtonText: "ลบเลย",
    cancelButtonText: "ยกเลิก",
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    reverseButtons: true,
  });

  const handleDelete = async (id) => {
  // หาข้อมูลคนนั้นจาก state เพื่อเอาชื่อไปแสดงในกล่องยืนยัน
  const user = users.find((u) => u.id === id);
  const result = await Swal.fire({
    icon: "warning",
    title: "ยืนยันการลบข้อมูล",
    html: user
      ? `ต้องการลบ <b>${user.firstname} ${user.lastname}</b> ใช่หรือไม่?<br>เมื่อลบแล้วจะไม่สามารถกู้คืนได้`
      : "เมื่อลบแล้วจะไม่สามารถกู้คืนได้",
    showCancelButton: true,
    confirmButtonText: "ลบเลย",
    cancelButtonText: "ยกเลิก",
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    reverseButtons: true,
  });

  if (!result.isConfirmed) return;

  try {
    setDeletingId(id);

    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || `Status ${response.status}`);
    }

    setUsers((prev) => prev.filter((u) => u.id !== id));

    await Swal.fire({
      icon: "success",
      title: "ลบข้อมูลเรียบร้อยแล้ว",
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "ลบข้อมูลไม่สำเร็จ",
      text: error.message,
    });
  } finally {
    setDeletingId(null);
  }
};

  if (!result.isConfirmed) return;

  try {
    setDeletingId(id);

    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || `Status ${response.status}`);
    }

    setUsers((prev) => prev.filter((u) => u.id !== id));

    await Swal.fire({
      icon: "success",
      title: "ลบข้อมูลเรียบร้อยแล้ว",
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "ลบข้อมูลไม่สำเร็จ",
      text: error.message,
    });
  } finally {
    setDeletingId(null);
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

  if (users.length === 0)
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 pt-24 md:pt-32 pb-12">
        <div className="rounded-2xl bg-slate-900/80 p-6 border border-slate-700 text-center shadow-lg">
          <p className="text-slate-400">ยังไม่มีข้อมูลสมาชิกในระบบ</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 px-4 pb-12 pt-24 md:px-8 md:pt-32 text-white">
      {/* Keyframe แสงไฟ LED */}
      <style jsx global>{`
        @keyframes led-flow-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes led-flow-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-led-h {
          animation: led-flow-horizontal var(--led-duration, 3s) linear infinite;
        }
        .animate-led-v {
          animation: led-flow-vertical var(--led-duration, 3s) linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* หัวข้อ Dashboard */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            รายชื่อสมาชิก
          </h1>
          <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            ทั้งหมด {users.length} คน
          </span>
        </div>

        {/* Desktop Table (แก้ไขการจัดคอลัมน์และตารางไฟ LED ให้ตรงเป๊ะ) */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_0_30px_rgba(0,0,0,0.9)]">
            {/* ไฟ LED วิ่งรอบขอบนอก */}
            <div className="absolute -inset-[200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#a855f7,#ec4899,#06b6d4)] opacity-80" />

            <div className="relative overflow-hidden rounded-[22px] bg-slate-900/95 backdrop-blur-xl">
              {/* ใช้ w-full เพื่อยืดเต็ม และล็อกสัดส่วนคอลัมน์ */}
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-cyan-500/30 bg-slate-950/90 text-cyan-400 text-sm font-extrabold uppercase tracking-wider">
                    <th className="w-[10%] p-4 text-center border-r border-slate-800">ลำดับ</th>
                    <th className="w-[20%] p-4 text-left border-r border-slate-800">ชื่อ</th>
                    <th className="w-[20%] p-4 text-left border-r border-slate-800">นามสกุล</th>
                    <th className="w-[30%] p-4 text-left border-r border-slate-800">USERNAME</th>
                    <th className="w-[20%] p-4 text-center">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-sm font-medium">
                  {users.map((user, index) => {
                    const duration = `${(index % 3) * 1.2 + 2.5}s`;
                    const delay = `${(index % 5) * 0.4}s`;

                    return (
                      <tr
                        key={user.id || index}
                        className="group transition-colors duration-300 hover:bg-slate-800/50 relative"
                      >
                        {/* 1. ลำดับ */}
                        <td className="p-4 text-center text-slate-400 border-r border-slate-800 relative">
                          {/* เส้นไฟ LED แนวนอนวิ่งบนขอบแถว */}
                          <div className="absolute top-0 inset-x-0 h-[1px] overflow-hidden pointer-events-none">
                            <div
                              className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-led-h opacity-40 group-hover:opacity-100 transition-opacity"
                              style={{ "--led-duration": duration, animationDelay: delay }}
                            />
                          </div>
                          {/* เส้นไฟ LED แนวตั้งฝั่งขวา */}
                          <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden pointer-events-none">
                            <div
                              className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-led-v opacity-30 group-hover:opacity-80"
                              style={{ "--led-duration": `${parseFloat(duration) + 1}s`, animationDelay: delay }}
                            />
                          </div>
                          {index + 1}
                        </td>

                        {/* 2. ชื่อ */}
                        <td className="p-4 text-left text-slate-200 border-r border-slate-800 relative truncate">
                          <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden pointer-events-none">
                            <div
                              className="w-full h-full bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent animate-led-v opacity-25 group-hover:opacity-80"
                              style={{ "--led-duration": `${parseFloat(duration) + 0.5}s`, animationDelay: `${index * 0.2}s` }}
                            />
                          </div>
                          {user.firstname}
                        </td>

                        {/* 3. นามสกุล */}
                        <td className="p-4 text-left text-slate-200 border-r border-slate-800 relative truncate">
                          <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden pointer-events-none">
                            <div
                              className="w-full h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-led-v opacity-25 group-hover:opacity-80"
                              style={{ "--led-duration": `${parseFloat(duration) + 0.8}s`, animationDelay: `${index * 0.3}s` }}
                            />
                          </div>
                          {user.lastname}
                        </td>

                        {/* 4. Username */}
                        <td className="p-4 text-left text-cyan-300 font-mono border-r border-slate-800 relative truncate">
                          <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden pointer-events-none">
                            <div
                              className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-led-v opacity-30 group-hover:opacity-80"
                              style={{ "--led-duration": duration, animationDelay: delay }}
                            />
                          </div>
                          {user.username}
                        </td>

                        {/* 5. จัดการ */}
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-3">
                            <div className="relative overflow-hidden rounded-xl p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95">
                              <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#38bdf8,#06b6d4,#ffffff)] opacity-90" />
                              <button
                                onClick={() => router.push(`/users/edit/${user.id}`)}
                                className="relative rounded-[10px] bg-slate-950 px-4 py-2 text-xs font-black text-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.8)] hover:bg-emerald-500 hover:text-slate-950"
                              >
                                แก้ไข
                              </button>
                            </div>

                            <div className="relative overflow-hidden rounded-xl p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95">
                              <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#ef4444,#dc2626,#ffffff)] opacity-90" />
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="relative rounded-[10px] bg-slate-950 px-4 py-2 text-xs font-black text-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_25px_rgba(239,68,68,0.9)] hover:bg-red-600 hover:text-white"
                              >
                                ลบ
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {users.map((user, index) => (
            <div
              key={user.id || index}
              className="relative overflow-hidden rounded-2xl p-[2px] transition-transform duration-300"
            >
              <div className="absolute -inset-[200%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,#06b6d4,#a855f7,#06b6d4)] opacity-70" />

              <div className="relative rounded-[14px] bg-slate-900/90 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-cyan-400">
                    #{index + 1}
                  </span>
                  <span className="font-mono text-sm text-cyan-300">
                    @{user.username}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-base font-bold text-slate-100">
                    {user.firstname} {user.lastname}
                  </p>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <div className="relative overflow-hidden rounded-xl p-[2px]">
                    <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#38bdf8,#06b6d4,#ffffff)] opacity-90" />
                    <button
                      onClick={() => router.push(`/users/edit/${user.id}`)}
                      className="relative rounded-[10px] bg-slate-950 px-4 py-2 text-xs font-black text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                    >
                      แก้ไข
                    </button>
                  </div>

                  <div className="relative overflow-hidden rounded-xl p-[2px]">
                    <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ffffff,#ef4444,#dc2626,#ffffff)] opacity-90" />
                    <button
                  onClick={() => handleDelete(user.id)}
                  disabled={deletingId === user.id}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  {deletingId === user.id ? "กำลังลบ..." : "ลบ"}
                </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}