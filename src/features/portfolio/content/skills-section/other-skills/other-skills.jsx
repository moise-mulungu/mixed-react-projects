import {
  otherSkillsTitle,
  otherSkills,
} from '@/constants/portfolio/content-constants/skill-constants'

const OtherSkills = () => {
  return (
    <div className="other-skills">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {otherSkillsTitle}
      </h2>
      <ul>
        {otherSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default OtherSkills
