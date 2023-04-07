import Head from 'next/head'
import UiExamples from '@/features/ui-examples'
import Link from '@/ui/link'

/*

For demonstrating usage of all components in src/ui

*/

// DM: todoDM: automatic breadcrumbs (for the title, also)

export default function UiExamplesPage() {
  return (
    <div className="m-4">
      <Head>
        <title>UI Examples</title>
      </Head>

      <UiExamples />
      <Link href="/">Internal</Link>
      <Link href="#">Anchor</Link>
      <Link href="https://nextjs.org/docs/api-reference/next/link">External</Link>
      {/* DM: todoMM: Great. Change the link texts so that they describe what kind of link each is, internal, anchor, external */}
    </div>
  )
}
