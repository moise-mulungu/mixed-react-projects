// DM: todoMM: replace all ../../../.. with @
import { projectCards } from '@/constants/portfolio/content-constants/project-card-constants'
import Divider from '@/ui/divider'
// DM: todoDM: find out why you can't click on projectCards to go to the file if @ is used
import CardHeadings from './card-texts'
const ProjectCard = () => {
  return (
    <div className="tailwind-class-uploading">
      <CardHeadings />
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
