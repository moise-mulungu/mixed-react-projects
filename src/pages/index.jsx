import Link from '@/ui/link'

export default function Pages() {
  return (
    <div className="m-4">
      <h1>All the things!</h1>
      {/* DM: todoMM: add links for all items at this same level in the pages dir. ex: portfolio, component-examples (not explorer) */}
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/component-examples">Component Examples</Link>
      <br /> {/* don't do this! */}
      <Link href="/ui-examples">UI Examples</Link>
    </div>
  )
}
