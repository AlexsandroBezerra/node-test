import 'dotenv/config'

import axios from 'axios'

const googleApi = axios.create({
  baseURL: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks'
})

googleApi.defaults.params = {
  key: process.env.GOOGLE_API_KEY
}

export default googleApi
