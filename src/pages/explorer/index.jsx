import Head from 'next/head'
import Explorer from '@/features/explorer'
import { appTitle } from '@/constants/explorer'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Explorer />
    </div>
  )
}
