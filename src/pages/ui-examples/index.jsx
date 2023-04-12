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
    </div>
  )
}
