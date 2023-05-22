import { languageTitle, languages } from '@/constants/portfolio/content/skills'
import SkillData from '@/ui/empty-starter-component'

function Languages() {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {languageTitle}
      </h2>
      <ul>
        {languages.map(({ name, Icon }) => (
          <SkillData itemName={name} ItemIcon={Icon} />
        ))}
      </ul>
    </section>
  )
}

export default Languages
