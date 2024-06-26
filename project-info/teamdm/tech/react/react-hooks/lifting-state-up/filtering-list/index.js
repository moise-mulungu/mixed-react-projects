// example of when NOT to lift state up to the parent: when the state is only used in the child component. In this case, the state is only used in the QuestionBox component. So, it should be kept there. If you lift it up to the parent, then you have to pass it back down to the child. This is unnecessary and makes the code more complicated. So, keep the state in the child component.(cool)

//(done)DM: not very clear WHY to move state up. Could you add a note about that?
// MM: DM: the FilterableList component is the parent component of SearchBar and List. The state query is declared in FilterableList and passed down to SearchBar as a prop. The handleChange function, which modifies query, is also passed down to SearchBar. This allows SearchBar to render the current query and update it as the user types into the search bar. The filteredFoods variable is also declared in FilterableList and passed down to List as a prop. This allows List to render the filtered list of foods. DM: Ok, that's how it works, but why do you need state in FilterableList? query and handler are passed to SearchBar only, so why not to keep them there? The only reason to "lift state up" is so that you can share it with multiple components.(ok, that makes sense!)

// howtojs:react:: lifting state up; lift state only if it is necessary to share with the parent or sibling components. rule of thumb: state (and associated handlers) should be kept in the component that uses it.
// src: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react'
import { foods, filterItems } from './data.js'

const filteredFoods = filterItems(foods, query)

export default function FilterableList() {
  // returned the state to the SearchBar component

  return (
    <>
      {/* removed the passed props */}
      <SearchBar />
      <hr />
      {/* <List items={foods} /> */}
      <List items={filteredFoods} />
    </>
  )
}

// function SearchBar() {
function SearchBar() {
  // lift the query state from the child to parent
  const [query, setQuery] = useState('')

  // lift the handleChange function from the child to parent
  function handleChange(e) {
    setQuery(e.target.value)
  }

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
