import { useEffect, useState } from 'react'
import matchSorter from 'match-sorter'

import { isSubsetOf } from '@/utils/array'

import { appTitle } from '@/constants/pokedex'

import TableHeader from './table-header'
import TableBody from './table-body'

export default function Table(props) {
  const { data, types, weaknesses, setOpenDetail, setDetailPokemon } = props

  const [filteredData, setFilteredData] = useState(data)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedWeaknesses, setSelectedWeaknesses] = useState([])

  useEffect(() => {
    const hasSearchTerm = !!searchTerm
    const hasSelectedTypes = selectedTypes.length > 0
    const hasSelectedWeaknesses = selectedWeaknesses.length > 0

    // todoDM: write a comment justifying the use of 'let'
    let localFilteredData = data

    if (hasSearchTerm) {
      // fuzzy match, sorts by relevance
      localFilteredData = matchSorter([...localFilteredData], searchTerm, {
        keys: ['name'],
      })
    }
    if (hasSelectedTypes) {
      localFilteredData = localFilteredData.filter((pokemon) => {
        return isSubsetOf(selectedTypes, pokemon.types)
      })
    }
    if (hasSelectedWeaknesses) {
      localFilteredData = localFilteredData.filter((pokemon) => {
        return isSubsetOf(selectedWeaknesses, pokemon.weaknesses)
      })
    }

    setFilteredData(localFilteredData)
  }, [searchTerm, selectedTypes, selectedWeaknesses])

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-4">
      <div className="sm:flex sm:items-center">
        <h1 className="text-xl font-semibold text-gray-900">{appTitle}</h1>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <TableHeader
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  types={types}
                  selectedTypes={selectedTypes}
                  setSelectedTypes={setSelectedTypes}
                  weaknesses={weaknesses}
                  selectedWeaknesses={selectedWeaknesses}
                  setSelectedWeaknesses={setSelectedWeaknesses}
                />
                <TableBody
                  data={data}
                  filteredData={filteredData}
                  setOpenDetail={setOpenDetail}
                  setDetailPokemon={setDetailPokemon}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
