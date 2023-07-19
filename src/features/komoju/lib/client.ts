import { ofetch } from 'ofetch'

const authHeader =
  'Basic ' +
  Buffer.from((process.env.KOMOJU_SECRET_KEY as string) + ':').toString(
    'base64',
  )

export const KomojuClient = ofetch.create({
  baseURL: 'https://komoju.com',
  headers: {
    Authorization: authHeader,
  },
})
