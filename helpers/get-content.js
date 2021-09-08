// ? Keeps all the fetch requests in one neat place
// Means I only have to call the function with the options I want the wait for the data


const endpoint = 'https://api.spaceflightnewsapi.net/v3'

// Fetch urls, stored in one object to prevent potential naming coflicts.
const urls = {
  articleList: ({ start = 0, limit = 10 }) => `${endpoint}/articles?_limit=${limit}&_start=${start}`
}

function articleList ({ from, limit }) {
  return new Promise (async (resolve, reject) => {
    try {
      const response = await fetch(urls.articleList({ start: from, limit }))
      const list = await response.json()
      resolve(list)

    } catch (error) {
      console.log({ error })
      reject(error)
    }
  })
}

export default {
  articleList,
}
