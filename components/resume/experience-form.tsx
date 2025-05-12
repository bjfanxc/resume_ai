"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceForm() {
  const [experiences, setExperiences] = useState([{
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: ""
  }]);

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="space-y-4 p-4 border rounded-lg">
          <div>
            <Label htmlFor={`company-${index}`}>Company Name</Label>
            <Input id={`company-${index}`} placeholder="Company Name" />
          </div>
          <div>
            <Label htmlFor={`position-${index}`}>Position</Label>
            <Input id={`position-${index}`} placeholder="Job Title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input id={`startDate-${index}`} type="date" />
            </div>
            <div>
              <Label htmlFor={`endDate-${index}`}>End Date</Label>
              <Input id={`endDate-${index}`} type="date" />
            </div>
          </div>
          <div>
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea 
              id={`description-${index}`} 
              placeholder="Describe your responsibilities and achievements..."
              className="h-32"
            />
          </div>
        </div>
      ))}
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => setExperiences([...experiences, {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: ""
        }])}
      >
        Add Another Experience
      </Button>
    </div>
  );
}