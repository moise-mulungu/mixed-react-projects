import Head from 'next/head'
import ComponentExamples from '@/features/component-examples'

/* 

DM: todoDM: start a portfolio main template for stuff like <div className="m-4"> which is common to each page

*/

export default function ComponentExamplesPage() {
  return (
    <div className="m-4">
      <Head>
        <title>Component Examples</title>
      </Head>

      <ComponentExamples />
    </div>
  )
}
