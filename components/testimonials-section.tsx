"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    testimonial: "I was skeptical about AI-generated content, but ResumeAI blew me away. It helped me highlight skills I didn't even realize were important for my role. Got 3 interview calls within a week!",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    testimonial: "The templates are stunning and the AI suggestions for my marketing experience were spot-on. The whole process took me less than 20 minutes and the result looks professional.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Recent Graduate",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    testimonial: "As a recent graduate with limited experience, I was struggling to create a decent resume. ResumeAI helped me showcase my academic projects and skills in a way that impressed recruiters.",
    rating: 4
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            See what our users have to say about their experience with ResumeAI.
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
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 relative"
              style={{
                transitionDelay: `${0.1 * index}s`
              }}
            >
              <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-background">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}