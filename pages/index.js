import { useEffect, useState } from 'react'
// import Head from 'next/head'

import Error from '../components/error'
import Spinner from '../components/spinner'
import CardGrid from '../components/card-grid'

import getContent from '../helpers/get-content'

export default function Home (props) {

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ itemsPerPage, setItemsPerPage ] = useState(6)
  const [ articleList, setArticleList ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  // const [ error, setError ] = useState({ title: 'Oh no!!', error: 'This is a test error message'})
  const [ error, setError ] = useState(null)


  useEffect(async () => {
    setIsLoading(true)
    console.log({ currentPage })
    console.log('from:', itemsPerPage * (currentPage - 1), ' | to:', itemsPerPage * currentPage,)
    try {
      const from = itemsPerPage * (currentPage - 1)
      const response = await getContent.articleList({
        from,
        limit: itemsPerPage
      })
      setArticleList(previous => [ ...previous, ...response ])

    } catch (error) {
      setError({
        title: 'Error fetching articles list',
        error: JSON.stringify(error, null, 2)
      })
    }

    setIsLoading(false)
  }, [ currentPage ])

  return (
    <div className="border-box pb-24">
      <main className="">
        {
          error && <Error title={ error.title } error={ error.error } />
        }

        <section className="relative mb-12 justify-self-center w-full">
          <img
            className="absolute w-full h-full object-cover"
            src="https://spaceholder.cc/2000x1000"
            alt=""
            roloe="presentation"
          />
          <div className="grid justify-center text-center text-white w-full">
            <div className="absolute w-full h-full bg-gray-900 opacity-40" />
            <div className="p-12 pt-24 max-w-3xl">
              <h1 className="relative text-4xl font-extrabold mb-4">Anim cillum non aute ipsum sint commodo dolor enim.</h1>
              <p className="relative text-base">Eu in laboris minim non pariatur. Cupidatat eu in do ea minim aliqua adipisicing culpa commodo. Velit non aliquip magna ea do in deserunt deserunt mollit anim esse. Reprehenderit ex eiusmod eu veniam ad ex.</p>
            </div>
          </div>
        </section>

        <section className="p-4 md:p-8 lg:p-12 max-w-5xl justify-self-center mx-auto">
          {
            articleList.length &&
              <CardGrid articleList={ articleList } />
          }
        </section>


        {
          !isLoading &&
            <section className="w-full max-w-xl py-12 mx-auto">
              <button
                className="bg-gray-700 hover:bg-gray-500 hover:-translate-y-1 hover:shadow-md text-white px4 py-4 rounded-lg w-full transition-all"
                onClick={ () => setCurrentPage(current => current + 1) }
              >Load more</button>
            </section>
        }
        {
          isLoading &&
            <Spinner />
        }
\      </main>
    </div>
  )
}

