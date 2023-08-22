import Head from 'next/head'
import ComponentExamplesTwo from '@/features/component-examples/component-examples-two'
import ComponentExamples from '@/features/component-examples'

//(ok) DM: default function name should match the file|directory name
export default function ComponentExamplePagesTwo() {
  return (
    <div>
      <Head>
        <title>Component Examples 2</title>
      </Head>
      <ComponentExamplesTwo />
    </div>
  )
}
