import { projectCards } from '@/constants/portfolio/content/project-cards'
import Divider from '@/ui/divider'
// DM: todoDM: find out why you can't click on projectCards to go to the file if @ is used
import CardHeading from './card-heading'
const ProjectCard = () => {
  return (
    <div className="tailwind-class-uploading">
      <CardHeading />
      <ul>
        {projectCards.map(({ title, description, image, url, stacks }) => {
          return (
            <>
              <li key={title}>
                <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:truncate sm:text-1xl sm:tracking-tight">
                  {title}
                </h2>
                <p>{description}</p>
                <img src={image} alt="" />
                <a href={url}>
                  <button
                    type="button"
                    className="rounded-md bg-indigo-50 py-2.5 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                  >
                    <span>View Project</span>
                    {/* <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> */}
                  </button>
                </a>
                <ul>
                  {' '}
                  Built with:
                  {stacks?.map((stack) => {
                    return <li key={stack}>{stack}</li>
                  })}
                </ul>
              </li>
              <Divider />
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectCard

export const files = [
  {
    title: 'E-pay',
    description:
      'A daily money transaction application, This is a web application that helps you to manage your budget: You have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    url: 'https://render-e-pay.onrender.com/',
    stacks: ['Ruby on Rails', 'Capybara', 'RSpec', 'Selenium', 'PostgreSQL', 'CSS'],
  },
  {
    title: 'Meet Doctors',
    description:
      'A double single page app that connects doctors with patients. you can book an appointment with any doctor of your choice of any specialty from around the world with the possibility of paying your bill online',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
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
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    url: 'https://moise-mulungu.github.io/Relworx_Money/',
    stacks: ['JavaScript', 'CSS'],
  },
  {
    title: 'Math Magician',
    description:
      'A single Page Application with three pages, a home page , a calculator page for all mathematical operations, and a quote page with a wise quote from William Paul Thurston',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    url: '',
    stacks: ['React', 'CSS', 'Redux'],
  },
  {
    title: 'Make Up App',
    description:
      'This makeup app allows you to get any makeup products online from different online bookstore, you can also get the best makeup artist in your area',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    url: 'https://comfy-alpaca-a10613.netlify.app/',
    stacks: ['React', 'Redux', 'CSS', 'RSpec'],
  },
  {
    title: 'Bookstore',
    description:
      'A bookstore app that allows you to get any book online from different online bookstore',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    url: 'https://animated-stroopwafel-ca252e.netlify.app/',
    stacks: ['React', 'Redux', 'CSS', 'RSpec'],
  },
]
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const files = [
//   {
//     title: 'E-Pay',
//     description:
//       'This is an app that helps users to do their money transactions by sending, receiving any amount of with a default account of 100$.',
//     image: 'portfolio.png',
//     url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
//   {
//     title: 'Meet Doctors',
//     description:
//       'A double single page app that connects doctors with patients. you can book an appointment with any doctor of your choice of any specialty from around the world with the possibility of paying your bill online',
//     image: 'portfolio.png',
//     url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
//   {
//     title: 'Relworx Money',
//     description:
//       'This is an app that helps users to do their money transactions by sending, receiving any amount of with a default account of 100$.',
//     image: 'portfolio.png',
//     url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
//   {
//     title: 'Math_Magician',
//     description: '4.1 MB',
//     url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
//   {
//     title: 'Bookstore',
//     description: '4.1 MB',
//     url: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
// ]

export function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.title} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.image}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.description}
          </p>
          <ul>
            {' '}
            Built with:
            {files.stacks?.map((stack) => {
              return <li key={stack}>{stack}</li>
            })}
          </ul>
          <a href={file.url}>
            <button
              type="button"
              className="rounded-md bg-indigo-50 py-2.5 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            >
              <span>View Project</span>
              {/* <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> */}
            </button>
          </a>
        </li>
      ))}
    </ul>
  )
}

// I am still working on this component, trying to find a better design from tailwind.
