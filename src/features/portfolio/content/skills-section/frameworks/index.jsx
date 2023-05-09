import { frameworks, frameworkTitle } from '@/constants/portfolio/content/skills'

const Frameworks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
        {frameworkTitle}
      </h2>
      <ul>
        {frameworks.map(({ name, Icon }) => (
          // <li key={framework}>{framework}</li>

          <li key={name}>
            <a
              href="#"
              className="bg-gray-100 text-gray-700 group flex items-center px-4 py-2 text-sm"
            >
              {Icon ? (
                <Icon
                  className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              ) : null}
              {name ? name : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
