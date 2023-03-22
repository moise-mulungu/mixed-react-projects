import { contentAboutHeaderText } from '../../../../../src/constants/portfolio/index'
import Button from './button'
import Languages from './languages'
import Frameworks from './frameworks'
import OtherSkills from './other-skills/other-skills'
import Divider from '../../../../ui/divider'

const Skills = (props) => {
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

export default Skills
