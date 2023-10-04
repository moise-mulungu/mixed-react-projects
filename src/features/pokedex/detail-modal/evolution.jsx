import { useState, useEffect } from "react";

export default function Evolution(props) {
  const { evolutionType, data, pokemon, setPokemon } = props;

  const evolution = pokemon[evolutionType];

  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500 uppercase ">
        {evolutionType.split("_").join(" ")}
      </dt>
      <dd className="mt-1 ml-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {evolution ? (
          <>
            <ul
              role="list"
              className="border border-gray-200 rounded-md divide-y divide-gray-200"
            >
              {evolution.map((evolutionPokemonInfo) => {
                const evolutionPokemon = data.find(
                  (p) => p.num === evolutionPokemonInfo.num
                );
                return (
                  <li
                    key={evolutionPokemon.num}
                    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                  >
                    <div className="w-0 flex-1 flex items-center">
                      <button
                        title="click to view details"
                        className="p-1 hover:bg-blue-100 rounded"
                        onClick={() => {
                          setPokemon(evolutionPokemon);
                        }}
                      >
                        <div className="flex items-center h-10 w-10 rounded-full ">
                          <img src={evolutionPokemon.img} />
                          <span className="underline ml-1">
                            {evolutionPokemon.name}
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className="ml-4 flex-shrink-0"></div>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <span className="p-4">none</span>
        )}
      </dd>
    </div>
  );
}
