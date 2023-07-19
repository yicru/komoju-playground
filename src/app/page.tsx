import { MultiPaySection } from '@/app/_components/MultiPaySection'
import { SessionSection } from '@/app/_components/SessionSection'

export default function Home() {
  return (
    <div className={'grid w-full max-w-3xl mx-auto px-4 py-8 gap-8'}>
      <MultiPaySection />
      <SessionSection />
    </div>
  )
}
