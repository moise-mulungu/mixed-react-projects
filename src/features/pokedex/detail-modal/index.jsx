import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { appTitle } from '@/constants/pokedex'

import Evolution from './evolution'

export default function DetailModal(props) {
  const { data, pokemon, setPokemon, open, setOpen } = props

  if (!pokemon) return null

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm md:max-w-md sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-32 w-32 rounded-full bg-green-100">
                    <img src={pokemon.img} />
                  </div>
                  <div className="mt-1 sm:mt-2">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center leading-6 font-medium text-gray-900"
                    ></Dialog.Title>
                    <div className="mt-2">
                      <div className="text-sm text-gray-500">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              {pokemon.name}
                            </h3>
                            <div className="mt-1 max-w-2xl text-xs text-gray-500">
                              <pre>
                                <ul>
                                  <li>num: {pokemon.num}</li>
                                  <li>height: {pokemon.height}</li>
                                  <li>weight: {pokemon.weight}</li>
                                </ul>
                              </pre>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">TYPE</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {pokemon.types.join(', ')}
                                </dd>
                              </div>
                              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">WEAKNESSES</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {pokemon.weaknesses.join(', ')}
                                </dd>
                              </div>

                              <Evolution
                                evolutionType="prev_evolution"
                                data={data}
                                pokemon={pokemon}
                                setPokemon={setPokemon}
                              />

                              <Evolution
                                evolutionType="next_evolution"
                                data={data}
                                pokemon={pokemon}
                                setPokemon={setPokemon}
                              />
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to the {appTitle}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
