"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, PenLine, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Create stunning resumes with <span className="text-primary">AI</span> in minutes
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Let AI help you build a professional resume that stands out. Choose from beautiful templates, 
                customize every detail, and get expert suggestions to showcase your skills.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/create">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/templates">
                  View Templates
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Templates</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">100K+</span>
                <span className="text-sm text-muted-foreground">Users</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">4.9/5</span>
                <span className="text-sm text-muted-foreground">Rating</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative bg-card rounded-2xl shadow-xl p-6 border border-border/50 backdrop-blur-sm">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl -z-10" />
              
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold text-lg">Professional Resume</h3>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                    <PenLine className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-accent/50 rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-1">Jane Doe</h2>
                  <p className="text-muted-foreground text-sm">Senior Product Designer</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span>janedoe@email.com</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Professional Summary</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced product designer with over 6 years of creating user-centered digital experiences for leading tech companies. Specialized in UI/UX design for mobile and web applications.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Work Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">Senior UI/UX Designer</p>
                        <p className="text-xs text-muted-foreground">2020 - Present</p>
                      </div>
                      <p className="text-primary text-xs">TechCorp Inc.</p>
                      <ul className="text-xs text-muted-foreground mt-1 list-disc list-inside">
                        <li>Led design system implementation</li>
                        <li>Improved user engagement by 35%</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">UI Designer</p>
                        <p className="text-xs text-muted-foreground">2018 - 2020</p>
                      </div>
                      <p className="text-primary text-xs">DesignHub Co.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">UI Design</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">UX Research</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">Figma</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">Adobe XD</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">Wireframing</span>
                    <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}