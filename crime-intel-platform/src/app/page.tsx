import { LoginForm } from "@/components/auth/login-form"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-700/20 rounded-full blur-[128px] pointer-events-none z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-info/10 rounded-full blur-[128px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute inset-0 bg-slate-950/80 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full animate-fade-in">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl animate-slide-up">
          <Badge variant="outline" className="text-info border-info/50 bg-info/10 px-4 py-1 tracking-widest text-xs font-mono uppercase">
            Crime Intelligence Platform
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-500 pb-2">
            Global Database
          </h1>
          <p className="text-slate-400 font-mono text-sm max-w-md text-balance leading-relaxed">
            Centralized intelligence. Advanced analytics. Real-time threat detection across global jurisdictions.
          </p>
        </div>

        {/* Authentication Card */}
        <div className="w-full max-w-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <LoginForm />
        </div>
        
        {/* Footer Meta */}
        <div className="absolute bottom-8 text-xs font-mono text-slate-500 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p>SYSTEM v4.0.1 // ENCRYPTED CONNECTION</p>
        </div>
      </div>
    </main>
  )
}
