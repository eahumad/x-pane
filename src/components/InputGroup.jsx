import { useState } from 'react'

function InputGroup({ frame, onUpdate, onDelete }) {
  const [mySrc, setMySrc] = useState(frame.src)

  return (
    <>
      <div className="input-group">
        {/* <label>{frame.name}</label> */}
        <input type="text" placeholder="URL" defaultValue={mySrc} onChange={e => setMySrc(e.target.value)} />
        <button onClick={() => onUpdate({ ...frame, src: mySrc })}><i data-feather="refresh-cw"></i></button>
        <button onClick={() => onDelete(frame)} className='secondary'><i data-feather="trash"></i></button>
      </div>
    </>
  )
}


export default InputGroup