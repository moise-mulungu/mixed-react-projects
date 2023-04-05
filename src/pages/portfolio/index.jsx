// - next/head is a NextJs module that imports <Head> from, a built-in component in ReactJs that allows to modify the metadata of the page(<head>). source: https://nextjs.org/learn/basics/assets-metadata-css/metadata
import Head from 'next/head'

// DM: todoMM: this file is empty now
// As it's empty, can it be removed? No, that points to constants/portfolio/index.js, index.js should not be removed. I was just pointing out that .  appTitle does not exist. Look at the browser tab when you're on this page, you'll see that there is no title that you meant to put in the <title> tag</title>
import { appTitle } from '@/constants/portfolio'
import Portfolio from '@/features/portfolio'

// Static Site Generation - pre-render page at build time
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
  // const data = await getData()

  return {
    props: {
      // data,
    },
  }
}

// DM: always give a descriptive name to a Component - easier to find in React Dev Tools and other IDE tooling
export default function PortfolioTopLevelComponent(props) {
  const { data } = props

  return (
    <div>
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Portfolio data={data} />
    </div>
  )
}
