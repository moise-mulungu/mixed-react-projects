import { languageTitle, languages } from '@/constants/portfolio/index'

const Languages = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {languageTitle}
      </h2>
      <ul>
        {languages.map((language) => (
          <li key={language.id}>{language}</li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
