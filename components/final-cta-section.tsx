'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function FinalCTASection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-card dark:bg-[#0f0f1a] overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-b from-blue-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-purple-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Your Attention Deserves to Be Rewarded
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop betting on algorithms. Stop chasing ad revenue. Start building a sustainable income stream that's truly yours.
        </p>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base">
            Join 50K+ Creators Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Social proof */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">✓ Instant access to framework & templates</p>
          <p className="text-sm text-muted-foreground">✓ 30-day money-back guarantee</p>
          <p className="text-sm text-muted-foreground">✓ Start earning your first month</p>
        </div>

        {/* Countdown / urgency */}
        <div className="mt-12 pt-12 border-t border-border/30">
          <p className="text-accent font-semibold mb-4">🔥 Launch Week Special: Save 40%</p>
          <p className="text-muted-foreground mb-6">
            First 100 creators who join this week get a lifetime discount on your membership tier.
          </p>
          <p className="text-sm text-muted-foreground font-medium">Limited spots remaining. Offer ends soon.</p>
        </div>
      </div>
    </section>
  );
}
