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
      {/* 
       DM: '@/features/component-examples/test-example2' is the same as '@/features/component-examples/test-example'
       DM: todoMM: try <TestExample person={'Duncan'} />
                   as you can now realize, my instructions were not the best way to do it
      */}
      <TestExample2 person={'Duncan'} />
    </div>
  )
}
