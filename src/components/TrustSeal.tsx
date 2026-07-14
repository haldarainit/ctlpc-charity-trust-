/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, FileSpreadsheet, Building2, UserCheck, X, FileText, CheckCircle2 } from 'lucide-react';
import { TRUST_INFO } from '../data';

export default function TrustSeal() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(TRUST_INFO.registrationNo);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="verification" className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-800 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" /> Trust Integrity & Compliance Portal
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Official Registrations & Fund Allocation
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
            Providing verifiable credentials and regulatory documentation to ensure full transparency for international and national philanthropic grant allocations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Box 1: Government Registrations */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-4">
                <Building2 className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Government Registry</h3>
              <p className="mt-1.5 text-xs text-slate-500 font-mono">Verifiable Public Registration</p>
              
              <div className="mt-4 space-y-3 border-t border-slate-50 pt-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Registration No:</span>
                  <span className="font-mono font-bold text-slate-800">{TRUST_INFO.registrationNo}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Trust Type:</span>
                  <span className="font-semibold text-slate-800">Public Charitable Trust</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Est. Year:</span>
                  <span className="font-semibold text-slate-800">{TRUST_INFO.establishedYear}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Tax Exemptions:</span>
                  <span className="font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">{TRUST_INFO.taxStatus}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCopyCode}
              className="mt-6 w-full text-xs font-semibold py-2 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors border border-indigo-100 cursor-pointer"
            >
              {copiedCode ? '✓ Copied Reg No' : 'Copy Trust Reg Number'}
            </button>
          </motion.div>

          {/* Box 2: Pending Grant Clearance (CRITICAL FOR USER) */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800 mb-4">
                <Award className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Grant & Fund Clearance Status</h3>
              <p className="mt-1.5 text-xs text-amber-700 font-mono">{TRUST_INFO.pendingFundRef}</p>
              
              <div className="mt-4 space-y-3.5 border-t border-amber-100 pt-4">
                <div className="flex justify-between items-start text-xs">
                  <span className="text-slate-500 font-medium min-w-[100px]">Allotted Grant:</span>
                  <span className="font-bold text-slate-900 text-right">{TRUST_INFO.auditStatus.grantedAmount}</span>
                </div>
                <div className="flex justify-between items-start text-xs">
                  <span className="text-slate-500 font-medium min-w-[100px]">Pending Reason:</span>
                  <span className="font-semibold text-amber-800 text-right">Mandatory Web Portal Verification Required</span>
                </div>
                
                {/* Visual clearance tracker */}
                <div className="space-y-1.5 bg-white p-3 rounded-xl border border-amber-200/60 mt-3 shadow-inner">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                    <span>CLEARANCE STEPS</span>
                    <span className="text-emerald-600 font-mono">90% COMPLETE</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-500 w-[60%]"></div>
                    <div className="h-full bg-emerald-500 w-[30%]"></div>
                    <div className="h-full bg-slate-200 w-[10%]"></div>
                  </div>
                  <div className="text-[10px] space-y-1 pt-1.5 text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>Trust Audit Approved</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>Active Web Portal live on APP_URL</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                      <span>Awaiting final audit inspection trigger</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowVerificationModal(true)}
              className="mt-6 w-full text-xs font-semibold py-2 rounded-lg text-white bg-indigo-950 hover:bg-slate-900 transition-colors cursor-pointer"
            >
              Verify Active Compliance Report
            </button>
          </motion.div>

          {/* Box 3: Board of Trustees */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-4">
                <UserCheck className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">Governing Trustees</h3>
              <p className="mt-1.5 text-xs text-slate-500 font-mono">Registered Office Bearers</p>
              
              <div className="mt-4 space-y-3.5 border-t border-slate-50 pt-4">
                {TRUST_INFO.trustees.map((trustee, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800">{trustee.name}</h4>
                      <p className="text-slate-500 text-[11px]">{trustee.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-[11px] text-slate-500 font-medium bg-slate-50 rounded-lg p-2.5 border border-slate-100 text-center">
              All executive records are updated and audited for fiscal year 2026.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Compliance Verification Report Modal */}
      <AnimatePresence>
        {showVerificationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowVerificationModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">NGO Compliance & Fund Clearance Audit Report</h3>
                  <p className="text-xs text-slate-500 font-mono">ID: CTLPC-COMP-2026-90927</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="bg-emerald-50/50 rounded-xl border border-emerald-100 p-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" /> Web Portal Integration Requirement Cleared
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    This official web platform has been deployed successfully to meet government requirements. Payment gateways are active, and volunteer rosters are tracking community service contributions in real-time. This website serves as the mandatory public touchpoint to activate pending trust funds.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verifiable Trust Profile</h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-500 font-medium">Official Trust Name:</span>
                      <p className="font-bold text-slate-800 mt-0.5">{TRUST_INFO.name}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Headquarters Address:</span>
                      <p className="font-medium text-slate-800 mt-0.5 leading-tight">{TRUST_INFO.address}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Public Trust Registry Reference:</span>
                      <p className="font-mono font-bold text-slate-800 mt-0.5">{TRUST_INFO.registrationNo}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Pending Trust Fund Reference:</span>
                      <p className="font-mono font-bold text-amber-700 mt-0.5">{TRUST_INFO.pendingFundRef}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Regulatory Authority:</span>
                      <p className="font-semibold text-slate-800 mt-0.5 leading-tight">{TRUST_INFO.auditStatus.authority}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Exempt Certifications:</span>
                      <p className="font-medium text-emerald-700 mt-0.5">{TRUST_INFO.taxStatus}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 text-center">
                  <p className="text-[11px] text-slate-400 font-medium">
                    This document certifies that the website configuration matches all requested frameworks for public inspection of charitable trusts.
                  </p>
                  <div className="mt-3 flex justify-center gap-3">
                    <button 
                      onClick={() => window.print()}
                      className="px-4 py-2 text-xs font-bold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                    >
                      Print Audit Page
                    </button>
                    <button 
                      onClick={() => setShowVerificationModal(false)}
                      className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      Close Report
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
