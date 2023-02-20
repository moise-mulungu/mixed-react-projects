import { GithubIcon } from '@/ui/icons'
import { LinkedInIcon } from '../../ui/icons'
import { AngelListIcon } from '../../ui/icons'

// more descriptive name, possibly, topNavLinks?
export const topNavSiteLinks = [
  { id: 'work', name: 'Portfolio', anchor: 'work' },
  { id: 'about', name: 'About', anchor: 'about' },
  { id: 'contact', name: 'Contact', anchor: 'contact' },
]
// DM: todoMM: get 'work' from topNavSiteLinks instead of 'hard-coding' it. hint, use techniques in findObjectInArrayOfObjects(in progress) DM: I think you're done with this one.
//     why? because you know that the default link is always the first one in topNavSiteLinks
//          if you change the order in the future, you don't have to edit defaultTopNavSiteLinkId, less chance of bugs from type of forgetting, more maintainable code(done)
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
  { id: 'wellfound', title: 'Wellfound', Icon: AngelListIcon, url: 'https://angel.co/u/moise-mulungu' },
  { id: 'medium', name: 'Medium', url: 'https://medium.com/@moisemlg90' },
  { id: 'twitter', name: 'Twitter', url: 'https://twitter.com/moise_mulungu' },
]
export const defaultFooterSocialLinkId = footerSocialLinks[0].id
