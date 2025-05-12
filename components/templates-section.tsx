"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const templates = [
  {
    name: "Professional",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Clean and modern design perfect for corporate and traditional industries.",
    features: ["Clean layout", "Professional typography", "Formal structure"]
  },
  {
    name: "Creative",
    image: "https://images.pexels.com/photos/5698398/pexels-photo-5698398.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Bold design with creative elements for design, marketing, and creative fields.",
    features: ["Unique layout", "Bold typography", "Visual elements"]
  },
  {
    name: "Minimal",
    image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sleek and minimalist design that lets your content shine through.",
    features: ["Minimalist aesthetic", "Spacious layout", "Modern typography"]
  }
];

export default function TemplatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Templates</h2>
          <p className="text-muted-foreground text-lg">
            Choose from a variety of professionally designed templates to make your resume stand out.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {templates.map((template, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                transitionDelay: `${0.1 * index}s`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={template.image} 
                  alt={`${template.name} template`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-xl p-4">{template.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={`/create?template=${template.name.toLowerCase()}`}>
                    Use this template
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/templates">
              View all templates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}