import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
import Divider from '@/ui/divider'
import ResumeButton from './resume-button'
import Languages from './languages'
import Frameworks from './frameworks'
import OtherSkills from './other-skills'

export default function SkillsSection(props) {
  // DM: always using function declarations, for consistency (not arrow functions)
  const { _ = {} } = props
  return (
    <div className="use tw utility classes here">
      <h2 className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
        {contentAboutHeaderText}
      </h2>
      <ResumeButton />
      <Divider />
      <Languages />
      <Divider />
      <Frameworks />
      <Divider />
      <OtherSkills />
    </div>
  )
}
