/* 

usage:
import { Button } from '@ui/form'

*/

export { default as Button } from './button'
export { default as Dropdown } from './dropdown'
export { default as TextInput } from './text-input'

import SearchForm from './search-form'

function App() {
  // This function is a placeholder.
  function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`)
  }

  return <SearchForm runSearch={runSearch} />
}

export default App
