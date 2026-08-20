"use client";

 import { useState, useEffect } from "react";

const [token, setToken] = useState();  //กำหนด state สำหรับเก็บ token

้useEffect

  useEffect(() => {
    // ดึง token จาก localStorage
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

 handleLogout

  const handleLogout = () => {
    localStorage.removeItem("token"); // ลบ token
    setToken(null); // อัพเดท state
    window.location.href = "/";
  };


{token ? (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 transition"
            >
              Logout
            </button>
          ) : (
            <>
                                    <Link
              href="/register"
              className="hover:text-yellow-300 transition"
            >
              สมัครสมาชิก
            </Link>
              <Link
                href="/login"
                className="hover:text-yellow-300 transition"
              >
                Login
              </Link>
            </>
          )}