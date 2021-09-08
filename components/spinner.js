import { useState, useEffect } from 'react'

function Spinner () {
  const [ delayedAnimation, setDelayedAnimation ] = useState('')

  // Couldn't figure out how to add a new plugin to tailwind for an animation delay
  // So not to spend too mcuh here I found a work around

  useEffect(() => {
    setTimeout(() => {
      setDelayedAnimation('animate-bounce')
    }, 200)
  }, [])

  return (
    <section className="flex justify-center">
      <div className="flex justify-center">
        <div className="rounded-3xl w-6 h-6 bg-gray-500 mx-1 animate-bounce" />
        <div className={`rounded-3xl w-6 h-6 bg-gray-300 mx-1 ${delayedAnimation}`} />
        <div className="rounded-3xl w-6 h-6 bg-gray-500 mx-1 animate-bounce" />
      </div>
    </section>
  )
}

export default Spinner
