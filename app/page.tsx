import IntroSection from './components/section/IntroSection'
import PromotionSection from './components/section/PromotionSection'
import SectionDivider from './components/SectionDivider'
import BannerSection from './components/section/BannerSection'
import SuggestSection from './components/section/SuggestSection'
import ArticleSection from './components/section/ArticleSection'
import GameSection from './components/section/GameSection'

export default function Home() {
  return (
    <>
      <BannerSection />
      <SectionDivider />
      <PromotionSection />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <SuggestSection />
      <SectionDivider />
      <GameSection />
      <SectionDivider />
      <ArticleSection />
    </>
  )
}
