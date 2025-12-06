"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Paket {
  id: number;
  nama: string;
  harga: number;
  tersediaPaket: string[];
  tersedia: number;
}

interface PaketTicketProps {
  packages: Paket[];
  eventTitle: string;
}

export function PaketTicket({ packages, eventTitle }: PaketTicketProps) {
  const [selectedPackageId, setSelectedPackageId] = useState(packages[0].id);
  const [jumlah, setJumlah] = useState(1);

  const selectedPackage = packages.find((p) => p.id === selectedPackageId)!;
  const total = selectedPackage.harga * jumlah;

  const updateJumlah = (delta: number) => {
    const jumblahBaru = jumlah + delta;
    if (jumblahBaru >= 1 && jumblahBaru <= 10) {
      setJumlah(jumblahBaru);
    }
  };

  const formatHarga = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="p-6 bg-card rounded-2xl border border-border shadow-lg">
      <h3 className="text-lg font-bold mb-4">Jenis Paket</h3>

      <div className="space-y-3 mb-6">
        {packages.map((pkg) => (
          <label
            key={pkg.id}
            className={`flex items-start gap-3 p-4 rounded-lg border-1 cursor-pointer transition-colors ${
              selectedPackageId === pkg.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-foreground"
            }`}
          >
            <input
              type="radio"
              name="package"
              value={pkg.id}
              checked={selectedPackageId === pkg.id}
              onChange={(e) => setSelectedPackageId(Number(e.target.value))}
              className="mt-1"
            />
            <div className="flex-1">
              <p className="font-semibold">{pkg.nama}</p>
              <ul className="text-xs text-foreground mt-2 space-y-1">
                {pkg.tersediaPaket.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-bold text-primary mt-2">
                {formatHarga(pkg.harga)}
              </p>
              <p className="text-xs text-foreground">{pkg.tersedia} tersisa</p>
            </div>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-md font-bold mb-2">Jumlah</p>
        <div className="flex items-center justify-center gap-4 p-3 bg-gray-200 rounded-lg">
          <button
            onClick={() => updateJumlah(-1)}
            className="p-1 hover:bg-background rounded transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
          <span className="text-lg font-semibold w-6 text-center">
            {jumlah}
          </span>
          <button
            onClick={() => updateJumlah(1)}
            className="p-1 hover:bg-background rounded transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-200 rounded-lg">
        <p className="text-md font-semibold text-foreground mb-2">Total</p>
        <p className="text-2xl font-bold text-primary">{formatHarga(total)}</p>
      </div>

      <button className="w-full py-3 text-primary-foreground font-semibold rounded-lg bg-primary hover:bg-primary/70 transition-colors">
        BELI
      </button>
    </div>
  );
}
