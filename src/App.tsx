/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSeal from './components/TrustSeal';
import Campaigns from './components/Campaigns';
import DonationGateway from './components/DonationGateway';
import VolunteerTracker from './components/VolunteerTracker';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Header with brand credentials and quick triggers */}
      <Header />

      <main>
        {/* 2. Hero introduction with core metrics and CTA */}
        <Hero />

        {/* 3. Official Trust Registry & Clearance status tracking (crucial for getting pending fund) */}
        <TrustSeal />

        {/* 4. Active field camp profiles (based on user image files) */}
        <Campaigns />

        {/* 5. Required Payment Gateway Core (Card, UPI QR/ID, NetBanking, Direct Transfer) */}
        <DonationGateway />

        {/* 6. Real-Time Volunteer Tracking Ledgers & signup portal */}
        <VolunteerTracker />
      </main>

      {/* 7. Comprehensive footnotes and contacts */}
      <Footer />
    </div>
  );
}

