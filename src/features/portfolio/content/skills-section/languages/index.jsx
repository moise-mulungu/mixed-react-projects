import { languageTitle, languages } from '../../../../../constants/portfolio/index'

const Languages = () => {
  return (
        <section>
            <h2>{languageTitle}</h2>
            <ul>
                {languages.map((language) => (
                    <li key={language.id}>{language}</li>
                ))}
            </ul>
        </section>
  )
}

export default Languages
