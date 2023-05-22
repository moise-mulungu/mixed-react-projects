import { frameworks, frameworkTitle } from '@/constants/portfolio/content/skills'
import SkillData from '@/ui/empty-starter-component'

const Frameworks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {frameworkTitle}
      </h2>
      <ul>
        {frameworks.map(({ name, Icon }) => (
          <SkillData itemName={name} ItemIcon={Icon} />
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
