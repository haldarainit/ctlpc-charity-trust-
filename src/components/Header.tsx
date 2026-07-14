/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Heart, Users, FileCheck } from 'lucide-react';
import { TRUST_INFO } from '../data';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      {/* Top micro-banner for trust verification/compliance */}
      <div className="bg-gradient-to-r from-amber-600 via-indigo-900 to-emerald-700 py-2 text-center text-xs font-medium text-white shadow-sm px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-wider uppercase">Official Government Registration Verified: {TRUST_INFO.registrationNo}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold">
            <span className="hidden sm:inline bg-white/10 px-2 py-0.5 rounded text-amber-100">{TRUST_INFO.taxStatus}</span>
            <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Web Status: ACTIVE
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Brand identity incorporating requested symbols */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-amber-50 border border-indigo-100/60 shadow-sm relative overflow-hidden"
          >
            <div className="text-xl flex flex-col items-center justify-center select-none">
              <span className="leading-tight">🏹</span>
              <span className="text-[10px] font-bold text-indigo-900 tracking-tighter mt-0.5">{TRUST_INFO.abbreviation}</span>
            </div>
            {/* Visual background details */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
            <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-600"></div>
          </motion.div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-sm font-bold tracking-tight text-slate-900 sm:text-base md:text-lg">
                CTLPC Charity Trust
              </h1>
              <span className="text-base" title="India • Globe • Bow & Arrow">{TRUST_INFO.symbols}</span>
            </div>
            <p className="hidden md:block text-[11px] font-medium text-slate-500 max-w-lg truncate">
              For Less-Privileged Peoples and Children
            </p>
            <p className="block md:hidden text-[10px] font-medium text-slate-400">
              National Pride • Global Service • Focused Mission
            </p>
          </div>
        </div>

        {/* Dynamic navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button 
            onClick={() => scrollToSection('verification')} 
            className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <FileCheck className="h-4 w-4" />
            Trust Verification
          </button>
          <button 
            onClick={() => scrollToSection('camps')} 
            className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            Our Camps
          </button>
          <button 
            onClick={() => scrollToSection('volunteer')} 
            className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <Users className="h-4 w-4" />
            Volunteer Roster
          </button>
        </nav>

        {/* Header Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => scrollToSection('volunteer')}
            className="hidden sm:inline-flex items-center justify-center text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
          >
            Join Volunteer
          </button>
          <button 
            onClick={() => scrollToSection('donate')}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md shadow-amber-600/10 transition-all transform active:scale-95 cursor-pointer"
          >
            <Heart className="h-3.5 w-3.5 fill-white" />
            Donate Now
          </button>
        </div>
      </div>
    </header>
  );
}
