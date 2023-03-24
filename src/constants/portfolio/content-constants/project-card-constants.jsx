export const contentWorkHeaderText = 'My Recent Work'
// DM: todoMM: this file is getting big, break it up into multiple files, in a way that makes sense, for example, one file for each section in the content area
// DM: todoMM: don't hard-code an 'id' field if it is only for react key props. If another of the fields is unique, such as 'title', use that for the key prop. If not, use uuid package.
export const projectCards = [
  {
    title: 'E-pay',
    description:
      'A daily money transaction application, This is a web application that helps you to manage your budget: You have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    image: 'portfolio.png',
    url: 'https://render-e-pay.onrender.com/',
    stacks: ['Ruby on Rails', 'Capybara', 'RSpec', 'Selenium', 'PostgreSQL', 'CSS'],
  },
  {
    title: 'Meet Doctors',
    description:
      'A double single page app that connects doctors with patients. you can book an appointment with any doctor of your choice of any specialty from around the world with the possibility of paying your bill online',
    image: 'portfolio.png',
    url: 'https://meet-a-doctor.netlify.app/login',
    stacks: [
      'Ruby on Rails',
      'React',
      'Redux',
      'CSS',
      'Capybara',
      'RSpec',
      'Selenium',
      'PostgreSQL',
    ],
  },
  {
    title: 'Relworx money',
    description:
      'This is an app that helps users to do their money transactions by sending, receiving any amount of with a default account of 100$.',
    image: 'portfolio.png',
    url: 'https://moise-mulungu.github.io/Relworx_Money/',
    stacks: ['JavaScript', 'CSS'],
  },
  {
    title: 'Math Magician',
    description:
      'A single Page Application with three pages, a home page , a calculator page for all mathematical operations, and a quote page with a wise quote from William Paul Thurston',
    image: 'portfolio.png',
    url: '',
    stacks: ['React', 'CSS', 'Redux'],
  },
  {
    title: 'Make Up App',
    description:
      'This makeup app allows you to get any makeup products online from different online bookstore, you can also get the best makeup artist in your area',
    image: 'portfolio.png',
    url: 'https://comfy-alpaca-a10613.netlify.app/',
    stacks: ['React', 'Redux', 'CSS', 'RSpec'],
  },
  {
    title: 'Bookstore',
    description:
      'A bookstore app that allows you to get any book online from different online bookstore',
    image: 'portfolio.png',
    url: 'https://animated-stroopwafel-ca252e.netlify.app/',
    stacks: ['React', 'Redux', 'CSS', 'RSpec'],
  },
]
