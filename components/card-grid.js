import Card from './card'

import dateFormatter from '../helpers/date-formatter'

function CardGrid (props) {
  const { articleList } = props

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {
        articleList.map((article, i) => (
          <Card
            key={ `article-${i}-${article.id}` }
            article={ article }
          />
        ))
      }
    </section>
  )
}

export default CardGrid
