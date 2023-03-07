import { useState } from 'react'
import Header from "./components/Header"
import NftCardsCollection from './components/NftCardsCollection'
import SearchInput from './components/SearchInput'
function App() {

  return (
    <div className="App relative">
      <Header />
      <SearchInput />
      <NftCardsCollection />
    </div>
  )
}

export default App
