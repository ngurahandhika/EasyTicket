"use client";

import Link from "next/link";
import { useState } from "react";
import LoginForm from "@/components/layouts/login-form";
import RegisterForm from "@/components/layouts/register-form";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
          <div className="mb-6 sm:mb-8 text-center">
            <h1 className="font-sans text-2xl sm:text-3xl font-bold text-foreground">
              {isLogin ? "Selamat datang!" : "Buat akun!"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {isLogin
                ? "Masuk ke akun Anda untuk melanjutkan"
                : "Buat akun baru untuk memulai"}
            </p>
          </div>

          <div className="mb-6">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-center text-sm text-muted-foreground">
              {isLogin ? "Tidak memiliki akun?" : "Sudah punya akun?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-primary transition-colors hover:text-accent"
              >
                {isLogin ? "Buat akun" : "Masuk"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
