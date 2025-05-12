"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
  const searchParams = useSearchParams();
  const templateName = searchParams.get("template") || "professional";
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <main className="min-h-screen flex flex-col bg-muted/10">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left sidebar - Resume Form */}
          <div className="md:col-span-5 lg:col-span-4">
            <Card className="p-4 sticky top-24">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                
                <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                  <TabsContent value="personal">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="John Doe" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" placeholder="Software Engineer" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+1 (555) 000-0000" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Textarea 
                          id="summary" 
                          placeholder="Write a brief summary of your professional background and goals..."
                          className="mt-1.5 h-32 resize-none"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="experience">
                    <div className="space-y-4">
                      {/* Experience form fields will go here */}
                      <Button variant="outline" className="w-full">
                        Add Work Experience
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="education">
                    <div className="space-y-4">
                      {/* Education form fields will go here */}
                      <Button variant="outline" className="w-full">
                        Add Education
                      </Button>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </div>
          
          {/* Right side - Preview */}
          <div className="flex-1">
            <Card className="aspect-[1/1.4142] bg-white shadow-sm">
              <div className="w-full h-full p-8">
                <div className="text-center text-muted-foreground">
                  Resume Preview
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}