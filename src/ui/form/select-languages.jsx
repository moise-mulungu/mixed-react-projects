import React from 'react'

function SelectLanguages() {
  const [language, setLanguage] = React.useState('english')

  return (
    <>
      <form>
        <fieldset>
          <legend>Select language:</legend>

          {VALID_LANGUAGES.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name="current-language"
                id={option}
                value={option}
                checked={option === language}
                onChange={(event) => {
                  setLanguage(event.target.value)
                }}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
      </form>

      <p>
        <strong>Selected language:</strong>
        {language || 'undefined'}
      </p>
    </>
  )
}

const VALID_LANGUAGES = ['mandarin', 'spanish', 'english', 'hindi', 'arabic', 'portugese']

export default SelectLanguages
