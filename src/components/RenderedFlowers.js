import React from 'react'
import { useState, useEffect } from 'react'

export default function RenderedFlowers({ renderedFlowers, myFlowers }) {
  const [finalFlowers, setFinalFlowers] = useState(null)
  useEffect(() => {
    console.log('in here in rendered flowers')
    setFinalFlowers(renderedFlowers)
  }, [myFlowers])

  return (
    <>
        {finalFlowers} 
    </>
  )
}
