import 'dotenv/config'
import googleApi from '../services/googleApi'

export default async function generateDeepLink(path: string) {
  const response = await googleApi.post('', {
    dynamicLinkInfo: {
      domainUriPrefix: process.env.FIREBASE_URL_PREFIX,
      link: `${process.env.WEB_APP_URL}/${path}`,
      androidInfo: {
        androidPackageName: 'com.mobile'
      }
    },
    suffix: {
      option: "SHORT"
    }
  })

  return response.data.shortLink
}
