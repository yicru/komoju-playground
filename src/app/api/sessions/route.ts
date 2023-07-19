import { NextResponse } from 'next/server'
import { KomojuClient } from '@/features/komoju/lib/client'

export async function POST() {
  const result = await KomojuClient('/api/v1/sessions', {
    method: 'POST',
    body: JSON.stringify({
      amount: 1000,
      currency: 'JPY',
      return_url: 'http://localhost:3000',
    }),
  })

  return NextResponse.json(result)
}
