import { otherSkillsTitle, otherSkills } from '../../../../../constants/portfolio/index'

const OtherSkills = () => {
  return (
    <div className="other-skills">
      <h2>{otherSkillsTitle}</h2>
      <ul>
        {otherSkills.map((skill) => (
          <li key={skill.id}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default OtherSkills
