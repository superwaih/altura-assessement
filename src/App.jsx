import { useState } from 'react'
import Header from "./components/Header"
import NftCardsCollection from './components/NftCardsCollection'
import NftModal from './components/NftModal';
import SearchInput from './components/SearchInput'
function App() {
  const [activateModal, setActivateModal] = useState(false);
  const[selectedNFT, setSelectedNFT] = useState([])
  const[totalNFTs, setTotalNFTs] = useState([])
  const[address, setAddress] = useState("")
  const[network, setNetwork] = useState("")
  const[loading, setLoading] = useState(false)

  return (
    <div className="App relative">
      <Header
      address={address}
      />
      <SearchInput address={address} network={network} 
      setTotalNFTs={setTotalNFTs}
      setLoading={setLoading}
      setAddress={setAddress} setNetwork={setNetwork} />
      <NftCardsCollection 
      loading={loading}
      activateModal={activateModal}
      totalNFTs={totalNFTs}
      address={address}
      network={network}
       setActivateModal={setActivateModal} 
       selectedNFT={selectedNFT}
       setSelectedNFT={setSelectedNFT}
        />
      {activateModal && (<NftModal setActivateModal={setActivateModal} network={network} activateModal={activateModal} nft={selectedNFT} />)}
    </div>
  )
}

export default App
