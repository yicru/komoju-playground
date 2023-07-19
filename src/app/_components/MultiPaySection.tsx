'use client'

import { Button } from '@/components/ui/button'
import { useMultiPay } from '@/features/komoju/hooks/useMultiPay'
import { ofetch } from 'ofetch'

export const MultiPaySection = () => {
  const { isReady, openHandler } = useMultiPay({
    callback: async (token) => {
      await ofetch('/api/payments', {
        method: 'POST',
        body: JSON.stringify({ token: token.id }),
      })
    },
    product: {
      amount: 1000,
      title: 'テスト商品',
      description: 'テスト商品の説明',
    },
  })

  return (
    <section>
      <p className="text-3xl font-medium mb-4">MultiPay</p>
      <Button disabled={!isReady} onClick={openHandler}>
        今すぐ支払い
      </Button>
    </section>
  )
}
