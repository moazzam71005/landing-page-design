'use client';

import { CheckCircle } from 'lucide-react';

export default function DeepContentSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-card dark:bg-[#0f0f1a] overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="absolute bottom-0 right-0 w-full h-64"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="deepWave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,55 Q300,30 600,55 T1200,55 L1200,120 L0,120 Z"
            fill="url(#deepWave)"
            className="animate-float"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">The Reality</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Most Creators Fail at Monetization
          </h2>
        </div>

        {/* Content blocks */}
        <div className="space-y-12 prose prose-invert max-w-none">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mistake #1: They Don't Build Systems</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most creators are always "grinding." They create, they hustle, they work 14-hour days. But here's the truth: grinding
              doesn't scale. Systems do.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you have a repeatable process—for content, landing pages, offers, and follow-up—you can earn money while you
              sleep. That's the real goal. CreatorPro teaches you HOW to build those systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mistake #2: They Chase Ad Revenue</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ad revenue is declining across every platform. YouTube CPMs are down 40% in the last 2 years. TikTok's creator fund
              pays pennies. It's a dead-end strategy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Direct monetization—where YOUR audience buys directly from YOU—is where real money lives. And it's not as hard as you
              think. We show you exactly how.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mistake #3: They Don't Treat It Like a Business</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Creators often treat monetization like a side hobby. But if you want to earn six figures, you need to think like a
              business owner, not just a content creator.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That means tracking metrics, testing offers, optimizing funnels, and scaling what works. We teach you the business side
              so your audience becomes your most profitable asset.
            </p>
          </div>

          <div className="pt-8 border-t border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-6">How CreatorPro Solves This</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Give You the Framework</h4>
                    <p className="text-muted-foreground">
                      Not just ideas—a step-by-step system proven with 50K+ creators. You don't have to figure it out from scratch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Provide the Tools</h4>
                    <p className="text-muted-foreground">
                      Landing page builders, email sequences, analytics, affiliate partnerships—everything integrated in one place.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Build Community</h4>
                    <p className="text-muted-foreground">
                      Access to creators who are where you want to be. Share strategies, get feedback, and stay accountable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Offer Real Support</h4>
                    <p className="text-muted-foreground">
                      Group coaching calls, direct feedback, and personalized strategies. You're not alone in this.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Update Constantly</h4>
                    <p className="text-muted-foreground">
                      Platform algorithms change. Offers shift. We update the system weekly to stay ahead of the curve.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">We Guarantee Results</h4>
                    <p className="text-muted-foreground">
                      30-day money-back guarantee. If you don't see progress, we give your money back. That's how confident we are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final thought */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 dark:from-accent/5 dark:to-accent/0 dark:border-accent/20">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Here's what we know for sure:</span> Your attention is valuable. Your
            audience trusts you. And you deserve to be paid directly for that—not through some algorithm that changes every quarter.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The only question is: Will you learn the system that lets you capture that value? Or will you keep hoping that ad revenue
            comes back?
          </p>
        </div>
      </div>
    </section>
  );
}
