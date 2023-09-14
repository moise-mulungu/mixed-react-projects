import Head from 'next/head'

import ComponentExamples from '@/features/component-examples'
import Heading from '@/ui/heading'
import Link from '@/ui//link'
import Dropdown from '@/ui/form/dropdown'

export default function ComponentExamplesPage() {
  return (
    <div className="m-4">
      <Head>
        <title>Component Examples</title>
      </Head>
      <Heading level="1">Component Examples</Heading>

      <ul className="list-style-type: disc; ">
        <li>
          <Link href="/component-examples/component-example-pages-two">Component Examples 2</Link>
        </li>
      </ul>
      <ComponentExamples />
    </div>
  )
}
