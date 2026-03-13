import HeroSection from '@/components/hero-section';
import ProblemSection from '@/components/problem-section';
import StorySection from '@/components/story-section';
import FrameworkSection from '@/components/framework-section';
import ProofSection from '@/components/proof-section';
import ValueStackSection from '@/components/value-stack-section';
import DeepContentSection from '@/components/deep-content-section';
import OfferSection from '@/components/offer-section';
import FAQSection from '@/components/faq-section';
import FinalCTASection from '@/components/final-cta-section';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ProblemSection />
      <StorySection />
      <FrameworkSection />
      <ProofSection />
      <ValueStackSection />
      <DeepContentSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
