/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, UserPlus, Search, Filter, ShieldAlert, 
  Clock, CheckCircle, User, Mail, Phone, Calendar, HeartHandshake, RefreshCw 
} from 'lucide-react';
import { DEFAULT_VOLUNTEERS, CAMP_HIGHLIGHTS } from '../data';
import { Volunteer } from '../types';

export default function VolunteerTracker() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formRole, setFormRole] = useState('Social Coordinator');
  const [formCampaign, setFormCampaign] = useState(CAMP_HIGHLIGHTS[0].title);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [assignedId, setAssignedId] = useState('');

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('ctlpc_volunteers');
    if (saved) {
      try {
        setVolunteers(JSON.parse(saved));
      } catch (e) {
        setVolunteers(DEFAULT_VOLUNTEERS);
      }
    } else {
      setVolunteers(DEFAULT_VOLUNTEERS);
      localStorage.setItem('ctlpc_volunteers', JSON.stringify(DEFAULT_VOLUNTEERS));
    }
  }, []);

  const saveVolunteers = (updatedList: Volunteer[]) => {
    setVolunteers(updatedList);
    localStorage.setItem('ctlpc_volunteers', JSON.stringify(updatedList));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formName.trim() || !formEmail.trim() || !formPhone.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    const newId = 'VOL-' + Math.floor(100 + Math.random() * 900);
    const newVolunteer: Volunteer = {
      id: newId,
      name: formName.trim(),
      email: formEmail.trim(),
      phone: formPhone.trim(),
      role: formRole,
      status: 'Pending Verification',
      joinedDate: new Date().toISOString().split('T')[0],
      contributedHours: 0,
      assignedCampaign: formCampaign
    };

    const updated = [newVolunteer, ...volunteers];
    saveVolunteers(updated);
    setAssignedId(newId);
    setIsSubmitted(true);

    // Reset form fields
    setFormName('');
    setFormEmail('');
    setFormPhone('');
  };

  const handleUpdateStatus = (id: string, newStatus: Volunteer['status']) => {
    const updated = volunteers.map((vol) => {
      if (vol.id === id) {
        return { 
          ...vol, 
          status: newStatus,
          // If marked active and hours are 0, seed some default hours for visual effect
          contributedHours: vol.contributedHours === 0 && newStatus === 'Active On-Duty' ? 8 : vol.contributedHours
        };
      }
      return vol;
    });
    saveVolunteers(updated);
  };

  const handleAddHours = (id: string) => {
    const updated = volunteers.map((vol) => {
      if (vol.id === id) {
        return { ...vol, contributedHours: vol.contributedHours + 4 };
      }
      return vol;
    });
    saveVolunteers(updated);
  };

  const handleDeleteVolunteer = (id: string) => {
    if (confirm('Are you sure you want to remove this volunteer record from tracking?')) {
      const updated = volunteers.filter((vol) => vol.id !== id);
      saveVolunteers(updated);
    }
  };

  const resetRoster = () => {
    if (confirm('Would you like to reset the roster back to default official volunteers?')) {
      saveVolunteers(DEFAULT_VOLUNTEERS);
    }
  };

  // Filtered lists
  const filteredVolunteers = volunteers.filter((vol) => {
    const matchesSearch = 
      vol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vol.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vol.assignedCampaign.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || vol.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Aggregate stats
  const totalHours = volunteers.reduce((acc, vol) => acc + vol.contributedHours, 0);
  const activeCount = volunteers.filter(v => v.status === 'Active On-Duty').length;

  return (
    <section id="volunteer" className="py-16 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-800 mb-3">
            <Users className="h-3.5 w-3.5 text-indigo-600" /> COMMUNITY ENGAGEMENT ENGINE
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            Real-Time Volunteer Tracking & Rota
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Register as a community volunteer or audit active social workers on-duty. This ledger logs field assignments, contact credentials, and verified contribution hours in real-time.
          </p>
        </div>

        {/* Dashboard stats panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Registered</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mt-1 block">{volunteers.length} Professionals</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active On-Duty</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-emerald-600 mt-1 block">{activeCount} Volunteers</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Hours Logged</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-indigo-700 mt-1 block">{totalHours} Hours</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Verification Rate</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-amber-600 mt-1 block">100% Audited</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Register Form */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200/85 p-6 shadow-md bg-slate-50/50">
            <div className="flex items-center gap-2 mb-5">
              <UserPlus className="h-5 w-5 text-indigo-600 animate-pulse" />
              <h3 className="font-display text-base font-bold text-slate-900">Volunteer Registration Form</h3>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="v-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRegister} 
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@gmail.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Mobile Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Core Expertise / Role</label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-indigo-600"
                    >
                      <option value="Social Coordinator">Social Coordinator</option>
                      <option value="Medical Officer (Ophthalmic Specialist)">Medical Officer (Ophthalmic Specialist)</option>
                      <option value="Nurse / Clinical Assistant">Nurse / Clinical Assistant</option>
                      <option value="Child Welfare Instructor">Child Welfare Instructor</option>
                      <option value="Logistics and Camp Setup">Logistics and Camp Setup</option>
                      <option value="Vocational Trainer">Vocational Trainer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Assign to Campaign Camp</label>
                    <select
                      value={formCampaign}
                      onChange={(e) => setFormCampaign(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:border-indigo-600"
                    >
                      {CAMP_HIGHLIGHTS.map((camp, idx) => (
                        <option key={idx} value={camp.title}>{camp.title}</option>
                      ))}
                      <option value="General Welfare Activities">General Trust Office Welfare</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition-all cursor-pointer"
                  >
                    Register as Certified Volunteer
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="v-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center space-y-3"
                >
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto" />
                  <h4 className="font-display text-sm font-bold text-emerald-950">Registration Submitted!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, your application is logged under verified Code: <strong className="font-mono text-emerald-800">{assignedId}</strong>. Dr. S. Meenakshi (Medical Camp Director) will contact you shortly to authorize your active duty.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                  >
                    Submit another application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Ledger Roster Table */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-200/80 bg-white shadow-md overflow-hidden">
            {/* Filtering controls bar */}
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, role or camp..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-600 bg-white"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-slate-400 hidden sm:block" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full sm:w-auto p-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Active On-Duty">Active On-Duty</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Standby">Standby</option>
                  <option value="Pending Verification">Pending Verification</option>
                </select>

                <button 
                  onClick={resetRoster}
                  title="Reset Roster"
                  className="p-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-700 cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Main Roster List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="p-3 pl-4">Volunteer Info</th>
                    <th className="p-3">Assigned Campaign</th>
                    <th className="p-3">Logged Hours</th>
                    <th className="p-3">Ledger Status</th>
                    <th className="p-3 text-right pr-4">Roster Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-xs">
                  {filteredVolunteers.length > 0 ? (
                    filteredVolunteers.map((vol) => (
                      <tr key={vol.id} className="hover:bg-slate-50/50 transition-colors">
                        {/* Info Column */}
                        <td className="p-3 pl-4">
                          <div>
                            <span className="font-mono text-[9px] font-bold text-slate-400">{vol.id}</span>
                            <h4 className="font-bold text-slate-800">{vol.name}</h4>
                            <p className="text-slate-500 text-[10px]">{vol.role}</p>
                            <p className="text-[9px] text-slate-400 font-mono mt-0.5">{vol.phone}</p>
                          </div>
                        </td>
                        
                        {/* Campaign Column */}
                        <td className="p-3 max-w-[150px]">
                          <p className="font-semibold text-slate-700 truncate" title={vol.assignedCampaign}>
                            {vol.assignedCampaign}
                          </p>
                          <span className="text-[9px] text-slate-400">Joined: {vol.joinedDate}</span>
                        </td>

                        {/* Hours Column */}
                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            <span className="font-mono font-bold text-slate-800">{vol.contributedHours} hrs</span>
                          </div>
                        </td>

                        {/* Status Column */}
                        <td className="p-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                            vol.status === 'Active On-Duty' 
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                              : vol.status === 'Assigned'
                              ? 'bg-indigo-50 text-indigo-800 border border-indigo-100'
                              : vol.status === 'Standby'
                              ? 'bg-slate-100 text-slate-600 border border-slate-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-100 animate-pulse'
                          }`}>
                            <span className={`h-1 w-1 rounded-full ${
                              vol.status === 'Active On-Duty' ? 'bg-emerald-500' : vol.status === 'Assigned' ? 'bg-indigo-500' : 'bg-slate-400'
                            }`}></span>
                            {vol.status}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="p-3 text-right pr-4 space-y-1">
                          <div className="flex items-center justify-end gap-1.5">
                            {vol.status === 'Pending Verification' ? (
                              <button
                                onClick={() => handleUpdateStatus(vol.id, 'Active On-Duty')}
                                className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[9px] font-bold cursor-pointer"
                              >
                                Approve Duty
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleAddHours(vol.id)}
                                  className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded text-[9px] font-bold cursor-pointer"
                                  title="Add 4 Contribution Hours"
                                >
                                  +4 Hrs
                                </button>
                                
                                <select
                                  value={vol.status}
                                  onChange={(e) => handleUpdateStatus(vol.id, e.target.value as any)}
                                  className="p-0.5 rounded border border-slate-200 bg-white text-[9px] font-semibold text-slate-600"
                                >
                                  <option value="Active On-Duty">Active</option>
                                  <option value="Assigned">Assigned</option>
                                  <option value="Standby">Standby</option>
                                </select>
                              </>
                            )}

                            <button
                              onClick={() => handleDeleteVolunteer(vol.id)}
                              className="p-1 rounded text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors"
                              title="Delete volunteer record"
                            >
                              ✕
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-400">
                        <ShieldAlert className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-xs font-semibold">No volunteers found matching current filter query.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
