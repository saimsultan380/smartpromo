export default function TrustBar() {
  const partners = [
    { name: "QuickBooks Elite", badge: "ProAdvisor Certified" },
    { name: "Xero Platinum", badge: "Direct Partner" },
    { name: "AICPA Member", badge: "Ethics Verified" },
    { name: "Oracle NetSuite", badge: "ERP Specialist" },
    { name: "Gusto Silver", badge: "Payroll Partner" },
    { name: "Ramp Certified", badge: "Spend Control" },
  ];

  return (
    <section className="py-8 bg-slate-50 text-slate-900 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left shrink-0">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Integrations & Standards
            </span>
            <p className="text-sm font-bold text-slate-800">
              Certified across leading financial engines
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/50 transition-colors text-center"
              >
                <div className="font-bold text-xs text-slate-900">{partner.name}</div>
                <div className="text-[10px] text-slate-500 font-medium">{partner.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
