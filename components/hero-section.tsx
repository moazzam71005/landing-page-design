'use client';

import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 md:px-8 overflow-hidden dark:bg-gradient-to-b dark:from-[#0f0f1a] dark:to-[#1a1a2e]">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow text */}
        <p className="text-sm md:text-base font-medium text-accent mb-6 uppercase tracking-wider">
          ✨ The Creator Monetization System
        </p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Turn Your{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Audience Into Income
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Most creators get views but struggle to monetize. We show you the proven system to convert attention into predictable revenue—without relying on ad revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            Start For Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-foreground/20 text-foreground hover:bg-foreground/5"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Social proof */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">✓ Trusted by 50,000+ creators</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">Join thousands earning monthly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
