"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { PaketTicket } from "@/components/layouts/paket-ticket";
import type { Event } from "@/lib/event-data";
import { getEventById } from "@/lib/event-data";

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = parseInt(params.id as string, 10);
    const foundEvent = getEventById(id);

    if (!foundEvent) {
      router.push("/events");
      return;
    }

    setEvent(foundEvent);
    setLoading(false);
  }, [params.id, router]);

  if (loading || !event) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-2xl font-bold">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              {event.judul}
            </h1>

            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-lg">
              <Image
                src={event.image}
                alt={event.judul}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Tanggal & Waktu
                  </p>
                  <p className="font-semibold">{event.tanggal}</p>
                  <p className="text-sm text-muted-foreground">{event.jam}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-semibold">{event.lokasi}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Organizer</p>
                  <p className="font-semibold">{event.organizer}</p>
                </div>
              </div>
            </div>

            <section className="mb-6 sm:mb-8 p-4 sm:p-6 bg-card rounded-xl border border-border">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Deskripsi</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <PaketTicket packages={event.paket} eventTitle={event.judul} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
