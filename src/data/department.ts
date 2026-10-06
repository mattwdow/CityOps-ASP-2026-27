import { DepartmentInfo } from '../types/asp';

export const departmentInfo: DepartmentInfo = {
  departmentName: 'City Operations',
  parentOrganization: 'City of Edmonton',
  cycle: '2026-27 Annual Service Plans',
  mission: 'Maintain foundational civic infrastructure, public transit networks, municipal fleet assets, parks, and waste utility services across Edmonton.',
  vision: 'Reliable, safe, and accessible municipal operations delivering daily public services across Edmonton.',
  coreValues: [
    {
      title: 'Safety and Wellbeing',
      desc: 'Protect frontline workers and the public across transit facilities, roadways, and civic work sites.'
    },
    {
      title: 'Operational Reliability',
      desc: 'Meet published service standards through scheduled asset maintenance and transparent performance metrics.'
    },
    {
      title: 'Environmental Responsibility',
      desc: 'Transition municipal fleet vehicles to low-carbon fuels and expand curbside waste diversion.'
    },
    {
      title: 'Accessibility and Equity',
      desc: 'Maintain barrier-free access across transit stops, civic buildings, and community park spaces.'
    }
  ],
  strategicPriorities: [
    {
      title: 'Transit and Active Mobility',
      desc: 'Maintain bus and light rail transit schedules while advancing priority corridors.'
    },
    {
      title: 'Fleet and Facility Asset Management',
      desc: 'Service municipal emergency and transit vehicles while maintaining city buildings.'
    },
    {
      title: 'Roadway and Park Maintenance',
      desc: 'Deliver seasonal snow clearing, asphalt repairs, street sweeping, and urban park upkeep.'
    },
    {
      title: 'Waste Collection and Processing',
      desc: 'Operate curbside collection and regional processing facilities to meet diversion targets.'
    }
  ]
};
