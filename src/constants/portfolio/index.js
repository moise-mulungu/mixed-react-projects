import { GithubIcon, LinkedInIcon, AngelListIcon, MediumIcon, TwitterIcon } from '@/ui/icons'

export const topNavSiteLinks = [
  { id: 'work', name: 'Portfolio', anchor: 'work' },
  { id: 'about', name: 'About', anchor: 'about' },
  { id: 'contact', name: 'Contact', anchor: 'contact' },
]

export const defaultTopNavSiteLinkId = topNavSiteLinks[0].id

export const theMan = 'Moise M Mulungu'

export const footerSocialLinks = [
  { id: 'github', title: 'Github', Icon: GithubIcon, url: 'https://github.com/moise-mulungu/' },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    Icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/moisemulungu/',
  },
  {
    id: 'wellfound',
    title: 'Wellfound',
    Icon: AngelListIcon,
    url: 'https://angel.co/u/moise-mulungu',
  },
  { id: 'medium', title: 'Medium', Icon: MediumIcon, url: 'https://medium.com/@moisemlg90' },
  { id: 'twitter', title: 'Twitter', Icon: TwitterIcon, url: 'https://twitter.com/moise_mulungu' },
]
export const defaultFooterSocialLinkId = footerSocialLinks[0].id
// DM: yup, see, now you don't have 'githup' hard-coded. no "magic strings"!

export const contentOverviewHeaderText = 'Hey there, I am Moise. a software developer'
export const contentOverviewParagraphText =
  'I can help you build a product, feature or website Look through some of my work experience! You like what you see and have a project you need coded, do not hesitate to contact me.'
