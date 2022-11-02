import { useState } from 'react'
import Editor from '../components/Editor'

export default function Home() {
  const [currentValue, setCurrentValue] = useState()
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Editor onChange={setCurrentValue}/>
      </div>
      <pre className="w-1/2">
        {currentValue && JSON.stringify(currentValue, null, 2)}
      </pre>
    </div>
  )
}
