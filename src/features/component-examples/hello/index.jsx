export default function Hello(props) {
  const { name = 'Javascript', className } = props

  return <div className={`${className} `}>{`Hello ${name}!`}</div>
}
