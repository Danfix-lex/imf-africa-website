import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext"; // 1. Import useAuth

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth(); // 2. Get the authentication state

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.div 
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background overlay with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591637333145-e8c87c440873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container-custom relative z-10 pt-8 pb-16 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p className="text-sm uppercase tracking-wide text-primary mb-2" variants={itemVariants} transition={{ duration: 0.5 }}>
            {t("hero.welcome")}
          </motion.p>
          <motion.h1 
            className="font-bold text-4xl md:text-6xl mb-6 leading-tight"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {t("hero.title")}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 leading-relaxed"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <Link to="/live-streams">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-primary py-6 px-8 text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  {t("hero.watchButton")}
                  <ChevronRight size={18} className="ml-1" />
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/programs">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="py-6 px-8 text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  <Play size={18} className="mr-1" /> 
                  {t("programs.viewAll")}
                </Button>
              </motion.div>
            </Link>

            {/* 3. Conditionally render the button */}
            {!isAuthenticated && (
              <Link to="/auth">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="secondary" className="py-6 px-8 text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                    {t("hero.authButton")}
                  </Button>
                </motion.div>
              </Link>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {[
              { count: "1,000+", label: "Ministers" },
              { count: "30+", label: "Countries" },
              { count: "120+", label: "Events" },
              { count: "5,000+", label: "Community Members" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass rounded-lg p-4 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.count}
                </span>
                <span className="text-sm md:text-base text-foreground/70">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;