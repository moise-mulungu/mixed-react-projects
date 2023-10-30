// src: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react'
import { foods, filterItems } from './data.js'

export default function FilterableList() {
  // move a query state to the parent
  const [query, setQuery] = useState('')

  function handleChange(e) {
    setQuery(e.target.value)
  }
  return (
    <>
      {/* <SearchBar /> */}
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      {/* <List items={foods} /> */}
      <List items={filteredFoods} />
    </>
  )
}

// function SearchBar() {
function SearchBar({ query, handleChange }) {
  //   const [query, setQuery] = useState(''); remove the query state from the child

  //   function handleChange(e) {
  //     setQuery(e.target.value)
  //   }

  const filteredFoods = filterItems(foods, query)

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  )
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/*
import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const filteredFoods = filterItems(foods, query);

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filteredFoods} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

*/
