import IntroSection from './components/section/IntroSection'
import PromotionSection from './components/section/PromotionSection'
import SectionDivider from './components/SectionDivider'
import BannerSection from './components/section/BannerSection'
import SuggestSection from './components/section/SuggestSection'
import ArticleSection from './components/section/ArticleSection'

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
      <ArticleSection />
    </>
  )
}
