import { otherSkillsTitle, otherSkills } from '@/constants/portfolio/content/skills'
import SkillData from '@/ui/empty-starter-component'

const OtherSkills = () => {
  return (
    <div>
      <h2 className="text-gray-700 group flex items-center px-4 py-2 text-3xl">
        {otherSkillsTitle}
      </h2>
      <ul className="relative inline-block right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {otherSkills.map(({ name, Icon }) => (
          <SkillData itemName={name} ItemIcon={Icon} />
        ))}
      </ul>
    </div>
  )
}

export default OtherSkills
