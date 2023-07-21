import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
import ResumeButton from './resume-button'
import Languages from './languages'
import Frameworks from './frameworks'
import OtherSkills from './other-skills'

export default function SkillsSection(props) {
  const { _ = {} } = props
  return (
    <div className="">
      <div>
        <h2 className="mt-3 text-center sm:mt-5 ml-4 text-2xl font-medium text-gray-500 hover:text-gray-700">
          {contentAboutHeaderText}
        </h2>
      </div>
      <ResumeButton />
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        <Languages />
        <Frameworks />
        <OtherSkills />
      </div>
    </div>
  )
}

/* MM: ???toDM: what can be the better approach between these two components(SkillsSection, and SkillSection)? 
  In the first one, I used the data from each sub-skill component, and in the second one, I used the data from the skills complex object in which all the data is present.
  DM: todoMM: moise is this question current?
*/
