// arquero is a useful data manipulating library built by the brains at
// https://uwdata.github.io/arquero/api/
// I discuss arquero briefly on my blog:
// https://www.vocabularyof.tech/apps/covid-chart-analysis#tools-and-technical-details
import * as aq from 'arquero'

// explore the dataset: https://data.world/dmckeeve/pokedex/workspace/data-dictionary
// if you don't have a
// login to data.world, then see example screen shot in
// /project-info/data-exploration.png
const dataURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

export default async function getData() {
  const table = await aq.from(
    await fetch(dataURL)
      .then(async (res) => {
        const body = await res.json()
        return body.pokemon
      })
      .catch((err) => {
        return { status: 500, error: err }
      }),
    [
      'id',
      'num',
      'name',
      'img',
      'type',
      'height',
      'weight',
      'candy',
      'candy_count',
      'egg',
      'spawn_chance',
      'avg_spawns',
      'spawn_time',
      'multipliers',
      'weaknesses',
      'next_evolution',
      'prev_evolution',
    ]
  )

  return table
    .derive({
      // undefined (missing) to null to avoid serialization error in getStaticProps
      candy_count: (d) => (d.candy_count === undefined ? null : d.candy_count),
      next_evolution: (d) => (d.next_evolution === undefined ? null : d.next_evolution),
      prev_evolution: (d) => (d.prev_evolution === undefined ? null : d.prev_evolution),
    })
    .rename({
      // 'types' makes more sense than 'type' because it is a list and would likely
      // lead to typos and unnecessary cognitive load (everyone has to remember
      // that type is really a list)
      type: 'types',
    })
    .objects()
}
