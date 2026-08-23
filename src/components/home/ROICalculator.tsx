"use client";

import { useState } from "react";
import { Calculator, ArrowRight, DollarSign, Clock } from "lucide-react";

interface ROICalculatorProps {
  onOpenConsultation: () => void;
}

export default function ROICalculator({ onOpenConsultation }: ROICalculatorProps) {
  const [revenue, setRevenue] = useState(2500000); // $2.5M
  const [employees, setEmployees] = useState(15);
  const [currentTaxStrategy, setCurrentTaxStrategy] = useState<"none" | "basic" | "cpa">("basic");

  // Calculations
  const estimatedTaxSavings = Math.round(
    revenue * (currentTaxStrategy === "none" ? 0.085 : currentTaxStrategy === "basic" ? 0.052 : 0.028)
  );

  const hoursSavedPerMonth = Math.round(18 + employees * 1.5);
  const annualOverheadSaved = Math.round(hoursSavedPerMonth * 12 * 75);

  return (
    <section id="roi-calculator" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50/80 border border-slate-200/90 text-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Estimate Your Capital & Tax Efficiency Gains
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Calculate projected annual savings delivered through proactive tax structuring, R&D credits, and automated month-end reconciliation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Annual Revenue */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Annual Business Revenue</span>
                  <span className="font-mono font-bold text-blue-600 text-base">
                    ${(revenue).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="15000000"
                  step="100000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>$200k</span>
                  <span>$5M</span>
                  <span>$15M+</span>
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700">Team / Payroll Size</span>
                  <span className="font-mono font-bold text-blue-600 text-base">
                    {employees} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Solo / 1</span>
                  <span>25</span>
                  <span>100+</span>
                </div>
              </div>

              {/* Current Strategy */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Current Tax Strategy Level
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setCurrentTaxStrategy("none")}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                      currentTaxStrategy === "none"
                        ? "bg-blue-600 border-blue-600 text-white font-bold shadow-sm"
                        : "bg-white border-slate-300 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    No Strategy
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentTaxStrategy("basic")}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                      currentTaxStrategy === "basic"
                        ? "bg-blue-600 border-blue-600 text-white font-bold shadow-sm"
                        : "bg-white border-slate-300 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Annual Filing
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentTaxStrategy("cpa")}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                      currentTaxStrategy === "cpa"
                        ? "bg-blue-600 border-blue-600 text-white font-bold shadow-sm"
                        : "bg-white border-slate-300 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    External CPA
                  </button>
                </div>
              </div>
            </div>

            {/* Results card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-6 text-center shadow-lg">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  Projected Annual Tax Saved
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mt-1 font-mono">
                  ${estimatedTaxSavings.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">via R&D credits, deductions & entity optimization</p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Time Saved</span>
                  <div className="text-lg font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{hoursSavedPerMonth} hrs/mo</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Overhead Avoided</span>
                  <div className="text-lg font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>${annualOverheadSaved.toLocaleString()}/yr</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Unlock These Savings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
