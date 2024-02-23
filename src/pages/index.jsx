import Link from '@/ui/link'

export default function Pages() {
  return (
    <div className="m-4">
      <h1>All the things!</h1>

      <ul className="list-style-type: disc; list-style-position: inside;">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/component-examples">Component Examples</Link>
        </li>
        <li>
          <Link href="/ui-examples">UI Examples</Link>
        </li>
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/react-games">React Games</Link>
        </li>
        <li>
          {/* good organization */}
          <Link href="/react-custom-hooks">React Custom Hooks</Link>
        </li>
        <li>
          <Link href="/string-converter">String Converter</Link>
        </li>
        <li>
          <Link href="/weather-forecast-page">Weather Forecast</Link>
        </li>
        <li>
          <Link href="/quiz">Quiz App With Timer</Link>
        </li>
        <li>
          <Link href="/real-time-chat">Real Time Chat</Link>
        </li>
        <li>
          <Link href="/solidarity-collect-fund-page">Solidarity Collect Fund</Link>
        </li>
        <li>
          <Link href="/custom-error">Custom Error</Link>
        </li>
        <li>
          <Link href="/firebase-subcollections">Operating System</Link>
        </li>
      </ul>
    </div>
  )
}
