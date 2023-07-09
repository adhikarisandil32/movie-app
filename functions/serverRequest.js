import axios from 'axios'

export const handler = async (event, context) => {

  try {
    const searchParams = new URLSearchParams(event.queryStringParameters).toString();
    const response = await axios.get(`${process.env.VITE_BASE_URL}${searchParams}`)
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }

  } catch(err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({error: err.message})
    }
  }
};