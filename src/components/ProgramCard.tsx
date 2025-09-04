
import React from "react";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
  time,
  location,
  speaker,
  className,
  style,
}) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays size={16} className="mr-2 text-primary" />
            <span>{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <User size={16} className="mr-2 text-primary" />
            <span>{speaker}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button className="btn-primary flex-1">Learn More</Button>
          <Button variant="outline" className="flex-1">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
