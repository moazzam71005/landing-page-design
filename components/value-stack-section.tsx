'use client';

import { Card } from './ui/card';
import { Zap, Users, BookOpen, Rocket, BarChart3, Lock } from 'lucide-react';

export default function ValueStackSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High-Converting Templates',
      description: 'Pre-built landing pages optimized for conversion. Copy-paste and customize in minutes.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community & Support',
      description: 'Connect with 50K+ creators. Get feedback, accountability, and real strategies that work.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Step-by-Step Framework',
      description: 'The exact system we used to go from $500 to $50K/month. Broken down day by day.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Automation Tools',
      description: 'Email sequences, analytics, funnels. Everything you need to automate your income.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track every dollar earned. See what's working, what's not, and where to optimize.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Exclusive Resources',
      description: 'Affiliate partnership database, product ideas, pricing strategies, and more.',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-card dark:bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">What You Get</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've thought of everything. All the tools, templates, training, and community in one place.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border border-border/50 dark:bg-[#0f0f1a] dark:border-[#2a2a3e] hover:border-accent/30 transition-all group hover:shadow-lg"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Comparison highlight */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            The Real Advantage: Done-For-You Systems
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-muted/50 dark:bg-[#0f0f1a] border border-border/30">
              <p className="text-lg font-semibold text-muted-foreground mb-6">❌ The Old Way</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500">✕</span>
                  <span>Figure out monetization alone</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500">✕</span>
                  <span>Build landing pages from scratch</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500">✕</span>
                  <span>Hunt for affiliate partnerships</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500">✕</span>
                  <span>Manually track conversions</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500">✕</span>
                  <span>Struggle without accountability</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-accent/10 dark:bg-accent/5 border border-accent/30">
              <p className="text-lg font-semibold text-foreground mb-6">✓ The CreatorPro Way</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-foreground">
                  <span className="text-accent">✓</span>
                  <span>Get the proven framework immediately</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-accent">✓</span>
                  <span>Copy-paste templates ready to go</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-accent">✓</span>
                  <span>Pre-vetted affiliate programs included</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-accent">✓</span>
                  <span>Automated tracking & analytics</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-accent">✓</span>
                  <span>Community for support & strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
