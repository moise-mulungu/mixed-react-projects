import Head from 'next/head'
import TestExample from '@/features/component-examples/test-example'
import TestExample2 from '@/features/component-examples/test-example2'



export default function ComponentExamples(props) {
  const { data } = props

  return (
    <div>
      <Head>
        <title>Component Examples - Test Example</title>
      </Head>

      <TestExample person={'Moise'} />
      <TestExample2 person={'Duncan'} />
    </div>
  )
}
