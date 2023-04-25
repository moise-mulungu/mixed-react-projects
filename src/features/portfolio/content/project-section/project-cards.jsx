//(done) DM: todoMM: please put something by each of the todoMMs in the import area, so I know how to proceed.
//(done) DM: todoMM: think about each of my instructions below noticing what extra information the requested changes will give me, the reader. These changes may seem small, but they convey a lot of information to the reader.
//(done) DM: todoMM: rename projectCards to projectCardsData, so that we can use "projectCards" as a variable name in this file.
import { projectCardsData, projectCardText } from '@/constants/portfolio/content/project-cards'
import CardsHeading from './card-heading'
import Divider from '@/ui/divider'
//(done) DM: todoDM: find out why you can't ctrl-click on projectCards to go to the file if @ is used

//(done) DM: todoMM: variable naming: you have one header for all the cards, so CardsHeading would be the better name. Otherwise, I the reader ask myself: is this a heading for each cart?
// DM: todoMM: have the component name match the filename (it is correctly plural)

//(done) DM: todoMM: is this something you can put in constants? especially because it is shared (I see you exported it)
//(done) DM: todoMM: can the name of the variable be more specific? The name doesn't tell me what it contains.

//(done) DM: todoMM: name should sync with the filename
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
            {projectCardsData.map(({ title, description, image, url, stackItem }) => {
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
                      <a href={url}>
                        <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          view project <span aria-hidden="true">→</span>
                        </button>
                      </a>
                      <ul>
                        {' '}
                        {stackItem?.map((stack) => {
                          return <li key={stack}>{stack}</li>
                        })}
                      </ul>
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

// I am still working on this component, trying to find a better design from tailwind.

{
  /* ???DM: I want to use dropdowns for stackItem as it is with Example component 
DM: best to not used dropdowns. dropdowns are for selecting one item from a list, not for displaying. I think it is fine to just display them. Later, you might want to do something like:
principal stack item 1
principal stack item 2
more .. clicking this would activate a popover that lists ALL the stack items (which can get repetitive. is avoiding all the repetition why you wanted to hide some of the stack items in a dropdown?)(read)
*/
}
{
  /* DM: todoMM: since this data is under your control, you won't need a "?" in the line below. If you have a project without a stack, then use an empty array "[]" - that way stackItem will already exist.  */
}
