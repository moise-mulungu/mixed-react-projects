import Head from 'next/head'

import { appTitle } from '@/constants/pokedex'

import getData from '@/server/features/pokemon/get-data'
import Pokedex from '@/features/pokedex'

// Static Site Generation - pre-render page at build time
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
  const data = await getData()

  // get unique list of types
  const typesSet = new Set()
  for (const { types } of data) {
    types.reduce((typesSet, type) => typesSet.add(type), typesSet)
  }

  // get unique list of weaknesses
  const weaknessesSet = new Set()
  for (const { weaknesses } of data) {
    weaknesses.reduce((weaknessesSet, weakness) => weaknessesSet.add(weakness), weaknessesSet)
  }

  return {
    props: {
      data,
      types: [...typesSet].sort(),
      weaknesses: [...weaknessesSet].sort(),
    },
  }
}

export default function Index(props) {
  const { data, types, weaknesses } = props

  return (
    <div>
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Pokedex data={data} types={types} weaknesses={weaknesses} />
    </div>
  )
}
