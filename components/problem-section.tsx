'use client';

import { TrendingDown, Users, DollarSign } from 'lucide-react';
import { Card } from './ui/card';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "You Have Views, Not Revenue",
      description: "Millions of impressions but your bank account barely moves. The ad revenue game is stacked against creators.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Ad Revenue Is Declining",
      description: "CPMs are dropping, algorithms are changing, and platform payouts keep getting worse every quarter.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "No Clear Path to Monetization",
      description: "You know you should be making money but don't know HOW. Sponsorships? Affiliate? Coaching? It's overwhelming.",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-card dark:bg-card overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-64"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="problemWave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q300,25 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#problemWave)"
            className="animate-wave"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Attention Is Worth Something—But You're Not Getting Paid For It
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Millions of creators face the same reality: huge audiences, tiny paychecks. Let's fix that.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 dark:bg-[#1a1a2e] dark:border-[#2a2a3e] dark:hover:bg-[#252540] transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{problem.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-accent">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">{problem.description}</p>
            </Card>
          ))}
        </div>

        {/* Stat highlight */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 dark:from-accent/5 dark:to-accent/0">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">80%</p>
              <p className="text-muted-foreground">of creators don't make enough to quit their day job</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">5.3M</p>
              <p className="text-muted-foreground">creator-hours wasted per month trying to figure out monetization</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">$2,847</p>
              <p className="text-muted-foreground">average annual income from ad revenue (not enough)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
