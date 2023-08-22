import Head from 'next/head'

import ComponentExamples from '@/features/component-examples'
import Heading from '@/ui/heading'
import Link from '@/ui//link'

export default function ComponentExamplesPage() {
  return (
    <div className="m-4">
      <Head>
        <title>Component Examples</title>
      </Head>
      <Heading level="1">Component Examples</Heading>

      {/*(in progress) DM: try this sometime: instead of a separate page, put a searchable dropdown here so it is easy to find an example by searching on the name of the example in the dropdown. You can use src/ui/form/dropdown to build the searchable dropdown. */}
      <ul className="list-style-type: disc; ">
        <li>
          <Link href="/component-examples/component-examples-two">Component Examples 2</Link>
        </li>
      </ul>

      <ComponentExamples />
    </div>
  )
}
