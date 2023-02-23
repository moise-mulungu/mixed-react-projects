import Head from 'next/head'
import TestExample from '@/features/component-examples/test-example'



export default function ComponentExamples(props) {
  const { data } = props

  return (
    <div>
      <Head>
        <title>Component Examples - Test Example</title>
      </Head>

      <TestExample person={"Moise"}/>
    </div>
  )
}
