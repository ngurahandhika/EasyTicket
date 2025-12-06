"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        setLoading(false);
        alert("Login berhasil!");
        setEmail("");
        setPassword("");
      } else {
        setError("Mohon isi semua kolom");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="anda@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-foreground">
            Password
          </Label>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Lupa?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {loading ? "Memproses..." : "Masuk"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-card px-2 text-muted-foreground">
            Atau masuk dengan
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
