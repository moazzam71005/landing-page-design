'use client';

import { Card } from './ui/card';
import { Star } from 'lucide-react';

export default function ProofSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'TikTok Creator',
      followers: '234K followers',
      quote: 'I went from $300/month to $12,000/month in 3 months. The system actually works.',
      metrics: '$12K/month',
      avatar: '🎥',
    },
    {
      name: 'Marcus Rivera',
      title: 'YouTube Creator',
      followers: '180K subscribers',
      quote: 'Best decision I made as a creator. My income is now independent from YouTube\'s algorithm.',
      metrics: '$18K/month',
      avatar: '▶️',
    },
    {
      name: 'Jessica Park',
      title: 'Instagram Creator',
      followers: '512K followers',
      quote: 'The landing page template alone paid for itself in the first week. The results have been crazy.',
      metrics: '$25K/month',
      avatar: '📱',
    },
  ];

  const stats = [
    { metric: '50K+', label: 'Creators using the system' },
    { metric: '$127M+', label: 'Total revenue generated' },
    { metric: '87%', label: 'Success rate within 90 days' },
    { metric: '3.2x', label: 'Average revenue increase' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">Proof & Evidence</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Creators, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what creators are earning.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card dark:bg-[#1a1a2e] border border-border/30">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.metric}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border border-border/50 dark:bg-[#1a1a2e] dark:border-[#2a2a3e] hover:border-accent/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Creator info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.followers}</p>
                </div>
                <div className="text-4xl">{testimonial.avatar}</div>
              </div>

              {/* Metric badge */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Now earning</p>
                <p className="text-xl font-bold text-accent">{testimonial.metrics}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Case study highlight */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 dark:from-accent/5 dark:to-accent/0 dark:border-accent/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wider">Case Study</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">From $0 to $50K/Month in 8 Months</h3>
              <p className="text-muted-foreground mb-6">
                This creator started with just 15K followers and a dream. No fancy equipment. No massive team. Just the system and
                consistency.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Month 1-2: Built landing pages, made first $500</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Month 3-4: Scaled to $8K/month with affiliate commissions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">Month 5-8: Launched digital product, reached $50K/month</span>
                </li>
              </ul>
            </div>
            <div className="bg-card dark:bg-[#1a1a2e] rounded-xl p-8 border border-border/30 text-center">
              <p className="text-5xl font-bold text-accent mb-2">50K</p>
              <p className="text-muted-foreground mb-8">Current monthly income</p>
              <div className="space-y-4">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-1">Revenue streams</p>
                  <p className="font-semibold text-foreground">Affiliate (60%) • Digital Product (30%) • Coaching (10%)</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
