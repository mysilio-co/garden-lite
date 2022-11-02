import { useState } from 'react'
import { Plate } from '@udecode/plate-core';

const editableProps = {
  placeholder: 'Type...',
};

export default function Home() {
  const [currentValue, setCurrentValue] = useState()
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Plate editableProps={editableProps} onChange={setCurrentValue}/>
      </div>
      <pre className="w-1/2">
        {currentValue && JSON.stringify(currentValue, null, 2)}
      </pre>
    </div>
  )
}
