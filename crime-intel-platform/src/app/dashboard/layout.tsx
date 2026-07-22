import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-brand-500/30">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        {/* Subtle background glow for the main content area */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 z-0">
          <div className="mx-auto max-w-7xl animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
