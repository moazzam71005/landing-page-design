'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need a huge audience to make this work?',
      answer:
        'Not at all. Quality beats quantity. Creators with 10K highly engaged followers are making more than creators with 500K passive followers. What matters is that your audience trusts you enough to buy from you.',
    },
    {
      question: 'Does this work if I\'m just starting out?',
      answer:
        'Yes. Many of our most successful creators started with minimal followings (under 5K). The system teaches you how to build AND monetize simultaneously. You don\'t need to wait until you\'re "big enough."',
    },
    {
      question: 'How long until I see results?',
      answer:
        'Most creators see their first sale within 2-3 weeks. Meaningful income ($1K+/month) typically comes within 60-90 days with consistent effort. Some have gone faster, some slower—it depends on how much traffic you can generate.',
    },
    {
      question: 'What if my niche isn\'t "typical" for monetization?',
      answer:
        'The framework works for any niche. We have creators in fitness, finance, comedy, education, gaming, lifestyle, and more. As long as people watch and engage, they can buy. We\'ll show you how to identify the right offers for your specific niche.',
    },
    {
      question: 'Is this just another affiliate marketing program?',
      answer:
        'No. Affiliate is ONE revenue stream we teach, but it\'s not the only one. The system also covers digital products, coaching, partnerships, sponsorships, and memberships. Affiliate is just the fastest way to start earning while you build your own products.',
    },
    {
      question: 'What if I\'m already on multiple platforms?',
      answer:
        'Perfect. The system is platform-agnostic. Whether you\'re on TikTok, YouTube, Instagram, Twitter, or all of them, this works. In fact, leveraging multiple platforms amplifies your results.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes. You get access to our private community, regular group coaching calls, and individual support. You\'re not left alone. We want you to succeed because your success is our success.',
    },
    {
      question: 'What if I don\'t think this is right for me?',
      answer:
        'We offer a 30-day money-back guarantee. No questions asked. If it\'s not the fit you hoped for, we\'ll refund you completely. We\'re confident in the system, but we also respect that it\'s not for everyone.',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 dark:bg-gradient-to-b dark:from-[#0f0f1a] dark:to-[#1a1a2e]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium text-accent mb-4 uppercase tracking-wider">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Common Questions We Hear
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden dark:bg-[#1a1a2e] dark:border-[#2a2a3e] hover:border-accent/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 dark:hover:bg-accent/5 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/20 dark:bg-accent/5 border-t border-border/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center p-8 rounded-xl bg-accent/10 border border-accent/20 dark:bg-accent/5 dark:border-accent/20">
          <p className="text-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#"
            className="inline-block text-accent font-semibold hover:underline"
          >
            Join our free community →
          </a>
        </div>
      </div>
    </section>
  );
}
