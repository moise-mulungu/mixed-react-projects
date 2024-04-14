import { useState, useEffect } from "react";

export default function TableBody(props) {
  const { data, filteredData, setOpenDetail, setDetailPokemon } = props;

  return (
    <>
      <tbody className="divide-y divide-gray-200 bg-white">
        {filteredData.length === 0 ? (
          <tr>
            <td className="text-center" colSpan="4">
              No results, please select fewer filters
            </td>
          </tr>
        ) : (
          filteredData.map((pokemon) => (
            <tr key={pokemon.num}>
              <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                <button
                  title="click to view details"
                  className="p-1 hover:bg-blue-100 rounded"
                  onClick={() => {
                    setDetailPokemon(pokemon);
                    setOpenDetail(true);
                  }}
                >
                  <div className="flex items-center h-10 w-10 rounded-full ">
                    <img src={pokemon.img} />
                    <span className="underline ml-1">{pokemon.name}</span>
                  </div>
                </button>
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">{pokemon.num}</td>
              <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                {pokemon.types.join(" ")}
              </td>
              <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                {pokemon.weaknesses.join(" ")}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </>
  );
}
