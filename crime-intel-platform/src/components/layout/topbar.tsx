"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MagnifyingGlass, 
  Bell, 
  UserCircle,
  Gear
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
      
      {/* Search area */}
      <div className="flex-1 flex items-center max-w-xl">
        <div className="relative w-full">
          <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <Input 
            placeholder="Global search (names, plates, case #)..." 
            className="w-full pl-10 bg-slate-800/50 border-slate-700 focus-visible:ring-brand-500 rounded-full h-9 text-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-full hover:bg-slate-800">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-critical rounded-full animate-pulse-slow"></span>
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-full hover:bg-slate-800">
          <Gear size={20} />
        </button>
        <div className="h-6 w-px bg-slate-700 mx-1"></div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-800 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-700">
          <UserCircle size={28} className="text-brand-500" weight="duotone" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-200 leading-none">Off. Reynolds</span>
            <span className="text-[10px] text-slate-500 font-mono">ID: 48291</span>
          </div>
        </div>
      </div>
    </header>
  )
}
