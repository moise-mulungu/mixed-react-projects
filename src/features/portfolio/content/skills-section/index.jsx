import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
import Divider from '@/ui/divider'
import Button from './button'
import Languages from './languages'
import Frameworks from './frameworks'
//(done) DM: todoMM: './other-skills' //  index.js
import OtherSkills from './other-skills'

const SkillsSection = (props) => {
  const { _ = {} } = props
  return (
    <div className="use tw utility classes here">
      <h2 className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
        {contentAboutHeaderText}
      </h2>
      <Button />
      <Divider />
      <Languages />
      <Divider />
      <Frameworks />
      <Divider />
      <OtherSkills />
    </div>
  )
}

//(done) DM: todoMM: func name to match directory name
export default SkillsSection
