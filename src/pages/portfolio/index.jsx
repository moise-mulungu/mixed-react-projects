import Head from 'next/head' // - next/head is a NextJs module that imports <Head> from, a built-in component in ReactJs that allows to modify the metadata of the page(<head>). source: https://nextjs.org/learn/basics/assets-metadata-css/metadata

import { appTitle } from '@/constants/portfolio' // DM: let's use this one repo for multiple projects
import Portfolio from '@/features/portfolio' // DM: let's use this one repo for multiple projects

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

export default function Index(props) {
  let { data } = props

  return (
    <div>
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Portfolio data={data} />
    </div>
  )
}
