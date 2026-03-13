'use client';

import { Card } from './ui/card';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

export default function OfferSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for creators just getting started',
      features: [
        'Access to the complete framework',
        '3 landing page templates',
        'Email sequence library',
        'Community access',
        'Monthly group coaching',
        'Basic analytics',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '149',
      description: 'For creators ready to scale serious income',
      features: [
        'Everything in Starter, plus:',
        '15+ landing page templates',
        'Advanced automation tools',
        'Priority support',
        'Weekly 1-on-1 coaching calls',
        'Advanced analytics & tracking',
        'Affiliate partnership directory',
        'Digital product templates',
        'Private Slack community',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '499',
      description: 'For creators building a 7-figure business',
      features: [
        'Everything in Growth, plus:',
        'Unlimited custom templates',
        'White-label options',
        'Done-with-you launch strategy',
        '2x weekly coaching',
        'Direct access to founders',
        'Custom funnel design',
        'Personal accountability manager',
        'Exclusive partnership opportunities',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">Simple Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include access to our growing library of resources. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-accent/50 dark:border-accent/50 ring-2 ring-accent/30 md:scale-100'
                  : 'border-border/50 dark:border-[#2a2a3e] hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1'
              } dark:bg-[#1a1a2e] group cursor-pointer`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>

                <Button
                  size="lg"
                  className={`w-full rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    tier.highlighted
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-lg hover:shadow-accent/40'
                      : 'bg-muted text-foreground hover:bg-muted/80 hover:shadow-lg hover:shadow-foreground/10'
                  }`}
                >
                  Get Started
                </Button>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 transition-all group-hover:translate-x-1">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                    <span className="text-foreground text-sm leading-relaxed transition-colors group-hover:text-accent/90">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="bg-card dark:bg-[#1a1a2e] border border-border/50 dark:border-[#2a2a3e] rounded-xl p-8 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
          <p className="text-lg text-foreground mb-2 transition-colors group-hover:text-accent">
            💰 <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </p>
          <p className="text-muted-foreground transition-colors group-hover:text-foreground/80">
            Try CreatorPro risk-free. If you're not seeing progress within 30 days, we'll refund you completely. No questions asked.
          </p>
        </div>

        {/* Additional perks */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider">All Plans Include</p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <p className="text-2xl mb-2 transition-transform group-hover:scale-125 inline-block">📚</p>
              <p className="text-sm text-foreground transition-colors group-hover:text-accent">Framework Access</p>
            </div>
            <div className="text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <p className="text-2xl mb-2 transition-transform group-hover:scale-125 inline-block">👥</p>
              <p className="text-sm text-foreground transition-colors group-hover:text-accent">Creator Community</p>
            </div>
            <div className="text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <p className="text-2xl mb-2 transition-transform group-hover:scale-125 inline-block">🎁</p>
              <p className="text-sm text-foreground transition-colors group-hover:text-accent">Monthly Updates</p>
            </div>
            <div className="text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <p className="text-2xl mb-2 transition-transform group-hover:scale-125 inline-block">🔄</p>
              <p className="text-sm text-foreground transition-colors group-hover:text-accent">Lifetime Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
