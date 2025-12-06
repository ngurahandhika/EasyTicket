"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password tidak sama.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password harus terdiri dari minimal 8 karakter.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (formData.name && formData.email && formData.password) {
        setLoading(false);
        alert("Akun berhasil dibuat!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError("Gagal membuat akun");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Nama
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nama Anda"
          value={formData.name}
          onChange={handleChange}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="anda@example.com"
          value={formData.email}
          onChange={handleChange}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary"
          required
        />
        <p className="text-xs text-muted-foreground">Minimal 8 karakter</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-foreground">
          Konfirmasi Password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary"
          required
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button
        type="submit"
        disabled={loading}
        className="w-full text-primary-foreground bg-primary hover:bg-primary/70"
      >
        {loading ? "Membuat akun..." : "Buat Akun"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-card px-2 text-muted-foreground">
            Atau daftar dengan
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <Button
          type="button"
          variant="outline"
          className="border-border bg-background font-bold text-primary transition-colors hover:text-accent"
        >
          Google
        </Button>
      </div>
    </form>
  );
}
