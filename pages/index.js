import { useState } from 'react'
import { Plate } from '@udecode/plate-core';
import { createNodeIdPlugin } from '@udecode/plate-node-id'

const editableProps = {
  placeholder: 'Type...',
};

const plugins = [
  createNodeIdPlugin()
]

export default function Home() {
  const [currentValue, setCurrentValue] = useState()
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Plate
          editableProps={editableProps}
          onChange={setCurrentValue}
          plugins={plugins} />
      </div>
      <pre className="w-1/2">
        {currentValue && JSON.stringify(currentValue, null, 2)}
      </pre>
    </div>
  )
}
