"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  judul: string;
  organizer: string;
  tanggal: string;
  jam: string;
  lokasi: string;
  image: string;
  harga: number;
  hargaOriginal: number;
  tersedia: number;
}

export function TicketCard({ event }: { event: Event }) {
  const router = useRouter();

  const handleDetail = (evt: Event) => {
    router.push(`/events/${evt.id}`);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm">
      <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
        <Image
          src={event.image}
          alt={event.judul}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <p className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-1">
            {event.organizer}
          </p>
          <h3 className="text-lg font-semibold text-card-foreground line-clamp-2 text-pretty">
            {event.judul}
          </h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-">
            <Calendar size={16} className="flex-shrink-0" />
            <span className="truncate">
              {event.tanggal} pukul {event.jam}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} className="flex-shrink-0" />
            <span className="truncate">{event.lokasi}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Users size={14} className="flex-shrink-0 text-gray-700" />
          <span className="text-gray-700">{event.tersedia} tersedia</span>
        </div>

        <Button
          className="w-full mt-4 bg-primary hover:bg-primary/70 text-primary-foreground font-bold"
          size="lg"
          onClick={() => handleDetail(event)}
        >
          Detail
        </Button>
      </div>
    </div>
  );
}
