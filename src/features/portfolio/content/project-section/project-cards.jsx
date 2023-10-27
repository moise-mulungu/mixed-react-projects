// import { projectCardsData, projectCardText } from '@/constants/portfolio/content/project-cards'
// import CardsHeading from './card-heading'
// import Popup from 'reactjs-popup'

// const ProjectCards = () => {
//   return (
//     <section className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <div className="text-base font-semibold leading-7 text-indigo-600">
//             <CardsHeading />
//           </div>
//           <p className="mt-6 text-lg leading-8 text-gray-600">{projectCardText}</p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none ">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
//             {projectCardsData.map(({ title, description, image, url, stack }) => {
//               return (
//                 <div key={title} className="flex flex-col hover:bg-green-600">
//                   <dt className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-gray-900">
//                     {title}
//                   </dt>
//                   <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
//                     <p className="flex-auto font-semibold">{description}</p>
//                     <img
//                       className="aspect-[3/2] w-full rounded-2xl object-cover border-2"
//                       src={image}
//                       alt=""
//                     />
//                     <div className="mt-6">
//                       <ul>
//                         {''}
//                         <Popup
//                           trigger={
//                             <button type="button" className="text-sm font-semibold leading-6">
//                               Built with:{' '}
//                             </button>
//                           }
//                         >
//                           <div className="absolute ml-48 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {stack?.map((stackItem) => {
//                               return (
//                                 <li
//                                   className="block px-4 py-2  text-gray-800 group-hover:text-gray-500"
//                                   key={stackItem}
//                                 >
//                                   {stackItem}
//                                 </li>
//                               )
//                             })}
//                           </div>
//                         </Popup>
//                       </ul>
//                       <a href={url}>
//                         <button
//                           type="button"
//                           className="text-sm font-semibold leading-6 text-indigo-600"
//                         >
//                           view project <span aria-hidden="true">→</span>
//                         </button>
//                       </a>
//                     </div>
//                   </dd>
//                 </div>
//               )
//             })}
//           </dl>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default ProjectCards

/*
While your current code seems pretty fine, here are a few potential improvements:

1. You can create a new component for project cards to make the code cleaner and facilitate reusability.

2. Alt attribute for the <img> tag is empty. It's best to provide a meaningful description because it improves accessibility and SEO.

3. Also, adding a single space '' inside the <ul> tag looks incorrect and unnecessary.

Here, I have used spread attributes in React, which is a useful feature to pass down properties to child components.
Here's a refactor of your code with these points in mind:
*/

// ```jsx
// import Image from 'next/image'
import { projectCardsData, projectCardText } from '@/constants/portfolio/content/project-cards'
import CardsHeading from './card-heading'
import Popup from 'reactjs-popup'

const PopupButton = ({ stack }) => (
  <Popup
    trigger={
      <button type="button" className="text-sm font-semibold leading-6">
        Built with:
      </button>
    }
  >
    <div className="absolute ml-48 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {stack?.map((stackItem) => (
        <li className="block px-4 py-2  text-gray-800 group-hover:text-gray-500" key={stackItem}>
          {stackItem}
        </li>
      ))}
    </div>
  </Popup>
)

// const ProjectCard = ({ title, description, image, url, stack }) => (

//   <div
//     key={title}
//     className="m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//   >
//     <dt className="font-medium text-lg text-gray-700">{title}</dt>
//     <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
//       <p className="text-sm text-gray-600">{description}</p>
//       <img
//         className="aspect-[3/2] w-full rounded-2xl object-cover border-2"
//         src={image}
//         alt={description}
//       />
//       <div className="mt-6">
//         <ul>
//           <PopupButton stack={stack} />
//         </ul>
//         <a href={url}>
//           <button type="button" className="text-sm font-semibold leading-6 text-indigo-600">
//             View Project <span aria-hidden="true">→</span>
//           </button>
//         </a>
//       </div>
//     </dd>
//   </div>
// )

const ProjectCard = ({ title, description, image, url, stack }) => (
  <div
    key={title}
    className="m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  >
    <dt className="text-2xl font-bold text-gray-700">{title}</dt>
    <dd className="mt-4 flex flex-col text-base leading-7 text-gray-600">
      <p className="text-sm text-gray-600">{description}</p>
      <div className="relative h-56 w-full">
        <img
          className="rounded-2xl object-cover border-2 border-gray-300"
          layout="fill"
          objectfit="cover"
          src={image || url}
          alt={description}
        />
      </div>
      <div className="mt-6">
        <ul>
          <PopupButton stack={stack} />
        </ul>
        <a href={url}>
          <button type="button" className="text-sm font-semibold leading-6 text-indigo-600">
            View Project <span aria-hidden="true">→</span>
          </button>
        </a>
      </div>
    </dd>
  </div>
)

const ProjectCards = () => (
  <section className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <div className="text-base font-semibold leading-7 text-indigo-600">
          <CardsHeading />
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">{projectCardText}</p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none ">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {/* {projectCardsData.map((card) => (
            <ProjectCard {...card} />
          ))} */}
          {projectCardsData.map((card) => {
            console.log({ card })
            // (done)DM: the [].map function takes "positional parameters" (item, index, array) and you are using the index as the key. The 2nd parameter is always the index, no matter what you name it. So, you're still using index as the key prop. This is not recommended.  See https://reactjs.org/docs/lists-and-keys.html#keys DM: you haven't addressed the issue which is that the 2nd (positional) param to the map callback is the index, no matter what you name it. You are still using an index. putting it inside a string starting with 'card-' doesn't change that. MM: after consoling, i realized that it was easy to use title as key by accessing with card object parameter
            // related article: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
            return <ProjectCard ProjectCard key={card.title} {...card} />
          })}
        </dl>
      </div>
    </div>
  </section>
)

export default ProjectCards
// ```
