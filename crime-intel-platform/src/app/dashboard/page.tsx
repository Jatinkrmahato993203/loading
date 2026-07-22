"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldWarning, Pulse, Database, Fingerprint, MapPin, TrendUp, FileText } from "@phosphor-icons/react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            Command Center
            <Badge className="bg-brand-500/20 text-brand-400 border border-brand-500/50">LIVE</Badge>
          </h1>
          <p className="text-sm text-slate-400 font-mono mt-1">System operational. 3 active critical incidents.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700 shadow-inner">
          <Pulse size={16} className="text-success animate-pulse" />
          <span className="text-slate-300">SERVER: US-EAST-1</span>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        
        <Card className="glass-panel glass-panel-hover border-l-4 border-l-critical group relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShieldWarning size={64} />
          </div>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-400 mb-1">Active Alerts</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-white">3</span>
              <span className="text-sm text-critical flex items-center mb-1"><TrendUp size={14} className="mr-1" /> +2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-panel glass-panel-hover border-l-4 border-l-warning group relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MapPin size={64} />
          </div>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-400 mb-1">Open Cases</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-white">124</span>
              <span className="text-sm text-slate-500 mb-1">last 7 days</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-panel glass-panel-hover border-l-4 border-l-brand-500 group relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Fingerprint size={64} />
          </div>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-400 mb-1">Matches Found</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-white">18</span>
              <span className="text-sm text-brand-400 flex items-center mb-1"><TrendUp size={14} className="mr-1" /> +12%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-panel glass-panel-hover border-l-4 border-l-success group relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Database size={64} />
          </div>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-400 mb-1">Database Queries</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-white">4.2k</span>
              <span className="text-sm text-slate-500 mb-1">today</span>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-panel border-slate-700/50">
            <CardHeader className="border-b border-slate-800/50 pb-4">
              <CardTitle className="text-lg">Recent Intelligence Reports</CardTitle>
              <CardDescription>Latest files added to the global network</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-800/50">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors cursor-pointer flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-brand-500/50 group-hover:bg-brand-900/20 transition-colors">
                        <FileText size={20} className="text-slate-400 group-hover:text-brand-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Operation Nightfall - SITREP {i}</p>
                        <p className="text-xs text-slate-500 font-mono">Case #892-11{i} • 2 hours ago</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-slate-400 border-slate-700">View</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (1/3 width) */}
        <div className="space-y-6">
          <Card className="glass-panel border-slate-700/50 h-full">
            <CardHeader className="border-b border-slate-800/50 pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">System Status</CardTitle>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">NCIC Connection</span>
                  <span className="text-success font-medium">Stable</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-success w-full rounded-full"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Facial Rec Engine</span>
                  <span className="text-brand-400 font-medium">Processing</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 w-[65%] rounded-full animate-pulse-slow"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Local DB Sync</span>
                  <span className="text-warning font-medium">Syncing (92%)</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-warning w-[92%] rounded-full"></div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>

    </div>
  )
}
