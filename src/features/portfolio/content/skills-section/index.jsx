import { contentAboutHeaderText } from '../../../../../src/constants/portfolio/index'
import Button from './button'

const Skills = (props) => {
  const { _ = {} } = props
  return (
    <div className="use tw utility classes here">
      <h2>{contentAboutHeaderText}</h2>
      <Button />
    </div>
  )
}

export default Skills
