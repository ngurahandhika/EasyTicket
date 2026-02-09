"use client";

import { Headphones, Shield, Ticket, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TicketCard } from "@/components/layouts/ticket-cards";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/lib/event-data";

export default function Home() {
  const router = useRouter();
  const visibleEvents = eventsData.slice(0, 4);

  const features = [
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description:
        "Transaksi dijamin aman dengan sistem keamanan berlapis dan verifikasi tiket otomatis",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      description:
        "Beli tiket dalam hitungan detik, tanpa ribet, langsung dapat konfirmasi via email",
    },
    {
      icon: Ticket,
      title: "E-Ticket Instan",
      description:
        "Dapatkan tiket digital langsung setelah pembayaran berhasil, bisa disimpan di HP",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description:
        "Tim customer service siap membantu kapan saja melalui WhatsApp dan email",
    },
  ];

  return (
    <main id="main-content" className="px-4 sm:px-6 lg:px-16 xl:px-32">
      <section id="hero" className="relative overflow-hidden w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Temukan event{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">terbaik</span>
                  <svg
                    className="absolute bottom-0 sm:bottom-1 left-0 w-full h-2 sm:h-3"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6"
                      fill="none"
                      stroke="#5d6ff8"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                tanpa ribet
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
                Beli tiket konser, festival, dan acara seru lainnya dengan
                mudah. Tanpa ribet, tanpa antre, dengan aman.
              </p>
              <div className="flex gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-bold bg-primary hover:bg-primary/70"
                  onClick={() => router.push("/events")}
                >
                  Lihat Event
                </Button>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                <div className="relative rounded-lg shadow-2xl">
                  <Image
                    src="/konser.png"
                    alt="Hero Image"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="mt-32 pb-16 px-4 sm:px-6 lg:px-16 xl:px-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-3">Events</h1>
              <p className="text-lg text-muted-foreground">
                Jelajahi berbagai event menarik yang bisa Kamu hadiri dan beli
                <br />
                tiketnya sekarang juga!
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="px-4 py-4 text-sm sm:text-base font-bold text-primary transition-colors hover:text-accent flex-shrink-0"
              onClick={() => router.push("/events")}
            >
              Lihat Semua
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {visibleEvents.map((event) => (
              <TicketCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl font-bold mb-3 sm:mb-4">
              Fitur Unggulan Kami
            </h1>
            <p className="text-lg text-muted-foreground">
              Nikmati kemudahan jual beli tiket dengan fitur-fitur canggih dari
              <br />
              EasyTicket yang dirancang untuk kenyamanan Kamu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-6 sm:p-8 border border-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                1,000+ Event telah terjual melalui platform kami
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
