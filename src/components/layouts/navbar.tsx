"use client";

import React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  type NavSubItem = { name: string; href: string };
  type NavItem = { name: string; href?: string; dropdown?: NavSubItem[] };

  const navItems: NavItem[] = [
    { name: "Beranda", href: "/" },
    { name: "Event", href: "/events" },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      <nav className="bg-background border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-foreground">
                EasyTicket
              </a>
            </div>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.dropdown ? (
                        <>
                          <NavigationMenuTrigger className="bg-background font-bold">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="w-48">
                              {item.dropdown.map((subItem) => (
                                <li key={subItem.name}>
                                  <NavigationMenuLink
                                    href={subItem.href}
                                    className="block select-none rounded-md p-4 leading-none no-underline outline-none transition-colors text-foreground"
                                  >
                                    {subItem.name}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          href={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md text-foreground px-4 py-2 text-sm font-bold transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth">
                <Button>Masuk</Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 z-40 bg-background flex flex-col"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between text-foreground px-4 py-4 text-base font-bold"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        openDropdown === item.name
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-1 pb-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-foreground/80 hover:bg-gray-50 px-4 py-2 rounded-md text-base"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-foreground hover:bg-gray-50 px-4 py-4 text-base font-bold"
                  >
                    {item.name}
                  </a>
                )}
                {index < navItems.length - 1 && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 px-4 py-4 space-y-2 bg-background">
            <Link href="/auth">
              <Button className="w-full">Masuk</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
