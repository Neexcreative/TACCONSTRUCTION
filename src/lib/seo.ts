export const SITE_URL = 'https://www.tacconstruction.ie'
export const SITE_NAME = 'T.A.C Construction'
export const DEFAULT_TITLE = 'T.A.C Construction | Dublin Renovation & Building Specialists'
export const DEFAULT_DESCRIPTION =
  'Residential renovation, heating, plumbing, roofing and general construction services from T.A.C Construction.'

export const SOCIAL_IMAGE = {
  url: '/images/Logo.png',
  width: 1594,
  height: 528,
  alt: SITE_NAME,
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}
