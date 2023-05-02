import { projectCardsData, projectCardText } from '@/constants/portfolio/content/project-cards'
import CardsHeading from './card-heading'
// import Divider from '@/ui/divider'
import Popup from 'reactjs-popup'
// import { Accordion, AccordionItem } from '@szhsin/react-accordion'
// DM: todoDM: find out why you can't ctrl-click on projectCards to go to the file if @ is used

const ProjectCards = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            <CardsHeading />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{projectCardText}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {projectCardsData.map(({ title, description, image, url, stack }) => {
              return (
                <div key={title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-gray-900">
                    {title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto font-semibold">{description}</p>
                    <img
                      className="aspect-[3/2] w-full rounded-2xl object-cover"
                      src={image}
                      alt=""
                    />
                    <p className="mt-6">
                      <ul>
                        {''}
                        <Popup
                          trigger={
                            <button type="button" className="text-sm font-semibold leading-6">
                              Built with:{' '}
                            </button>
                          }
                        >
                          <div className="absolute ml-48 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {stack?.map((stack) => {
                              return (
                                <li
                                  className="block px-4 py-2  text-gray-800 group-hover:text-gray-500"
                                  key={stack}
                                >
                                  {stack}
                                </li>
                              )
                            })}
                          </div>
                        </Popup>
                        {/* <Accordion>
                          <button className="text-sm font-semibold leading-6">Built with: </button>
                          <div className="absolute ml-48 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {stack?.map((stack) => {
                              return (
                                <AccordionItem>
                                  <li
                                    className="block px-4 py-2  text-gray-800 group-hover:text-gray-500"
                                    key={stack}
                                  >
                                    {stack}
                                  </li>
                                </AccordionItem>
                              )
                            })}
                          </div>
                        </Accordion>
                        ???DM: i am trying to use accordions in the above example, but it does not render properly, i don't how to fix it */}
                      </ul>
                      <a href={url}>
                        <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          view project <span aria-hidden="true">→</span>
                        </button>
                      </a>
                    </p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
export default ProjectCards

//MM:  I am still working on this component, trying to find a better design from tailwind.

{
  /* <div className="absolute ml-48 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {stack?.map((stack) => {
                                return (
                                  <li
                                    className="block px-4 py-2  text-gray-800 group-hover:text-gray-500"
                                    key={stack}
                                  >
                                    {stack}
                                  </li>
                                )
                              })}
                            </div> */
}
