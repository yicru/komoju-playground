'use client'

import { Button } from '@/components/ui/button'
import { useMultiPay } from '@/features/komoju/hooks/useMultiPay'

export default function Home() {
  const { isReady, openHandler } = useMultiPay({
    callback: (token) => console.log(token),
    product: {
      amount: 1000,
      title: 'テスト商品',
      description: 'テスト商品の説明',
    },
  })

  return (
    <div className={'grid w-full max-w-3xl mx-auto px-4 py-8 gap-8'}>
      <div>
        <p className="text-3xl font-medium mb-4">MultiPay</p>
        <Button disabled={!isReady} onClick={openHandler}>
          今すぐ支払い
        </Button>
      </div>
    </div>
  )
}
