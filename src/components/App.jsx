import { useState } from 'react'
import Start from './start/Start'
import Play from './play/Play'

function App() {

  const [changeScreen, setChangeScreen] = useState(false);
  const [randomizedCards, setRandomizedCards] = useState([]);

  return (
    <>
      {!changeScreen
        ?
        <Start 
          setChangeScreen={setChangeScreen}
          setRandomizedCards={setRandomizedCards}
        />
        :
        <Play randomizedCards={randomizedCards}/>
      }
    </>
  )
}

export default App
