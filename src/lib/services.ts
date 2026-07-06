export interface ServiceProject {
  location: string
  name: string
  imagePath: string
}

export interface ServiceData {
  slug: string
  num: string
  tag: string
  title: string
  titleHtml: string
  intro: string
  portfolioTitle: string
  projects: ServiceProject[]
  featuresText: string
  features: string[]
}

export const services: ServiceData[] = [
  {
    slug: 'renovation',
    num: '01',
    tag: 'Residential',
    title: 'Full Renovation',
    titleHtml: 'Full<br/><span style="color:var(--red)">Renovation</span>',
    intro: 'Complete home transformations managed end-to-end — structural, finishes, trades, and everything in between.',
    portfolioTitle: 'Renovation Projects',
    projects: [
      { location: 'Dublin, 2024', name: 'Full Home Renovation', imagePath: '/images/services/renovation/01-full-home-renovation.svg' },
      { location: 'Wicklow, 2024', name: 'Period House Restore', imagePath: '/images/services/renovation/02-period-house-restore.svg' },
      { location: 'Dublin, 2023', name: 'Kitchen Extension', imagePath: '/images/services/renovation/03-kitchen-extension.svg' },
      { location: 'Meath, 2023', name: 'Full Interior Fit-Out', imagePath: '/images/services/renovation/04-interior-fitout.svg' },
    ],
    featuresText: 'Every renovation is managed in-house with full transparency and regular client updates.',
    features: [
      'Full structural assessment and planning',
      'Kitchen and bathroom renovation',
      'Flooring, tiling, and finishing',
      'Electrical and plumbing upgrades',
      'Plastering, painting, and decorating',
      'Project management end-to-end',
    ],
  },
  {
    slug: 'heating',
    num: '02',
    tag: 'Specialist Trade',
    title: 'Heating Systems',
    titleHtml: 'Heating<br/><span style="color:var(--red)">Systems</span>',
    intro: 'Modern, efficient heating installation and upgrades — from boiler replacement to full central heating systems.',
    portfolioTitle: 'Heating Projects',
    projects: [
      { location: 'Dublin, 2024', name: 'Full CH Installation', imagePath: '/images/services/heating/01-ch-installation.svg' },
      { location: 'Kildare, 2024', name: 'Boiler Upgrade', imagePath: '/images/services/heating/02-boiler-upgrade.svg' },
      { location: 'Dublin, 2023', name: 'Underfloor Heating', imagePath: '/images/services/heating/03-underfloor-heating.svg' },
      { location: 'Wicklow, 2023', name: 'Heat Pump Install', imagePath: '/images/services/heating/04-heat-pump-install.svg' },
    ],
    featuresText: 'Certified heating engineers working to the highest Irish building regulations standards.',
    features: [
      'Central heating system design',
      'Boiler replacement and upgrade',
      'Underfloor heating installation',
      'Heat pump systems',
      'Radiator installation and balancing',
      'Annual service and maintenance',
    ],
  },
  {
    slug: 'roofing',
    num: '03',
    tag: 'Structural',
    title: 'Roofing',
    titleHtml: 'Roofing<br/><span style="color:var(--red)">Services</span>',
    intro: 'Expert roofing solutions for all residential property types — new builds, re-roofs, repairs, and waterproofing.',
    portfolioTitle: 'Roofing Projects',
    projects: [
      { location: 'Dublin, 2024', name: 'Full Re-Roof', imagePath: '/images/services/roofing/01-full-reroof.svg' },
      { location: 'Meath, 2024', name: 'Flat Roof Replacement', imagePath: '/images/services/roofing/02-flat-roof-replacement.svg' },
      { location: 'Dublin, 2023', name: 'Ridge & Hip Repair', imagePath: '/images/services/roofing/03-ridge-hip-repair.svg' },
      { location: 'Wicklow, 2023', name: 'Chimney Repointing', imagePath: '/images/services/roofing/04-chimney-repointing.svg' },
    ],
    featuresText: 'All roofing work is carried out by qualified tradespeople with full insurance and warranty.',
    features: [
      'New roof installation',
      'Complete re-roofing',
      'Flat roof systems',
      'Chimney repair and repointing',
      'Guttering and fascia replacement',
      'Waterproofing and insulation',
    ],
  },
  {
    slug: 'plumbing',
    num: '04',
    tag: 'Specialist Trade',
    title: 'Plumbing',
    titleHtml: 'Plumbing<br/><span style="color:var(--red)">Services</span>',
    intro: 'Full residential plumbing — new installations, bathroom fit-outs, pipework, and emergency repairs.',
    portfolioTitle: 'Plumbing Projects',
    projects: [
      { location: 'Dublin, 2024', name: 'Bathroom Suite Install', imagePath: '/images/services/plumbing/01-bathroom-suite.svg' },
      { location: 'Dublin, 2024', name: 'Full Pipework Upgrade', imagePath: '/images/services/plumbing/02-pipework-upgrade.svg' },
      { location: 'Kildare, 2023', name: 'Ensuite Renovation', imagePath: '/images/services/plumbing/03-ensuite-renovation.svg' },
      { location: 'Dublin, 2023', name: 'Kitchen Plumbing', imagePath: '/images/services/plumbing/04-kitchen-plumbing.svg' },
    ],
    featuresText: 'Registered plumbers delivering clean, safe, and compliant plumbing solutions.',
    features: [
      'Bathroom and ensuite fit-out',
      'Kitchen plumbing installation',
      'Full pipe replacement',
      'Water pressure systems',
      'Leak detection and repair',
      'Waste and drainage installation',
    ],
  },
  {
    slug: 'construction',
    num: '05',
    tag: 'Structural',
    title: 'General Construction',
    titleHtml: 'General<br/><span style="color:var(--red)">Construction</span>',
    intro: 'Structural builds, extensions, and bespoke construction projects delivered with precision and quality.',
    portfolioTitle: 'Construction Projects',
    projects: [
      { location: 'Dublin, 2024', name: 'Two-Storey Extension', imagePath: '/images/services/construction/01-two-storey-extension.svg' },
      { location: 'Meath, 2024', name: 'Garage Conversion', imagePath: '/images/services/construction/02-garage-conversion.svg' },
      { location: 'Dublin, 2023', name: 'Attic Conversion', imagePath: '/images/services/construction/03-attic-conversion.svg' },
      { location: 'Wicklow, 2023', name: 'Garden Room Build', imagePath: '/images/services/construction/04-garden-room.svg' },
    ],
    featuresText: 'Experienced construction teams delivering structural projects on time and to specification.',
    features: [
      'House extensions and additions',
      'Attic and garage conversions',
      'Structural alterations',
      'Foundation and groundwork',
      'Concrete and blockwork',
      'Project management and compliance',
    ],
  },
]
