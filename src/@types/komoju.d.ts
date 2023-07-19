type MultiPayToken = {
  id: string
}

type MultiPayConfig = {
  key: string
  token: (token: MultiPayToken) => void
}

type MultiPayHandlerOpenOption = {
  amount: number
  endpoint?: string
  currency?: string
  locale?: 'en' | 'ja' | 'ko'
  title: string
  description: string
  panelLabel?: string
  methods: string[]
  image?: string
  prefillEmail?: string
  hideCreditCardBrands: ('visa' | 'jcb' | 'master' | 'amex' | 'diners')[]
}

type MultiPayHandler = {
  open: (option: MultiPayHandlerOpenOption) => void
}

type Komoju = {
  multipay: {
    configure: (config: MultiPayConfig) => MultiPayHandler
  }
}

// eslint-disable-next-line no-var
declare var Komoju: Komoju
