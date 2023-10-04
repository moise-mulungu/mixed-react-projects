//DM: if any constant is shared among the sections or header, footer, or etc., then they should be here absolutely.

import { GithubIcon, LinkedInIcon, AngelListIcon, MediumIcon, TwitterIcon } from '../../ui/icons'

export const appTitle = 'My Portfolio'

export const socialLinks = [
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
export const defaultSocialLinkId = socialLinks[0].id
