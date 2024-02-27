import { Box } from '@mui/material'
import IntroSection from './components/section/IntroSection'
import PromotionSection from './components/section/PromotionSection'
import SectionDivider from './components/SectionDivider'

export default function Home() {
  return (
    <>
      <IntroSection />
      <SectionDivider />
      <PromotionSection />
      <SectionDivider />
    </>
  )
}
