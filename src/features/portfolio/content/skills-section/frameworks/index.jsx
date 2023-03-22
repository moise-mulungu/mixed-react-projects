import { frameworks, frameworkTitle } from '../../../../../../src/constants/portfolio/index'

const Frameworks = () => {
  return (
    <section>
      <h2>{frameworkTitle}</h2>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework.id}>{framework}</li>
        ))}
      </ul>
    </section>
  )
}

export default Frameworks
