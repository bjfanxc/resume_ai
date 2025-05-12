"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started with your job search",
    features: [
      "1 resume template",
      "Basic AI suggestions",
      "PDF export",
      "24/7 support",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "12",
    description: "Everything you need for a successful job search",
    features: [
      "All resume templates",
      "Advanced AI suggestions",
      "Multiple export formats",
      "Cover letter builder",
      "LinkedIn profile optimization",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "49",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom templates",
      "API access",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom branding",
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground text-lg">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden p-8 border ${
                  plan.popular 
                    ? "border-primary shadow-lg scale-105 bg-card" 
                    : "border-border/50"
                }`}
                style={{
                  transitionDelay: `${0.1 * index}s`
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price !== "0" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div>
                <h3 className="font-semibold mb-2">Can I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer educational discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special discounts for students and educational institutions. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}