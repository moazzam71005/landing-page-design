'use client';

import { ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

export default function FrameworkSection() {
  const steps = [
    {
      number: '01',
      title: 'Traffic',
      description: 'Leverage your existing audience and social media presence. Every post, every follower, every view is an asset.',
      details: [
        'Repurpose content across platforms',
        'Double down on what resonates',
        'Build anticipation for launches',
      ],
    },
    {
      number: '02',
      title: 'High-Converting Landing Page',
      description: 'Turn casual viewers into interested prospects. Your landing page is the bridge between attention and income.',
      details: [
        'Pre-sell your offer',
        'Capture emails for long-term revenue',
        'Build urgency with scarcity',
      ],
    },
    {
      number: '03',
      title: 'Revenue Generation',
      description: 'Convert prospects into paying customers through affiliate, products, coaching, or digital goods.',
      details: [
        'Affiliate commissions start flowing',
        'Digital products scale infinitely',
        'Coaching clients book automatically',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-card dark:bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">The Framework</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Three-Step System That Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple enough to understand in minutes. Powerful enough to earn six figures.
          </p>
        </div>

        {/* Framework flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full border border-border/50 dark:bg-[#1a1a2e] dark:border-[#2a2a3e] hover:border-accent/30 transition-all">
                <div className="text-5xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                {/* Details list */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="bg-accent/20 rounded-full p-2">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA highlight */}
        <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-2xl p-8 dark:from-accent/5 dark:via-accent/0 dark:to-transparent dark:border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-2">Sounds simple? It is.</h3>
          <p className="text-muted-foreground mb-6">
            But here's what most people get wrong: They skip step 2. They try to send traffic directly to their affiliate link or
            product. That's why they fail. The landing page is the most critical piece—it's where conversions happen.
          </p>
          <p className="text-accent font-semibold">We handle all three steps for you. You just need to drive traffic.</p>
        </div>
      </div>
    </section>
  );
}
