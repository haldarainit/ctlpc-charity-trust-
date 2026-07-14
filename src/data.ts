/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Volunteer, Donation, CampHighlights } from './types';

export const TRUST_INFO = {
  name: 'Charity Trust for Less-Privileged Peoples and Children',
  abbreviation: 'CTLPC',
  symbols: '🇮🇳 🌎 🏹',
  symbolsLabel: 'National Pride • Global Service • Focused Mission',
  registrationNo: 'REGD NO: BOOK-IV / 412 / 2026-CH',
  taxStatus: '12A & 80G Certified (Tax-Exempt Contributions)',
  pendingFundRef: 'Pending Grant Ref: GF-90927-IND-2026',
  email: 'contact@charitytrust-lessprivileged.org',
  phone: '+91 90927 28092',
  address: 'No. 24, Gandhi Avenue, Main Road, Tiruchirappalli, Tamil Nadu, India - 620002',
  establishedYear: '2022',
  trustees: [
    { name: 'G. Gopinath', role: 'Founder & Managing Trustee' },
    { name: 'Dr. S. Meenakshi', role: 'Medical Camp Director' },
    { name: 'R. Baskaran', role: 'Financial Trustee & Auditor' }
  ],
  auditStatus: {
    grantedAmount: '₹25,00,000 (Twenty-Five Lakhs INR)',
    status: 'Awaiting Active Web Portal Verification',
    authority: 'Ministry of Social Justice & Empowerment & Philanthropic Grant Commission'
  }
};

export const CAMP_HIGHLIGHTS: CampHighlights[] = [
  {
    title: 'Rural Vision Diagnostics & Spectacle Camps',
    subtitle: 'Free Cataract Screening & Spectacle Distribution',
    description: 'Comprehensive ophthalmic checkups for rural elderly citizens. Providing prescription glasses, cataract diagnostics, and referral surgeries completely free of cost.',
    location: 'Srinivasan Memorial Community Hall, Lalgudi',
    date: 'July 10, 2026',
    beneficiariesCount: 245,
    iconName: 'Eye'
  },
  {
    title: 'Free Diagnostic Health & Consultative Camps',
    subtitle: 'Primary Healthcare & Free Medicine Distribution',
    description: 'Setting up mobile diagnostic camps staffed by qualified doctors, nurses, and pharmacists to provide free blood pressure, sugar screening, and vital medicines to less-privileged individuals.',
    location: 'Welfare Centre, Musiri Block',
    date: 'June 28, 2026',
    beneficiariesCount: 380,
    iconName: 'HeartPulse'
  },
  {
    title: 'Underprivileged Children Educational Aids',
    subtitle: 'Kit Distribution (School Bags, Books & Stationery)',
    description: 'Empowering children from underserved families with essential study materials, notebooks, bags, and writing equipment to encourage continuous schooling and prevent dropouts.',
    location: 'Government High School Campus, Manachanallur',
    date: 'June 15, 2026',
    beneficiariesCount: 150,
    iconName: 'BookOpen'
  },
  {
    title: 'Social Innovation & Rural Livelihood Upgrades',
    subtitle: 'Skill Training & Women Self-Help Alliances',
    description: 'Providing vocational tailoring machines, handcraft training, and mini-grants to empower less-privileged women and marginalized communities to earn sustainable incomes.',
    location: 'CTLPC Trust Training Centre',
    date: 'May 20, 2026',
    beneficiariesCount: 85,
    iconName: 'Award'
  }
];

export const DEFAULT_VOLUNTEERS: Volunteer[] = [
  {
    id: 'VOL-921',
    name: 'Dr. Ramesh Krishnan',
    email: 'dr.ramesh.k@gmail.com',
    phone: '+91 94432 10291',
    role: 'Medical Officer (Ophthalmic Specialist)',
    status: 'Active On-Duty',
    joinedDate: '2024-03-12',
    contributedHours: 120,
    assignedCampaign: 'Rural Vision Diagnostics & Spectacle Camps'
  },
  {
    id: 'VOL-452',
    name: 'Anjali Sharma',
    email: 'anjali.sharma2@outlook.com',
    phone: '+91 81290 44321',
    role: 'Lead Social Coordinator',
    status: 'Assigned',
    joinedDate: '2025-01-19',
    contributedHours: 85,
    assignedCampaign: 'Underprivileged Children Educational Aids'
  },
  {
    id: 'VOL-810',
    name: 'K. Balasubramanian',
    email: 'bala.trustee.vol@yahoo.com',
    phone: '+91 90807 55432',
    role: 'Logistics and Camp Setup',
    status: 'Active On-Duty',
    joinedDate: '2023-11-05',
    contributedHours: 240,
    assignedCampaign: 'Free Diagnostic Health & Consultative Camps'
  },
  {
    id: 'VOL-112',
    name: 'Priyanka Sen',
    email: 'priyanka.sen@gmail.com',
    phone: '+91 73390 11223',
    role: 'Child Welfare Instructor',
    status: 'Standby',
    joinedDate: '2025-05-14',
    contributedHours: 42,
    assignedCampaign: 'CTLPC Trust Training Centre'
  },
  {
    id: 'VOL-304',
    name: 'Siddharth Nair',
    email: 'sid.nair@live.com',
    phone: '+91 99440 88776',
    role: 'Pharmacy Volunteer',
    status: 'Pending Verification',
    joinedDate: '2026-07-01',
    contributedHours: 0,
    assignedCampaign: 'Free Diagnostic Health & Consultative Camps'
  }
];

export const DEFAULT_DONATIONS: Donation[] = [
  {
    id: 'TXN-9082',
    donorName: 'Rajesh Patel',
    email: 'rajesh.patel@gmail.com',
    amount: 10000,
    cause: 'Rural Vision Diagnostics & Spectacle Camps',
    paymentMethod: 'UPI',
    status: 'Success',
    date: '2026-07-13 14:22',
    isAnonymous: false
  },
  {
    id: 'TXN-4512',
    donorName: 'Anand & Family',
    email: 'anand.f@outlook.com',
    amount: 25000,
    cause: 'General Welfare Trust Fund',
    paymentMethod: 'Direct Transfer',
    status: 'Success',
    date: '2026-07-12 10:15',
    isAnonymous: false
  },
  {
    id: 'TXN-8812',
    donorName: 'Anonymous Supporter',
    email: 'donor@secure-link.org',
    amount: 5000,
    cause: 'Underprivileged Children Educational Aids',
    paymentMethod: 'Card',
    status: 'Success',
    date: '2026-07-11 18:40',
    isAnonymous: true
  },
  {
    id: 'TXN-1190',
    donorName: 'Dr. Savitha Nair',
    email: 'savitha.nair@apollo.com',
    amount: 15000,
    cause: 'Free Diagnostic Health & Consultative Camps',
    paymentMethod: 'Net Banking',
    status: 'Success',
    date: '2026-07-09 09:05',
    isAnonymous: false
  }
];
