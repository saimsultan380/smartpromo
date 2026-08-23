import { Phone, Mail, Clock, Shield, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Line: <strong className="text-slate-100">{SITE_CONFIG.phone}</strong></span>
          </a>
          <span className="text-slate-700">|</span>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>{SITE_CONFIG.email}</span>
          </a>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{SITE_CONFIG.hours}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1 text-emerald-400">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-medium">AICPA & IRS Registered</span>
          </div>
          <span className="text-slate-700">|</span>
          <a
            href="#portal"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <Lock className="w-3 h-3 text-blue-400" />
            <span>Client Vault Portal</span>
          </a>
        </div>
      </div>
    </div>
  );
}
