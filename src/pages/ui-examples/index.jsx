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
      {/* DM: todoMM: put this in it's own features/ui-examples/two-factor/index.jsx, following the examples already done. It is really important to follow the patterns set up, so that people don't get confused. For example, I wrote in this file a detailed todoMM about not using <Head></Head> outside of the src/pages directory, because, seeing <Link> I assumed this file was in the features directory. We all make assumptions when we're going fast. In this case I assumed this file was in the features directory ... so it uses up time I could be dedicating to more important stuff. Not trying to scold you, just emphasizing why these patterns I've set up are so important to follow. Your questions and issues are getting more and more advanced, so we have to ensure that I can spend all of my time on them and work fast, and that my assumptions based on what I see are always correct. Hope that makes sense. */}
      <Link href="/">Internal</Link>
      <Link href="#">Anchor</Link>
      <Link href="https://nextjs.org/docs/api-reference/next/link">External</Link>
      {/* DM: todoMM: Great. Change the link texts so that they describe what kind of link each is, internal, anchor, external */}
    </div>
  )
}
