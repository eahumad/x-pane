import { useState } from 'react'

import InputGroup from './components/InputGroup.jsx'


const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const exampleURL = location.href + '/welcome/'

function App() {
  // MARK: STATES
  const [frames, setFrames] = useState([{
    id: uid(),
    name: 'test',
    src: exampleURL,
  }])

  const [inputGroupItems, setInputGroupItems] = useState([])

  const [frameItems, setFrameItems] = useState([])


  // MARK: CRUD STATES
  const updateFrame = (frame) => {
    console.log({ updateFrame: frame })
    const idx = frames.findIndex(fr => fr.id === frame.id)
    frames[idx] = frame
    setFrames(frames)
    updateFrameItems()
    updateInputGroupItems()
  }

  const removeFrame = (frame) => {
    console.info({ removeFrame: frame })
    const idx = frames.findIndex(fr => fr.id === frame.id)
    frames.splice(idx, 1)
    setFrames(frames)
    updateFrameItems()
    updateInputGroupItems()
  }




  const updateFrameItems = () => {
    let className = frames.length & 1 == 1 ? '' : 'even'

    const items = frames.map(frame =>
      <div key={frame.id} className={className}>
        <iframe src={frame.src} title={frame.name}></iframe>
      </div>
    )

    setFrameItems(items)
  }

  const updateInputGroupItems = () => {
    let className = frames.length & 1 == 1 ? '' : 'even'
    const items = frames.map(frame => {
      return <li key={frame.id} className={className}>
        <InputGroup frame={frame} onUpdate={updateFrame} onDelete={removeFrame}></InputGroup>
      </li>
    })

    setInputGroupItems(items)
  }

  const addFrame = () => {
    let newFrames = [
      ...frames,
      {
        id: uid(),
        name: 'test',
        src: exampleURL,
      }
    ]
    setFrames(newFrames)
    updateFrameItems()
    updateInputGroupItems()
    setTimeout(() => {
      feather.replace()  
    }, 10);
    
  }



  return (
    <>
      <div className="config-wrapper">
        <button onClick={addFrame}>Agregar</button>
        <ul>{inputGroupItems}</ul>

      </div>
      <div id="frames">{frameItems}</div>
    </>
  )
}


export default App