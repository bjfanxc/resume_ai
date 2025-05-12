"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  
  return (
    <section 
      className="py-20 relative overflow-hidden" 
      ref={ref}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div 
        className="container mx-auto px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to create your professional resume?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs with resumes created using our AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full group">
              <Link href="/create">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/templates">
                Explore Templates
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">No credit card required • Free plan available</p>
          
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}