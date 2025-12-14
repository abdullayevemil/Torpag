"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Map,
  Activity,
  BarChart3,
  Boxes,
  Users,
  Archive,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/logo.jpeg";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Map View", href: "/map", icon: Map },
  { name: "Live Monitoring", href: "/monitoring", icon: Activity },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Inventory Management", href: "/inventory", icon: Boxes },
  { name: "Collaboration", href: "/collaboration", icon: Users },
  { name: "Archive", href: "/archive", icon: Archive },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  };

  return (
    <aside className="flex w-64 flex-col border-r border-black/10 bg-white">
      <div className="flex h-16 items-center gap-5 px-6">
        <Image src={Logo} alt="Torpag Logo" width={44} height={44} priority className="rounded-lg" />
        <span className="text-2xl font-semibold tracking-tight text-black">
          Torpag
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-4 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link onClick={handleClick} key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-xl p-4 text-sm font-medium transition",
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-black/70 hover:bg-green-500/10 hover:text-black hover:font-bold"
                )}
              >
                <item.icon className="h-4 w-4" />

                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 text-xs text-black/40">
        © {new Date().getFullYear()} Torpag
      </div>
    </aside>
  );
}
