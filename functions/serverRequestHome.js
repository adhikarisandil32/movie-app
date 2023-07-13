import axios from 'axios'

export const handler = async (event, context) => {
  try {
    const searchParams = new URLSearchParams(event.queryStringParameters).toString()
    console.log(searchParams)
    const response = await axios.request({
      method: 'get',
      url: `https://${process.env.VITE_RAPID_API_HOST}/titles?${searchParams}`,
      headers: {
        'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.VITE_RAPID_API_HOST
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }

  } catch(err) {
    console.error(err.message)
    return {
      statusCode: 500,
      body: JSON.stringify({error: err.message})
    }
  }
}