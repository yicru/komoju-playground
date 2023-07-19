'use client'

import { Button } from '@/components/ui/button'
import { ofetch } from 'ofetch'

export const SessionSection = () => {
  const onClick = async () => {
    const result = await ofetch('/api/sessions', {
      method: 'POST',
    })

    location.href = result.session_url
  }

  return (
    <section>
      <p className="text-3xl font-medium mb-4">Session</p>
      <Button onClick={onClick}>お支払いに進む</Button>
    </section>
  )
}
