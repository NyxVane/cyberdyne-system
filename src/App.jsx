import SearchBox from './components/SearchBox'
import TerminatorList from './components/TerminatorList'
import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState({ models: [], searchField: ''})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setState({ ...state, models: users }));
  }, [])

  const onSearchChange = (event) => {
    setState({ ...state, searchField: event.target.value })
  }

  const filteredModels = state.models.filter(model => model.name.toLowerCase().includes(state.searchField.toLowerCase()))
  if (state.models.length === 0) {
    return <h1>Betöltés folyamatban...</h1>
  }
  return (
    <div className="tc">
      <h1 className='f1'>Terminátor Modellek</h1>
      <SearchBox searchChange={onSearchChange} />
      <TerminatorList models={filteredModels} />
    </div>
  )
}

export default App