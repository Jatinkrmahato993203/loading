"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShieldCheck, LockKey } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Add brief animation or loading state here before pushing
    router.push('/dashboard')
  }

  return (
    <Card className="w-full max-w-md glass-panel glass-panel-hover border-slate-700/50 bg-slate-800/40 relative overflow-hidden group">
      {/* Subtle animated gradient background for the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      
      <CardHeader className="space-y-1 pb-8">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-brand-900/50 rounded-full border border-brand-700/50 shadow-inner">
            <ShieldCheck size={32} className="text-brand-500" weight="duotone" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center font-sans tracking-tight">Secure Authentication</CardTitle>
        <CardDescription className="text-center text-slate-400 font-mono text-xs">
          AUTHORIZED PERSONNEL ONLY
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Badge Number</label>
            <div className="relative">
              <ShieldCheck size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <Input 
                placeholder="Enter your badge number" 
                className="pl-10 bg-slate-900/60 border-slate-700 text-slate-200 focus-visible:ring-brand-500 h-11" 
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Passcode</label>
            <div className="relative">
              <LockKey size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 bg-slate-900/60 border-slate-700 text-slate-200 focus-visible:ring-brand-500 h-11" 
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-11 bg-brand-700 hover:bg-brand-500 text-white font-medium tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(30,64,175,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] mt-4"
          >
            INITIALIZE SESSION
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
