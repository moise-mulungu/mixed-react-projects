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
      <Link href="/">Home</Link>
      <Link href="#">same page</Link>
      <Link href="https://nextjs.org/docs/api-reference/next/link">next-link</Link>
      {/* I am not sure if that's how i should call this component three times to represent the three link types. For each one, you will pass different values for the "href" prop. each value should correspond to the logical-expression variables in Link: isInternalLink, isAnchorLink, and the default (external link)  */}
    </div>
  )
}
