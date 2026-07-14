/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Landmark } from 'lucide-react';
import { TRUST_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t-4 border-amber-500">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-12 mb-8 border-b border-slate-800 pb-8">
          
          {/* Column 1: Core Profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">{TRUST_INFO.symbols}</span>
              <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
                {TRUST_INFO.name}
              </h4>
            </div>
            
            <p className="text-slate-500 leading-relaxed text-[11px] max-w-md">
              Established with the focused mission of uplifting less-privileged peoples, remote tribals, and impoverished children across India. Actively conducting medical diagnostics, spectacle distribution, and educational support programs.
            </p>

            <div className="space-y-1 bg-slate-800/40 p-3 rounded-lg border border-slate-800/60 max-w-md">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] tracking-wider uppercase">
                <ShieldCheck className="h-3.5 w-3.5" /> Direct Audit Verified
              </div>
              <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                Registered under the Indian Trust Act of 1882. Certifications for Section 12A and 80G are active and compliant. 
              </p>
            </div>
          </div>

          {/* Column 2: Verifiable Trust Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Verifiable Regulatory Data
            </h4>
            
            <div className="space-y-2 text-[11px] text-slate-500">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Trust Registration ID:</span>
                <span className="font-mono font-bold text-slate-300">{TRUST_INFO.registrationNo}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Income Tax Exemption:</span>
                <span className="font-semibold text-emerald-400">Section 12A & 80G Compliant</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Pending Grant Code:</span>
                <span className="font-mono font-semibold text-amber-400">{TRUST_INFO.pendingFundRef}</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span>Fiscal Auditor:</span>
                <span className="font-semibold text-slate-300">R. Baskaran & Associates, CA</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contacts and Address */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Central Office Contact
            </h4>
            
            <div className="space-y-3 text-[11px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-500 leading-tight">
                  {TRUST_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`tel:${TRUST_INFO.phone}`} className="hover:text-white transition-colors text-slate-300 font-mono font-bold">
                  {TRUST_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`mailto:${TRUST_INFO.email}`} className="hover:text-white transition-colors text-slate-300 font-mono">
                  {TRUST_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <p>© {currentYear} {TRUST_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-slate-600">
            <Landmark className="h-3.5 w-3.5 text-slate-600" />
            <span>Regulated Charitable NGO registered under Central Trust Act, Govt of India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
