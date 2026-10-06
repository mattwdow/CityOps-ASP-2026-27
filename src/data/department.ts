import { DepartmentInfo } from '../types/asp';

export const departmentInfo: DepartmentInfo = {
  departmentName: 'City Operations',
  parentOrganization: 'City of Edmonton',
  cycle: '2026–2027 Annual Service Plans',
  mission: 'Delivering foundational municipal infrastructure, public transit, fleet lifecycle management, public spaces, and environmental services that keep Edmonton moving, clean, safe, and connected every single day.',
  vision: 'A connected, sustainable, and climate-resilient Edmonton powered by reliable civic infrastructure and frontline operational excellence.',
  coreValues: [
    {
      title: 'Safety & Wellbeing',
      desc: 'Prioritizing employee and public safety across all operations, transit hubs, and civic facilities.'
    },
    {
      title: 'Operational Excellence',
      desc: 'Optimizing resource allocation and service reliability through evidence-based planning and measurable targets.'
    },
    {
      title: 'Climate Resilience & Sustainability',
      desc: 'Decarbonizing city fleets, advancing zero waste initiatives, and engineering durable urban assets.'
    },
    {
      title: 'Equity & Accessibility',
      desc: 'Ensuring public facilities, parks, transit, and city services are universally barrier-free and inclusive for all residents.'
    }
  ],
  strategicPriorities: [
    {
      title: 'Connected Transit & Multimodal Networks',
      desc: 'Expanding reliable bus and LRT rapid transit networks while improving accessibility and passenger security.'
    },
    {
      title: 'Facility & Fleet Modernization',
      desc: 'Accelerating transition to zero-emission fleets and maintaining high availability across civic municipal assets.'
    },
    {
      title: 'Vibrant Parks & Resilient Roadways',
      desc: 'Proactive seasonal roadway maintenance, expanded urban canopy, and high-standard public open space upkeep.'
    },
    {
      title: 'Sustainable Waste Management',
      desc: 'Driving diversion rates through 25-year waste strategy implementation and customer-centric curbside services.'
    }
  ]
};
