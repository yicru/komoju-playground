import { useScript } from 'usehooks-ts'

type Product = {
  amount: number
  title: string
  description: string
}

type Params = {
  product: Product
  callback: (token: MultiPayToken) => void
}

export const useMultiPay = (params: Params) => {
  const scriptStatus = useScript('https://multipay.komoju.com', {
    removeOnUnmount: false,
  })

  const isReady = scriptStatus === 'ready'

  const openHandler = () => {
    if (!isReady) return

    const handler = Komoju.multipay.configure({
      key: process.env.NEXT_PUBLIC_KOMOJU_PUBLIC_KEY as string,
      token: params.callback,
    })

    handler.open({
      amount: params.product.amount,
      endpoint: 'https://komoju.com',
      locale: 'ja',
      currency: 'JPY',
      title: params.product.title,
      description: params.product.description,
      methods: [
        'credit_card',
        'konbini',
        'bank_transfer',
        'pay_easy',
        'web_money',
        'bit_cash',
        'net_cash',
        'japan_mobile',
        'paypay',
        'linepay',
        'merpay',
        'rakutenpay',
        'nanaco',
        'dospara',
        'toss',
        'steam_prepaid_card',
      ],
      hideCreditCardBrands: ['visa', 'master'],
    })
  }

  return { isReady, openHandler }
}
