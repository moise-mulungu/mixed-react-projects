//(done) DM: todoMM: please remove "constants" from all directory and file names in the constants/portfolio directory tree. Sorry, seems pedantic, but it is a really good rule to follow. the DRY principle: don't repeat yourself.
export const topNavSiteLinks = [
  { id: 'work', name: 'Portfolio', anchor: 'work' },
  { id: 'about', name: 'About', anchor: 'about' },
  { id: 'contact', name: 'Contact', anchor: 'contact' },
]

export const defaultTopNavSiteLinkId = topNavSiteLinks[0].id

export const theMan = 'Moise Mulungu'
