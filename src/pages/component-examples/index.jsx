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

      {/* DM: try this sometime: instead of a separate page, put a searchable dropdown here so it is easy to find an example by searching on the name of the example in the dropdown. You can use src/ui/form/dropdown to build the searchable dropdown. */}
      {/* <Dropdown
        props={
          <ul className="list-style-type: disc; ">
            <li>
              <Link href="/component-examples/component-example-pages-two">
                Component Examples 2
              </Link>
            </li>
          </ul>
        }
        MM: DM: when adding a Dropdown to the page, it does not render the link page, as the there is no option to add a link to the page. i am not sure what is the issue.
      /> */}
      <ul className="list-style-type: disc; ">
        <li>
          <Link href="/component-examples/component-example-pages-two">Component Examples 2</Link>
        </li>
      </ul>
      <ComponentExamples />
    </div>
  )
}
