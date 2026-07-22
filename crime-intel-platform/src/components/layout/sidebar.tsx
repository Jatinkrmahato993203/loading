"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  SquaresFour, 
  MapTrifold, 
  FileText, 
  WarningOctagon, 
  Users
} from "@phosphor-icons/react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: SquaresFour },
  { name: "Investigations", href: "/dashboard/investigations", icon: FileText },
  { name: "Active Alerts", href: "/dashboard/alerts", icon: WarningOctagon },
  { name: "Suspect Database", href: "/dashboard/suspects", icon: Users },
  { name: "Tactical Map", href: "/dashboard/map", icon: MapTrifold },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 flex flex-col h-full relative z-50 transition-all duration-300">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="p-1.5 bg-brand-900/50 rounded-md border border-brand-700/50 group-hover:bg-brand-800/50 transition-colors">
            <ShieldCheck size={24} className="text-brand-500" weight="duotone" />
          </div>
          <span className="font-bold text-sm tracking-widest uppercase font-mono text-slate-200 group-hover:text-white transition-colors">
            C.I.P. CORE
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm group relative
                  ${isActive 
                    ? "bg-brand-900/40 text-brand-400 border border-brand-800/50" 
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent"}
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-brand-500 rounded-r-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
                <Icon size={20} weight={isActive ? "duotone" : "regular"} className={isActive ? "text-brand-500" : "text-slate-500 group-hover:text-slate-300"} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      
      {/* Network Status */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 rounded-md border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
          <span className="text-xs font-mono text-slate-400">SECURE NET ONLINE</span>
        </div>
      </div>
    </aside>
  )
}
