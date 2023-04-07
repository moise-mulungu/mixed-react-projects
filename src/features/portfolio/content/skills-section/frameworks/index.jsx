import { frameworks, frameworkTitle } from '@/constants/portfolio/content/skills'

const Frameworks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {frameworkTitle}
      </h2>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
