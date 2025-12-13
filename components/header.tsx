"use client";

import { Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  return (
    <header className="group flex h-16 w-full items-center justify-between border-b border-black/10 bg-white px-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
        <Input placeholder="Search…" className="pl-9" />
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-xl font-semibold tracking-tight text-black">
            Welcome, Emil
          </span>
          <span className="text-xl">👋</span>
        </div>

        <Select defaultValue="en">
          <SelectTrigger className="h-9 w-[72px] text-black/70 hover:bg-green-500/10 hover:text-black hover:font-bold group-hover:opacity-100">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="az">AZ</SelectItem>
            <SelectItem value="ru">RU</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="icon"
          className="transition-all duration-200 text-black/70 hover:bg-green-500/10 hover:text-black hover:font-bold group-hover:opacity-100"
        >
          <Settings className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-black/10 transition-all duration-200 text-black/70 hover:bg-green-500/10 hover:text-black hover:font-bold group-hover:opacity-100"
        >
          <User className="h-8 w-8" />
        </Button>
      </div>
    </header>
  );
}
