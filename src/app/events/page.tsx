"use client";

import { TicketCard } from "@/components/layouts/ticket-cards";
import { eventsData } from "@/lib/event-data";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Semua Event
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Temukan event yang sesuai dengan minat Kamu!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {eventsData.map((event) => (
            <TicketCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}
