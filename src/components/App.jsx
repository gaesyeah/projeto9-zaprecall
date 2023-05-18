import { useState } from 'react'
import Start from './start/Start'
import Play from './play/Play'

function App() {

  const [changeScreen, setChangeScreen] = useState(false);

  return (
    <>
      {!changeScreen
        ?
        <Start setChangeScreen={setChangeScreen} />
        :
        <Play />
      }
    </>
  )
}

export default App
