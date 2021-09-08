
function dateFormatter (dateString) {
  const date = new Date(dateString)
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${day} / ${month} / ${year}`
}

export default dateFormatter
