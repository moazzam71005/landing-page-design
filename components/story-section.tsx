'use client';

import { CheckCircle } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="relative py-20 px-4 md:px-8 dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#0f0f1a] overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="absolute bottom-0 right-0 w-full h-64"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="storyWave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q300,35 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#storyWave)"
            className="animate-float"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">The Discovery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How Creators Found a Better Way to Earn
          </h2>
        </div>

        {/* Story content */}
        <div className="space-y-12">
          {/* Story paragraph blocks */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In 2022, a group of creators with millions of followers were making less than $500/month from their content.
              They had the audience, the influence, and the engagement—but the monetization model was broken.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              So they started experimenting. What if, instead of chasing ad revenue, they built a predictable income stream
              using the same principles that successful businesses use? What if they created a system that converted their
              audience's attention into actual revenue?
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That's when they discovered the "Attention-to-Income" framework. A three-step process that turns social media
              traffic into high-converting landing pages, then into affiliate commissions, digital products, and coaching sales.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Within 6 months, they went from $500/month to $15,000+/month. The system worked. And now, we're sharing it with
              you.
            </p>
          </div>

          {/* Key insights */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 pt-12 border-t border-border/30">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Your audience has buying power</h4>
                  <p className="text-sm text-muted-foreground">
                    They're already engaged with you. They just need the right offer.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ad revenue is a distraction</h4>
                  <p className="text-sm text-muted-foreground">
                    Stop chasing CPM increases. Build direct monetization instead.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">You don't need millions to earn six figures</h4>
                  <p className="text-sm text-muted-foreground">
                    Smaller audiences with high intent can earn more than massive follower counts.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Systems scale better than hustle</h4>
                  <p className="text-sm text-muted-foreground">
                    A repeatable process beats grinding 14-hour days forever.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Community amplifies income</h4>
                  <p className="text-sm text-muted-foreground">
                    Your most loyal fans will buy from you multiple times over.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">It works across platforms</h4>
                  <p className="text-sm text-muted-foreground">
                    TikTok, YouTube, Instagram, Twitter—the system adapts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
