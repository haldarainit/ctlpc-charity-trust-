/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, FileCheck, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { TRUST_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-16 pb-20 text-white border-b border-slate-800">
      {/* Decorative ambient blobs representing trust colors (saffron, indigo, green) */}
      <div className="absolute top-0 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-emerald-600/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Core Message & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* National & Global Identity Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300"
            >
              <span className="text-sm select-none">{TRUST_INFO.symbols}</span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-slate-300">
                {TRUST_INFO.symbolsLabel}
              </span>
            </motion.div>

            {/* Powerful Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight"
            >
              Providing Medical, Vision & Educational Aid to Underserved Communities
            </motion.h2>

            {/* Explanatory subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              The <strong>{TRUST_INFO.name}</strong> has successfully completed multiple diagnostic eye camps, medical consultations, and children kit distributions. This official web portal is live to verify compliance and secure pending philanthropic grants for on-ground upgrades.
            </motion.p>

            {/* Dynamic CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection('donate')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold px-6 py-3 rounded-xl text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <Heart className="h-4 w-4 fill-white" />
                Access Secured Donation Gateway
              </button>

              <button
                onClick={() => scrollToSection('verification')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold px-5 py-3 rounded-xl text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
              >
                <FileCheck className="h-4 w-4 text-emerald-400" />
                Verify Trust Grant Registry
              </button>
            </motion.div>
          </div>

          {/* Right Column: Key Stats Card & Live Audit Indicator */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              {/* Highlight background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  <span className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-widest">LIVE PORTAL MONITOR</span>
                </div>
                <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  ONLINE
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider text-slate-400">
                  On-Ground Verified Impact to Date:
                </h3>

                {/* Stat 1 */}
                <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Rural Eye Diagnostics</span>
                    <span className="text-sm font-bold text-amber-300 mt-0.5 block">245+ Free Glasses Distributed</span>
                  </div>
                  <span className="text-xl">👁️</span>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Primary Health Camps</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">380+ Senior Citizens Screened</span>
                  </div>
                  <span className="text-xl">🩺</span>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Education Aids Distribution</span>
                    <span className="text-sm font-bold text-indigo-300 mt-0.5 block">150+ Children Provided Kits</span>
                  </div>
                  <span className="text-xl">🎒</span>
                </div>
              </div>

              {/* Verified Trust Seal Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-center">
                <p className="text-[10px] text-slate-400 font-medium">
                  Compliance Reference: <strong className="font-mono text-slate-300">{TRUST_INFO.registrationNo}</strong>
                </p>
                <button
                  onClick={() => scrollToSection('camps')}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                >
                  Inspect Camp Records & Logs
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
