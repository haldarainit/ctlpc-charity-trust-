/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, HeartPulse, BookOpen, Award, MapPin, Calendar, Users, ArrowRight, X, Heart } from 'lucide-react';
import { CAMP_HIGHLIGHTS } from '../data';
import { CampHighlights } from '../types';

export default function Campaigns() {
  const [selectedCamp, setSelectedCamp] = useState<CampHighlights | null>(null);

  // Helper to map string to actual Lucide component
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="h-5 w-5" />;
      case 'HeartPulse':
        return <HeartPulse className="h-5 w-5" />;
      case 'BookOpen':
        return <BookOpen className="h-5 w-5" />;
      case 'Award':
        return <Award className="h-5 w-5" />;
      default:
        return <HeartPulse className="h-5 w-5" />;
    }
  };

  return (
    <section id="camps" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-800 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              On-Ground Impact Verification
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
              Our Active Humanitarian Campaigns
            </h2>
            <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
              Veritable, community-driven social services organized directly in rural and semi-urban communities in India. These field programs are audited, and benefit hundreds of underprivileged people and children.
            </p>
          </div>
          
          <div className="flex gap-4 border-l-2 border-amber-500 pl-4 py-1">
            <div>
              <div className="text-2xl font-bold text-slate-900">850+</div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Beneficiaries Assisted</p>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Free & Non-Profit</p>
            </div>
          </div>
        </div>

        {/* Responsive Grid for Campaign Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAMP_HIGHLIGHTS.map((camp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, shadow: 'md' }}
              className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-5 hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all group"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-sm shadow-indigo-500/20">
                    {renderIcon(camp.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    {camp.beneficiariesCount} Helped
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {camp.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-0.5 font-sans">
                  {camp.subtitle}
                </p>
                <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {camp.description}
                </p>
              </div>

              {/* Meta details at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100/80">
                <div className="space-y-1.5 mb-4 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>{camp.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCamp(camp)}
                  className="flex w-full items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700 hover:underline cursor-pointer"
                >
                  <span>Verify Camp Details</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real photo descriptive callout with Indian colors */}
        <div className="mt-12 rounded-3xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-amber-50/20 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-slate-900">
              Direct Field Proof and Integrity Verification
            </h4>
            <p className="mt-1 text-xs md:text-sm text-slate-600 leading-relaxed max-w-4xl">
              All camps are backed by formal documentation, attendee signatures, and audited medicine and material stock logbooks. Photos from our diagnostic camps, including eye charts and study kit distributions (as visible in our active campaign profiles), have been vetted by our chartered accountant for regulatory alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Campaign Details Audit Modal */}
      <AnimatePresence>
        {selectedCamp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl border border-slate-200"
            >
              <button
                onClick={() => setSelectedCamp(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  {renderIcon(selectedCamp.iconName)}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{selectedCamp.title}</h3>
                  <p className="text-xs text-slate-500">{selectedCamp.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Activity Description:</span>
                  <p className="text-slate-600 mt-1 leading-relaxed text-xs">
                    {selectedCamp.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Field Location:</span>
                    <p className="font-bold text-slate-800 mt-0.5">{selectedCamp.location}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Execution Date:</span>
                    <p className="font-bold text-slate-800 mt-0.5">{selectedCamp.date}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Total Beneficiaries:</span>
                    <p className="font-bold text-emerald-700 mt-0.5">{selectedCamp.beneficiariesCount} individuals</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Audited & Certified:</span>
                    <p className="font-bold text-indigo-700 mt-0.5">Yes, Logbook #IV-A</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-400 mb-3">
                    Interested in supporting or auditing this specific field work?
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => {
                        setSelectedCamp(null);
                        const el = document.getElementById('donate');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
                    >
                      <Heart className="h-3.5 w-3.5 fill-white" /> Support This Campaign
                    </button>
                    <button
                      onClick={() => setSelectedCamp(null)}
                      className="px-4 py-2 text-xs font-bold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
