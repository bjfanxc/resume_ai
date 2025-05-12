"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Clock, Palette, FileDown, PanelLeft, Lightbulb, Smartphone, Workflow } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description: "Generate professional content for each section of your resume with our advanced AI technology."
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Create a complete, professional resume in minutes instead of hours."
  },
  {
    icon: Palette,
    title: "Multiple Templates",
    description: "Choose from a variety of professionally designed templates that suit your style and industry."
  },
  {
    icon: FileDown,
    title: "Easy Export",
    description: "Download your resume in multiple formats including PDF, Word, and plain text."
  },
  {
    icon: PanelLeft,
    title: "Customizable Sections",
    description: "Add, remove, or rearrange sections to create the perfect resume structure for your needs."
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description: "Get intelligent recommendations for skills, action verbs, and improvements."
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Create and edit your resume on any device - desktop, tablet, or mobile."
  },
  {
    icon: Workflow,
    title: "Step-by-Step Process",
    description: "Follow our guided process to ensure you create a complete and effective resume."
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20 bg-muted/30" id="features" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Our AI-powered resume builder comes with everything you need to create a professional resume that stands out.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              style={{
                transitionDelay: `${0.1 * index}s`
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}