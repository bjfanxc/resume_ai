"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground text-lg">
              We help job seekers create professional resumes through AI technology
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                ResumeAI's mission is to help every job seeker showcase their professional value through innovative AI technology. We believe that an outstanding resume is not just a summary of work experience, but a perfect presentation of your personal brand.
              </p>
              
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                To become the world's leading AI-driven resume creation platform, helping millions of job seekers achieve their career goals. We continuously innovate to provide the most intelligent and personalized resume solutions.
              </p>
              
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
                
                <h3 className="text-2xl font-bold mb-6">Core Advantages</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">AI-Driven Technology</h4>
                    <p className="text-muted-foreground">
                      Utilizing cutting-edge AI technology to provide intelligent content suggestions and personalized template recommendations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Professional Template Library</h4>
                    <p className="text-muted-foreground">
                      Offering a rich collection of professional templates covering various industries and positions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">User-Friendly</h4>
                    <p className="text-muted-foreground">
                      Intuitive user interface design makes resume creation easy and enjoyable.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}