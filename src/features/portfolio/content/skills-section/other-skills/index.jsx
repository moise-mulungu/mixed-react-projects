import { otherSkillsTitle, otherSkills } from '@/constants/portfolio/content/skills'
import SkillData from '@/ui/empty-starter-component'

const OtherSkills = () => {
  return (
    <div className="other-skills">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {otherSkillsTitle}
      </h2>
      <ul>
        {otherSkills.map(({ name, Icon }) => (
          // MM: I will create a component for this
          <SkillData itemName={name} ItemIcon={Icon} />
        ))}
      </ul>
    </div>
  )
}

export default OtherSkills
