import { useState } from 'react'

import dateFormatter from '../helpers/date-formatter'

function CardGrid (props) {
  const { article } = props

  const launched = '-translate-y-full translate-x-full scale-150'
  const landed = 'translate-y-full -translate-x-full scale-100'
  const [ launch, setLaunch ] = useState(landed)

  return (
      <article
        className="relative flex flex-col rounded-lg grid-rows-none bg-white shadow-xl"
      >
        <img
          className="rounded-t-xl w-full h-[200px] object-cover"
          src={ article.imageUrl }
        />
        <div className="mb-8 p-4">
          <p className="mb-2 text-blue-300 font-extrabold">{ dateFormatter(article.updatedAt) }</p>
          <h6 className="mb-2 font-medium uppercase">
            <span className="text-white bg-gray-400 text-xs py-1 px-2 rounded">
              { article.newsSite }
            </span>
          </h6>
          <h3 className="text-xl font-bold mb-4">{ article.title }</h3>
          <p className="">{ article.summary }</p>
        </div>

        <a
          className="relative mt-auto py-4 px-4 bg-blue-400 text-white hover:bg-blue-800 transition-all rounded-b-lg overflow-hidden"
          href={ article.url }
          rel="noreferrer noopener"
          target="_blank"
          onMouseOver={ () => setLaunch(launched) }
          onMouseOut={ () => setLaunch(landed) }
          onMouseLeave={ () => setLaunch(landed) }
        >Read more</a>

        <div className="absolute bottom-0 right-0 h-full w-full pointer-events-none z-50 translate-x-2 overflow-hidden">
          <span className={`absolute text-4xl align-middle ml-2 bottom-0 right-12 ${launch} transition-all z-50`}>🚀</span>
        </div>
      </article>
  )
}

export default CardGrid
