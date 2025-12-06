import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EasyTicket
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
              Solusi jualan tiket praktis, profesional, dan terpercaya. Cocok
              untuk konser, seminar, festival, dan acara komunitas.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-4 text-white">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-4 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-0.5">WhatsApp</p>
                  <a
                    href="https://wa.me/6281238169667"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +62 812-3816-9667
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-0.5">Email</p>
                  <a
                    href="mailto:support@easyticket.com"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    support@easyticket.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-0.5">Lokasi</p>
                  <p className="text-sm text-gray-300">
                    Denpasar, Bali, Indonesia
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              &copy; {currentYear} EasyTicket. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
