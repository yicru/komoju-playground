import { NextRequest, NextResponse } from 'next/server'
import { KomojuClient } from '@/features/komoju/lib/client'
import { z } from 'zod'

const inputSchema = z.object({
    token: z.string().startsWith('tok_'),
})

export async function POST(request: NextRequest) {
    const input = await request.json()

    const { token } = inputSchema.parse(input)

    const result = await KomojuClient('/api/v1/payments', {
        method: 'POST',
        body: JSON.stringify({
            amount: 1000,
            currency: 'JPY',
            payment_details: token,
        }),
    })

    return NextResponse.json(result)
}
