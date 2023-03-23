import { projectCards } from '../../../../constants/portfolio'
import CardTexts from './card-texts'
const ProjectCard = () => {
  return (
    <div className="tailwind-class-uploading">
      <CardTexts />
      <ul>
        {projectCards.map((id, title, description, image, url, stacks) => {
          return (
            <li key={id}>
              <title>{title}</title>
              <p>{description}</p>
              <img src={image} alt="" />
              <p>{url}</p>
              <div>
                {stacks?.map((stack) => {
                  ;<li key={stack}>{stack}</li>
                })}
              </div>
              // i am getting undefined whe trying to map through stacks
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectCard
