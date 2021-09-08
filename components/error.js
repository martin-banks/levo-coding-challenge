
function Error (props) {
  const { error, title } = props
  return (
    <article className="width-full bg-red-200 border-4 border-red-600 rounded-lg text-red-600 p-6 m-4">
      <h1>{ title }</h1>
      <pre>{ JSON.stringify(error, null, 2) }</pre>
    </article>

  )
}

export default Error
