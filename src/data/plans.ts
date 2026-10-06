import { BranchPlan } from '../types/asp';
import arcPay from '../assets/Arc Pay.png';
import lornaAward from '../assets/Lorna.png';
import cottImg from '../assets/COTT.png';
import transitCenter from '../assets/Transit Centre.png';

// 1. Edmonton Transit Service (ETS) - Fully Populated
export const etsPlan: BranchPlan = {
  id: 'ets',
  slug: 'ets',
  branchName: 'Edmonton Transit Service',
  shortName: 'ETS',
  tagline: 'Connecting communities and delivering accessible, safe, and reliable transit across Edmonton.',
  accentColor: '#003461',
  accentLight: '#F4B223',
  accentDark: '#00213d',
  isSkeleton: false,
  completion: {
    managerMessage: true,
    impactMetrics: true,
    results2025: true,
    lookingAhead2026: true,
  },
  managerMessage: {
    name: 'Carrie Hotton-MacDonald',
    title: 'Branch Manager, ETS',
    paragraphs: [
      'I am excited to present this year’s Annual Service Plan for Edmonton Transit Service. This report highlights a few examples of projects we will be delivering in 2026 to help make our transit service even more convenient, reliable, safe, accessible and inclusive.',
      'Our work this year will build on 2025 achievements, including the launch of our “tap to pay” option for fare payment, implementation of additional bus service hours, LRT accessibility improvements and our work with the community.',
      'Transit ridership reached 61.8 million completed trips in 2025, from 61.6 million in 2024. This reflects a slower period of growth and things like reduced ridership during the October teachers’ strike. Throughout the year, we saw many successes across the network, including high ridership during the year of new bus Route 729.',
      'As a result, we’ll ensure we have adequate capacity on these high-demand routes in 2026 by reinvesting service hours from some routes that have not met minimum performance targets identified in our service standards.',
      'We have many capital projects continuing this year, including work related to service expansion for the Valley Line West and Capital Line South Extension, as well as planning and design for Bus Rapid Transit and implementation of Transit Priority Measures.',
      'Thank you to our employees, service partners, community groups, transit riders, and City Council for making 2025 a memorable year. I look forward to engaging with you throughout 2026 and seeing you out in our buses and trains!'
    ],
    signatureText: 'Carrie Hotton-MacDonald'
  },
  metrics: [
    {
      value: 61.8,
      suffix: 'M',
      decimals: 1,
      label: 'Transit Trips in 2025',
      description: 'Total completed bus and LRT passenger trips across the Edmonton transit network.'
    },
    {
      value: 1.5,
      suffix: 'M',
      decimals: 1,
      label: 'DATS Trips',
      description: 'Specialized door-to-door trips delivered for riders who cannot access conventional transit.'
    },
    {
      value: 4.2,
      suffix: 'M',
      decimals: 1,
      label: 'Arc Card Taps',
      description: 'Regional contactless fare validator transactions completed throughout the service network.'
    }
  ],
  results: [
    {
      id: '1',
      title: 'Convenient',
      description: 'In 2025, ETS prioritized initiatives to make transit a more seamless part of daily life. By reducing friction at the fare box and simplifying the digital experience, we aim to ensure the system is easy to use for all Edmontonians.',
      actions: [
        { title: 'Arc Tap to Pay', description: 'Expanded contactless payment across the entire fleet allowing credit, debit, and mobile wallets.' },
        { title: 'Ticket to Ride', description: 'New simplified ticketing options designed for occasional and event riders.' },
        { title: 'Updated ETS Trip Planner', description: 'Overhauled digital interface for more intuitive navigation and schedule updates.' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: 'Rider Satisfaction with Arc', target: '≥ 80%', result: '71%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'Rider Satisfaction with Availability to Find Information', target: '≥ 80%', result: '73%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'Rider Satisfaction with Number of Transfers', target: '≥ 80%', result: '66%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' }
      ],
      breakoutBox: {
        type: 'split',
        bgColor: 'bg-white',
        textColor: 'text-[#003461]',
        title: 'Arc Tap to Pay',
        description: 'Arc tap to pay allows riders in the Edmonton region to use physical or digital credit/debit cards (Visa, Mastercard, Amex, Interac) or mobile wallets directly on validators. Tap on and off every trip to ensure correct fare calculation and receive daily and monthly fare capping.',
        image: arcPay
      }
    },
    {
      id: '2',
      title: 'Reliable and Convenient Service',
      description: 'Provide consistent, on-time service with minimal disruptions, ensuring predictable and dependable transportation for all riders.',
      actions: [
        { title: 'Transit Priority Measures', description: 'Implemented new transit priority signals and dedicated bus lanes at key corridors including Jasper Avenue and 97 Street.' },
        { title: 'Valley Line West Construction', description: 'Continued building the 14-km LRT expansion from downtown to Lewis Farms with Marigold Infrastructure Partners.' },
        { title: 'Light Rail Train (LRV) Replacement', description: 'Selected Hyundai Rotem to build the next generation of light rail vehicles to replace aging U1 LRT cars.' },
        { title: 'New Bus Hours in April 2025', description: 'Added 1,400 weekly service hours (50,000 annually) to improve reliability, frequency, and coverage.' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: 'Rider Satisfaction with Bus/Train Arriving On-Time', target: '≥ 80%', result: '73%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'Bus On-Time Performance', target: '≥ 90%', result: '83%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'LRT On-Time Performance', target: '≥ 90%', result: '85%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'DATS On-Time Performance', target: '≥ 90%', result: '90%', status: '✅', statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200' }
      ],
      breakoutBox: {
        type: 'split',
        bgColor: 'bg-[#F4B223]',
        textColor: 'text-[#003461]',
        eyebrowTag: 'Award Recognition',
        title: 'Lorna Stewart Corporate Leadership Award',
        description: 'The ETS team was awarded the CUTA Lorna Stewart Corporate Leadership Award for the "Get On Board" campaign in partnership with the Canadian National Institute of the Blind (CNIB), celebrating service-wide accessibility improvements including enhanced audio, contrast curbing, and station wayfinding.',
        image: lornaAward
      }
    },
    {
      id: '3',
      title: 'Safe',
      description: 'Continue to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network.',
      actions: [
        { title: 'Enhanced Transit Safety and Security Plan', description: 'Adding 30 more Transit Peace Officers for a total of 126 by 2026, transitioning from static security to proactive mobile response.' },
        { title: "Wa'awiyagabi Outreach Space", description: 'Opened at Central LRT Station, providing a centralized facility for outreach workers and TPOs.' },
        { title: '"Here to Help" Campaign', description: 'High-visibility patrols by TPOs during peak seasonal community activities.' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: 'Rider Perceptions of Safety', target: '≥ 80%', result: '61%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'Non-Criminal Incidents', target: '≤ 0.1%', result: '0.06%', status: '✅', statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200' }
      ],
      breakoutBox: {
        type: 'split-reverse',
        bgColor: 'bg-[#003461]',
        textColor: 'text-white',
        title: 'Community Outreach Transit Team (COTT)',
        description: 'The Community Outreach Transit Team is a collaborative partnership between the City of Edmonton and Bent Arrow Traditional Healing Society, building relationships and connecting individuals in transit facilities with social services and housing support.',
        image: cottImg
      }
    },
    {
      id: '4',
      title: 'Accessible and Inclusive',
      description: "Ensure Edmonton's diverse communities have equitable and dignified access to transportation.",
      actions: [
        { title: 'Indigenous-inspired Bus Wrap', description: 'Collaboration with Edmonton Aboriginal Seniors Centre fostering reconciliation.' },
        { title: 'DATS Eligibility Review', description: 'Modernized intake processes to accelerate service access for those who require specialized transit.' },
        { title: 'ETS 101 Travel Training', description: 'Empowering youth and newcomers to safely and independently navigate the transit network.' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: 'Rider satisfaction with accessibility of bus stop/LRT station', target: '≥ 80%', result: '65%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' },
        { measure: 'Perception of fare affordability for the low income transit pass', target: '≥ 80%', result: '79%', status: '⬇️', statusColor: 'bg-red-50 text-red-700 border-red-200' }
      ],
      breakoutBox: {
        type: 'full-image',
        image: transitCenter
      }
    }
  ],
  focusAreas: [
    {
      id: '1',
      title: 'Service Adjustments & Expansion',
      description: 'Reinvesting service hours into high-demand corridors and expanding service coverage.',
      actions: [
        {
          title: 'DATS Service Growth',
          frontSummary: 'Expanding our dedicated accessible transit fleet capacity.',
          backDetailedSummary: 'City Council approved an expanded budget package to increase DATS capacity in 2026, sustaining a 98% accommodation rate for riders with mobility constraints.'
        },
        {
          title: 'Procurement of 25 Conventional Buses',
          frontSummary: 'Modernizing fleet and transitioning popular On-Demand zones.',
          backDetailedSummary: 'Procuring 25 clean-diesel transit buses scheduled for 2027 delivery to upgrade three fast-growing On Demand zones into regular scheduled transit lines.'
        },
        {
          title: 'Windermere North Transit Centre',
          frontSummary: 'Advancing planning and design of a key Southwest transit hub.',
          backDetailedSummary: 'Initiating schematic design with Canadian Public Transit Fund backing to link Terwillegar Drive express corridors with local neighborhood feeds.'
        },
        {
          title: 'Valley Line West (VLW) Operator Selection',
          frontSummary: 'Advancing operations readiness for the 14-km west LRT extension.',
          backDetailedSummary: 'Continuing infrastructure construction towards 2028 completion while selecting the permanent operating provider in 2026.'
        }
      ]
    },
    {
      id: '2',
      title: 'Infrastructure Reliability & Transit Priority',
      description: 'Preserving core bridges, track infrastructure, and prioritizing buses in mixed traffic.',
      actions: [
        {
          title: '118 Avenue LRT Bridge Deck Renewal',
          frontSummary: 'Refurbishing critical structural assets at Coliseum Station.',
          backDetailedSummary: 'Executing comprehensive deck rehabilitation on the 118 Avenue LRT rail overpass to protect structural longevity through October 2027.'
        },
        {
          title: 'Transit Priority Corridors',
          frontSummary: 'Advancing dedicated signals and bus lanes along 101 Street and Whyte Avenue.',
          backDetailedSummary: 'Engineering queue jumps and smart signal timing along 101 Street (Jasper to 102A Ave) and Whyte Avenue (99 St to 109 St) to bypass heavy congestion.'
        }
      ]
    },
    {
      id: '3',
      title: 'Safety, Security & Rider Environment',
      description: 'Active patrols, integrated dispatch systems, and improved station cleanliness.',
      actions: [
        {
          title: '30 Additional Transit Peace Officers',
          frontSummary: 'Deploying high-visibility uniformed patrols across the network.',
          backDetailedSummary: 'Completing recruit classes to place 30 additional TPOs on active patrol across high-traffic transit centres and train platforms.'
        },
        {
          title: 'Unified Operations Control Centre',
          frontSummary: 'Co-locating bus, LRT, and emergency security dispatch.',
          backDetailedSummary: 'Merging separate dispatch and radio networks into a consolidated state-of-the-art Operations Control Centre for faster incident coordination.'
        },
        {
          title: '5G Cellular Access in LRT Tunnels',
          frontSummary: 'Full mobile connectivity throughout underground stations.',
          backDetailedSummary: 'Partnering with Telus to install commercial carrier neutral 5G infrastructure inside underground tunnels and stations by year-end 2026.'
        }
      ]
    }
  ]
};

// 2. Fleet and Facility Services (Skeleton Template)
export const fleetPlan: BranchPlan = {
  id: 'fleet',
  slug: 'fleet',
  branchName: 'Fleet and Facility Services',
  shortName: 'Fleet and Facilities',
  tagline: 'Maintaining the City of Edmonton’s civic infrastructure, municipal buildings, and vehicle fleet lifecycle.',
  accentColor: '#1B4D3E',
  accentLight: '#52B788',
  accentDark: '#0D281E',
  isSkeleton: true,
  completion: {
    managerMessage: false,
    impactMetrics: false,
    results2025: false,
    lookingAhead2026: false,
  },
  managerMessage: {
    name: '[Branch Manager Name]',
    title: 'Branch Manager, Fleet and Facility Services',
    paragraphs: [
      'Welcome to the 2026–2027 Annual Service Plan for Fleet and Facility Services.',
      '[Placeholder: Branch Manager message introducing civic facility upkeep, fleet decarbonization milestones, and capital maintenance priorities will be inserted here when draft content is finalized.]'
    ],
    signatureText: '[Manager Signature]'
  },
  metrics: [
    {
      value: 0,
      suffix: '',
      label: 'Municipal Fleet Assets Maintained',
      description: '[Placeholder Metric 1: e.g. Total vehicles, emergency units, and heavy equipment serviced]'
    },
    {
      value: 0,
      suffix: '%',
      label: 'Facility Availability Rate',
      description: '[Placeholder Metric 2: e.g. Operational uptime across recreation, emergency, and admin facilities]'
    },
    {
      value: 0,
      suffix: 'M',
      label: 'Capital Maintenance Investment',
      description: '[Placeholder Metric 3: e.g. Annual expenditure allocated to facility life-cycle repairs]'
    }
  ],
  results: [
    {
      id: '1',
      title: '[Objective 1: Fleet Electrification & Reliability]',
      description: '[Placeholder: Provide details regarding 2025 fleet decarbonization, maintenance benchmarks, and vehicle turnaround times.]',
      actions: [
        { title: '[Action 1 Title]', description: '[Placeholder: Description of fleet maintenance or acquisition initiative]' },
        { title: '[Action 2 Title]', description: '[Placeholder: Description of zero-emission transition project]' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: '[Performance Measure 1]', target: '≥ 90%', result: 'TBD', status: '🔄' },
        { measure: '[Performance Measure 2]', target: '≥ 85%', result: 'TBD', status: '🔄' }
      ]
    }
  ],
  focusAreas: [
    {
      id: '1',
      title: '[Focus Area 1: Green Fleet Transition]',
      description: '[Placeholder: Core strategic focus for fleet modernization in 2026.]',
      actions: [
        {
          title: '[Action Item Title]',
          frontSummary: '[Brief 1-sentence card front summary]',
          backDetailedSummary: '[Detailed project background, funding allocation, and operational deliverables]'
        }
      ]
    }
  ]
};

// 3. Parks and Roads Services (Skeleton Template)
export const parksRoadsPlan: BranchPlan = {
  id: 'parks-roads',
  slug: 'parks-roads',
  branchName: 'Parks and Roads Services',
  shortName: 'Parks and Roads',
  tagline: 'Preserving vibrant parks, managing urban forestry, and keeping Edmonton roads safe and operational in all seasons.',
  accentColor: '#2E5A88',
  accentLight: '#68B0AB',
  accentDark: '#17304B',
  isSkeleton: true,
  completion: {
    managerMessage: false,
    impactMetrics: false,
    results2025: false,
    lookingAhead2026: false,
  },
  managerMessage: {
    name: '[Branch Manager Name]',
    title: 'Branch Manager, Parks and Roads Services',
    paragraphs: [
      'Welcome to the 2026–2027 Annual Service Plan for Parks and Roads Services.',
      '[Placeholder: Branch Manager message introducing seasonal roadway maintenance, snow & ice operations, pothole repair, and urban canopy preservation will be inserted here.]'
    ],
    signatureText: '[Manager Signature]'
  },
  metrics: [
    {
      value: 0,
      suffix: 'km',
      label: 'Kilometres of Roadways Maintained',
      description: '[Placeholder Metric 1: Total arterial, collector, and residential road network managed]'
    },
    {
      value: 0,
      suffix: 'k',
      label: 'Urban Canopy Trees Managed',
      description: '[Placeholder Metric 2: City-owned public boulevard and park tree inventory]'
    },
    {
      value: 0,
      suffix: '%',
      label: 'Winter Road Service Standard Met',
      description: '[Placeholder Metric 3: Percentage of snow and ice control operations completed within policy timelines]'
    }
  ],
  results: [
    {
      id: '1',
      title: '[Objective 1: Resilient Roadway & Active Pathway Networks]',
      description: '[Placeholder: Provide details regarding 2025 seasonal maintenance, street sweeping, and asphalt rejuvenation.]',
      actions: [
        { title: '[Action 1 Title]', description: '[Placeholder: Description of roadway preservation or sidewalk rehabilitation project]' },
        { title: '[Action 2 Title]', description: '[Placeholder: Description of park preservation or horticulture project]' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: '[Performance Measure 1]', target: '≥ 85%', result: 'TBD', status: '🔄' },
        { measure: '[Performance Measure 2]', target: '≥ 80%', result: 'TBD', status: '🔄' }
      ]
    }
  ],
  focusAreas: [
    {
      id: '1',
      title: '[Focus Area 1: Seasonal Maintenance Modernization]',
      description: '[Placeholder: Road and park service enhancements scheduled for 2026.]',
      actions: [
        {
          title: '[Action Item Title]',
          frontSummary: '[Brief 1-sentence card front summary]',
          backDetailedSummary: '[Detailed project background, seasonal execution schedule, and public impact]'
        }
      ]
    }
  ]
};

// 4. Waste Management Services (Skeleton Template)
export const wastePlan: BranchPlan = {
  id: 'waste',
  slug: 'waste',
  branchName: 'Waste Management Services',
  shortName: 'Waste Services',
  tagline: 'Leading sustainable waste collection, processing, and circular economy innovation across Edmonton.',
  accentColor: '#5C3D2E',
  accentLight: '#B85D19',
  accentDark: '#382319',
  isSkeleton: true,
  completion: {
    managerMessage: false,
    impactMetrics: false,
    results2025: false,
    lookingAhead2026: false,
  },
  managerMessage: {
    name: '[Branch Manager Name]',
    title: 'Branch Manager, Waste Management Services',
    paragraphs: [
      'Welcome to the 2026–2027 Annual Service Plan for Waste Management Services.',
      '[Placeholder: Branch Manager message introducing 25-year Waste Strategy execution, curbside diversion rates, and Edmonton Waste Management Centre initiatives will be inserted here.]'
    ],
    signatureText: '[Manager Signature]'
  },
  metrics: [
    {
      value: 0,
      suffix: '%',
      label: 'Residential Waste Diversion Rate',
      description: '[Placeholder Metric 1: Percentage of collected residential waste diverted from landfill]'
    },
    {
      value: 0,
      suffix: 'k',
      label: 'Homes Served Curbside',
      description: '[Placeholder Metric 2: Single-family and multi-unit households receiving weekly collection]'
    },
    {
      value: 0,
      suffix: 'T',
      label: 'Organics & Recyclables Processed',
      description: '[Placeholder Metric 3: Metric tonnes diverted via high-solids anaerobic digestion and recycling]'
    }
  ],
  results: [
    {
      id: '1',
      title: '[Objective 1: Diverting Waste & Advancing Circular Operations]',
      description: '[Placeholder: Provide details on 2025 organics composting, sorting technology, and resident participation.]',
      actions: [
        { title: '[Action 1 Title]', description: '[Placeholder: Curbside collection optimization or sorting plant upgrade]' },
        { title: '[Action 2 Title]', description: '[Placeholder: Public education or community recycling station enhancement]' }
      ],
      metricsTitle: 'Performance Review',
      metrics: [
        { measure: '[Performance Measure 1]', target: '≥ 50%', result: 'TBD', status: '🔄' },
        { measure: '[Performance Measure 2]', target: '≥ 95%', result: 'TBD', status: '🔄' }
      ]
    }
  ],
  focusAreas: [
    {
      id: '1',
      title: '[Focus Area 1: Multi-Unit Diversion & Organics Growth]',
      description: '[Placeholder: Strategic priorities for waste diversion and facility efficiency in 2026.]',
      actions: [
        {
          title: '[Action Item Title]',
          frontSummary: '[Brief 1-sentence card front summary]',
          backDetailedSummary: '[Detailed project background, sorting process improvements, and diversion timeline]'
        }
      ]
    }
  ]
};

export const allBranchPlans: Record<string, BranchPlan> = {
  ets: etsPlan,
  fleet: fleetPlan,
  'parks-roads': parksRoadsPlan,
  waste: wastePlan,
};
