import Head from 'next/head'
import Link from '@/ui/link'

/*

DM: todoMM: add a new test example component that says "Hello, Duncan!", using what I've done so far as an example.
i.e., first, add another link below:
<Link href={'/component-examples/test-example2'}>Test Example 2</Link>
then create the component at that link by copying everything I did exactly, then change only the text "Moise" to "Duncan"
there should be a new file:
src/features/component-examples/test-example2/index.jsx

after you do that, I can give you practical React exercises, and you will have a library of solutions at your fingertips!

*/


export default function ComponentExamples(props) {
  const { data } = props

  return (
    <div>
      <Head>
        <title>Component Examples</title>
      </Head>
      {/* DM todoMM: later: choose from TWui a layout/grid to hold these example links */}
      {/* DM todoDM: maybe show each example in a (pop-up) modal? instead of linking */}
      <Link href={'/component-examples/test-example'}>Test Example</Link>
      <Link href={'/component-examples/test-example2'}>Test Example 2</Link>
    </div>
  )
}
