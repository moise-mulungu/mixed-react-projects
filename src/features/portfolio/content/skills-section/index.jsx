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
      <h2>{contentAboutHeaderText}</h2>
      <Divider />
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
