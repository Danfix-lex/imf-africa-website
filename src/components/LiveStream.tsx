import React, { useState } from "react";
import { Play, Users, Calendar, Clock, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LiveStreamProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  streamUrl: string;
  startTime: string;
  viewerCount: number;
  isLive?: boolean;
  className?: string;
  isDetailed?: boolean;
  style?: React.CSSProperties;
}

const LiveStream: React.FC<LiveStreamProps> = ({
  id,
  title,
  description,
  thumbnailUrl,
  streamUrl,
  startTime,
  viewerCount,
  isLive = false,
  className,
  isDetailed = false,
  style,
}) => {
  const [playing, setPlaying] = useState(false);
  
  const handlePlay = () => {
    setPlaying(true);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <motion.div 
      className={cn(
        "rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg bg-card",
        isDetailed ? "flex flex-col" : "h-full",
        className
      )}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <div className="relative">
        {/* Thumbnail or Video */}
        {playing && isLive ? (
          <div className="aspect-video w-full">
            <iframe
              src={`${streamUrl}?autoplay=1`}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title={title}
            />
          </div>
        ) : (
          <div className="aspect-video w-full relative group">
            <motion.img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              {isLive ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    onClick={handlePlay}
                    className="bg-primary/90 hover:bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center"
                  >
                    <Play size={24} fill="white" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div 
                  className="bg-primary/90 text-white rounded-full w-16 h-16 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Calendar size={24} />
                </motion.div>
              )}
            </motion.div>
            
            {/* Live Badge */}
            {isLive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <Badge 
                  className="absolute top-2 left-2 bg-red-500 text-white font-medium flex items-center gap-1"
                  variant="default"
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-white inline-block"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  LIVE
                </Badge>
              </motion.div>
            )}
            
            {/* Viewer Count Badge */}
            {isLive && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Badge 
                  className="absolute top-2 right-2 bg-black/70 text-white"
                  variant="outline"
                >
                  <Users size={14} className="mr-1" />
                  {viewerCount.toLocaleString()}
                </Badge>
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <motion.h3 
          className="text-lg font-semibold line-clamp-2 mb-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>
        
        <p className={cn(
          "text-muted-foreground text-sm mb-4",
          isDetailed ? "" : "line-clamp-2"
        )}>
          {description}
        </p>
        
        <motion.div 
          className="mt-auto space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(startTime)}</span>
          </div>
          
          {!isLive && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="btn-primary w-full"
                variant="outline"
              >
                <Calendar size={16} className="mr-2" />
                Add to Calendar
              </Button>
            </motion.div>
          )}
          
          {isLive && !playing && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="btn-primary w-full"
                onClick={handlePlay}
              >
                <Play size={16} className="mr-2" />
                Watch Now
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiveStream;