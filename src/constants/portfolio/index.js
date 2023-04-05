//DM: if any constant is shared among the sections or header, footer, or etc., then they should be here absolutely.

// MM: todoDM: I did not get any constants that is shared across, each component has its own constants. I see that you added social links here, so good job! (done)

// import { GithubIcon, LinkedInIcon, AngelListIcon, MediumIcon, TwitterIcon } from '@/ui/icons'

// export const topNavSiteLinks = [
//   { id: 'work', name: 'Portfolio', anchor: 'work' },
//   { id: 'about', name: 'About', anchor: 'about' },
//   { id: 'contact', name: 'Contact', anchor: 'contact' },
// ]

// export const defaultTopNavSiteLinkId = topNavSiteLinks[0].id

// export const theMan = 'Moise Mulungu'

import { GithubIcon, LinkedInIcon, AngelListIcon, MediumIcon, TwitterIcon } from '@/ui/icons'

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
// DM: yup, see, now you don't have 'githup' hard-coded. no "magic strings"!

// export const contentOverviewHeaderText = 'Hey there, I am Moise. a software developer'
// export const contentOverviewParagraphText =
//   'I can help you build a product, feature or website Look through some of my work experience! You like what you see and have a project you need coded, do not hesitate to contact me.'

// export const contentAboutHeaderText =
//   "Hello I am a software developer, I can help you build a product, feature or website. look through some of my work and experience. if you like what you see and have a project you need coded don't hesitate to contact me."

// export const frameworkTitle = 'Frameworks'
// export const frameworks = [
//   'React',
//   'Ruby on Rails',
//   'NodeJS',
//   'BooStrap',
//   'Capybara',
//   'RSpec',
//   'Selenium',
//   'PostgreSQL',
// ]

// export const languageTitle = 'Languages'
// export const languages = ['JavaScript', 'Ruby', 'SQL']

// export const otherSkillsTitle = 'Other Skills'
// export const otherSkills = [
//   'HTML',
//   'CSS',
//   'SASS',
//   'GraphQL',
//   'Git',
//   'GitHub',
//   'CodeLab',
//   'CodeLit',
//   'Terminal',
//   'VSCode',
//   'Jira',
//   'Slack',
// ]

// export const contentWorkHeaderText = 'My Recent Work'
// // DM: todoMM: this file is getting big, break it up into multiple files, in a way that makes sense, for example, one file for each section in the content area
// // DM: todoMM: don't hard-code an 'id' field if it is only for react key props. If another of the fields is unique, such as 'title', use that for the key prop. If not, use uuid package.
// export const projectCards = [
//   {
//     title: 'E-pay',
//     description:
//       'A daily money transaction application, This is a web application that helps you to manage your budget: You have a list of transactions associated with a category, so that you can see how much money you spent and on what',
//     image: 'portfolio.png',
//     url: 'https://render-e-pay.onrender.com/',
//     stacks: ['Ruby on Rails', 'Capybara', 'RSpec', 'Selenium', 'PostgreSQL', 'CSS'],
//   },
//   {
//     title: 'Meet Doctors',
//     description:
//       'A double single page app that connects doctors with patients. you can book an appointment with any doctor of your choice of any specialty from around the world with the possibility of paying your bill online',
//     image: 'portfolio.png',
//     url: 'https://meet-a-doctor.netlify.app/login',
//     stacks: [
//       'Ruby on Rails',
//       'React',
//       'Redux',
//       'CSS',
//       'Capybara',
//       'RSpec',
//       'Selenium',
//       'PostgreSQL',
//     ],
//   },
//   {
//     title: 'Relworx money',
//     description:
//       'This is an app that helps users to do their money transactions by sending, receiving any amount of with a default account of 100$.',
//     image: 'portfolio.png',
//     url: 'https://moise-mulungu.github.io/Relworx_Money/',
//     stacks: ['JavaScript', 'CSS'],
//   },
//   {
//     title: 'Math Magician',
//     description:
//       'A single Page Application with three pages, a home page , a calculator page for all mathematical operations, and a quote page with a wise quote from William Paul Thurston',
//     image: 'portfolio.png',
//     url: '',
//     stacks: ['React', 'CSS', 'Redux'],
//   },
//   {
//     title: 'Make Up App',
//     description:
//       'This makeup app allows you to get any makeup products online from different online bookstore, you can also get the best makeup artist in your area',
//     image: 'portfolio.png',
//     url: 'https://comfy-alpaca-a10613.netlify.app/',
//     stacks: ['React', 'Redux', 'CSS', 'RSpec'],
//   },
//   {
//     title: 'Bookstore',
//     description:
//       'A bookstore app that allows you to get any book online from different online bookstore',
//     image: 'portfolio.png',
//     url: 'https://animated-stroopwafel-ca252e.netlify.app/',
//     stacks: ['React', 'Redux', 'CSS', 'RSpec'],
//   },
// ]
