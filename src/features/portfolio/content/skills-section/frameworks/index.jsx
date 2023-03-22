import frameworks from '../../../../../../src/constants/portfolio/index'

const Frameworks = () => {
  return (
    <ul>
        {frameworks.map((framework) => (
            <li key={framework.id}>
                <img src={framework.image} alt={framework.name} />
            </li>
        ))}
    </ul>
  )
}

export default Frameworks
