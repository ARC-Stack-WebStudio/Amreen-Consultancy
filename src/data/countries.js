export const COUNTRY_OPTIONS = [
  {
    key: 'oman',
    label: 'Oman',
    pageId: 'country-oman',
    heroEyebrow: 'Oman',
    heading: 'Trusted Manpower Solutions for Oman Employers',
    heroIntro: 'AMREEN CONSULTANCY helps employers in Oman access dependable international talent and workforce support built for long-term operational performance.',
    contentHeading: 'Professional recruitment support for Oman-based businesses',
    summary:
      'We support employers with access to capable international workforce solutions, carefully screened candidates and efficient mobilisation strategies designed around your project and staffing needs.',
    bullets: [
      'International workforce recruitment',
      'Skilled and semi-skilled manpower',
      'Candidate screening',
      'Workforce mobilisation',
      'Documentation support',
      'Employer recruitment support',
    ],
    sectors: [
      'Construction & Infrastructure',
      'Manufacturing',
      'Oil & Gas',
      'Engineering',
      'Logistics',
      'Hospitality',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional team meeting in a recruitment and manpower setting',
  },
  {
    key: 'saudi-arabia',
    label: 'Saudi Arabia',
    pageId: 'country-saudi-arabia',
    heroEyebrow: 'SAUDI ARABIA',
    heading: 'Trusted Manpower Solutions for Saudi Employers',
    heroIntro: 'AMREEN CONSULTANCY helps organisations in Saudi Arabia connect with reliable workforce solutions that match project requirements, quality standards and mobilisation timelines.',
    contentHeading: 'Workforce solutions built around Saudi business priorities',
    summary:
      'From recruitment planning to candidate readiness and documentation, we support employers with a practical workforce approach designed for efficiency, quality and smooth onboarding.',
    bullets: [
      'International recruitment',
      'Skilled workforce',
      'Candidate screening',
      'Workforce mobilisation',
      'Documentation support',
      'Employer support',
    ],
    sectors: [
      'Construction & Infrastructure',
      'Oil & Gas',
      'Manufacturing',
      'Engineering',
      'Logistics',
      'Hospitality',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Corporate recruitment and workforce planning discussion in a professional environment',
  },
  { key: 'uae', label: 'United Arab Emirates', pageId: null },
  { key: 'qatar', label: 'Qatar', pageId: null },
  { key: 'poland', label: 'Poland', pageId: null },
  { key: 'kuwait', label: 'Kuwait', pageId: null },
  { key: 'mauritius', label: 'Mauritius', pageId: null },
  { key: 'russia', label: 'Russia', pageId: null },
];

export const COUNTRY_LOOKUP = Object.fromEntries(
  COUNTRY_OPTIONS.filter((country) => country.pageId).map((country) => [country.pageId, country]),
);

export function getCountryByPageId(pageId) {
  return COUNTRY_LOOKUP[pageId] || null;
}
