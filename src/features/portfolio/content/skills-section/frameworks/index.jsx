import { frameworks, frameworkTitle } from '@/constants/portfolio/content-constants/skill-constants'
// DM: you can use the '@/constants/portfolio/index

const Frameworks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {frameworkTitle}
      </h2>
      <ul>
        {/* 
            framework.id will always be undefined, because 'id'' doesn't exist because frameworks is an array of strings
            since you know that all the frameworks are unique, you can just use 'framework' for the key prop
            same goes for languages and otherSkills
            i thought 'id' would be generated automatically by map function.
           */}
        {frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
