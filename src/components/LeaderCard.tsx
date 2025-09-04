import React from "react";
import { Mail, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Leader {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio?: string;
}

interface LeaderCardProps {
  leader: Leader;
  className?: string;
  style?: React.CSSProperties;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, className, style }) => {
  return (
    <motion.div 
      className={cn(
        "group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border",
        className
      )}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={leader.imageUrl}
          alt={leader.name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Hover overlay with contact info */}
        <motion.div 
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 text-white">
            <motion.button 
              className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={18} />
            </motion.button>
            <motion.button 
              className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Award size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {leader.name}
        </motion.h3>
        
        <motion.p 
          className="text-primary font-medium mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {leader.position}
        </motion.p>
        
        {leader.bio && (
          <motion.p 
            className="text-muted-foreground text-sm line-clamp-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {leader.bio}
          </motion.p>
        )}

        {/* Card actions */}
        <motion.div 
          className="mt-6 pt-4 border-t border-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin size={14} className="mr-1" />
              <span>Africa</span>
            </div>
            <motion.button 
              className="text-sm text-primary hover:underline font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;