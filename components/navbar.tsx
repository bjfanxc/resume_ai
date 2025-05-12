"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <span className="text-primary">Resume</span>
          <span className="text-primary">AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/templates" className="text-foreground/80 hover:text-primary transition-colors">
            Templates
          </Link>
          <Link href="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/create">Create Resume</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link 
            href="/" 
            className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/templates" 
            className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Templates
          </Link>
          <Link 
            href="/pricing" 
            className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <hr className="my-2" />
          <div className="flex flex-col gap-2 px-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/create">Create Resume</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}