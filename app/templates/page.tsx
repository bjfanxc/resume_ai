"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const templates = [
  {
    name: "Professional",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Clean and modern design perfect for corporate and traditional industries.",
    features: ["Clean layout", "Professional typography", "Formal structure", "ATS-friendly format", "Clear section hierarchy"],
    bestFor: ["Corporate roles", "Management positions", "Traditional industries"]
  },
  {
    name: "Creative",
    image: "https://images.pexels.com/photos/5698398/pexels-photo-5698398.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Bold design with creative elements for design, marketing, and creative fields.",
    features: ["Unique layout", "Bold typography", "Visual elements", "Portfolio section", "Custom color schemes"],
    bestFor: ["Designers", "Artists", "Marketing professionals"]
  },
  {
    name: "Minimal",
    image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sleek and minimalist design that lets your content shine through.",
    features: ["Minimalist aesthetic", "Spacious layout", "Modern typography", "Clean sections", "Elegant styling"],
    bestFor: ["Tech roles", "Startups", "Modern industries"]
  },
  {
    name: "Executive",
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sophisticated design for senior-level professionals and executives.",
    features: ["Executive summary", "Leadership highlights", "Achievement focus", "Premium design", "Strategic layout"],
    bestFor: ["C-level executives", "Senior managers", "Board positions"]
  },
  {
    name: "Modern",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Contemporary design with a perfect balance of style and professionalism.",
    features: ["Modern layout", "Infographic elements", "Skill visualizations", "Dynamic sections", "Fresh typography"],
    bestFor: ["Tech professionals", "Digital roles", "Modern companies"]
  },
  {
    name: "Academic",
    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Structured design perfect for academic and research positions.",
    features: ["Publication section", "Research highlights", "Educational focus", "Structured layout", "Citation style"],
    bestFor: ["Researchers", "Professors", "PhD candidates"]
  }
];

export default function TemplatesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Templates</h1>
            <p className="text-muted-foreground text-lg">
              Choose from our collection of professionally designed templates to create your perfect resume.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {template.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.bestFor.map((role, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={`/create?template=${template.name.toLowerCase()}`}>
                      Use this template
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}