/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'Active On-Duty' | 'Standby' | 'Assigned' | 'Pending Verification';
  joinedDate: string;
  contributedHours: number;
  assignedCampaign: string;
}

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  cause: string;
  paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Direct Transfer';
  status: 'Pending' | 'Success' | 'Failed';
  date: string;
  isAnonymous: boolean;
}

export interface CampHighlights {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  date: string;
  beneficiariesCount: number;
  iconName: string;
}
