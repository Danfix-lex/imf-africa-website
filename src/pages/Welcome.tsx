import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Radio, Crown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Welcome = () => {
  const { isAuthenticated, isLoading } = useAuth(); // Get auth state
  const navigate = useNavigate();

  useEffect(() => {
    // Key Change: If the user is already logged in, redirect them to the home page.
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // While checking the auth state, show a blank screen to avoid a flash of the welcome page.
  if (isLoading || isAuthenticated) {
    return <div className="min-h-screen bg-background"></div>;
  }
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center space-y-8"
      >
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="/lovable-uploads/7b18fcc3-0ead-40dd-b631-a1b81336c2dc.png" 
              alt="International Ministers Forum" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                IMF Africa
              </h1>
              <p className="text-lg md:text-xl font-medium text-muted-foreground mt-2">
                International Ministers Forum Africa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Welcome to Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of ministers across Africa in fellowship, learning, and spiritual growth. 
            Access live streams, programs, leadership resources, and more.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
        >
          <div className="flex flex-col items-center p-4 rounded-lg bg-card">
            <Radio className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium">Live Streams</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card">
            <Calendar className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium">Programs</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card">
            <Crown className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium">Leadership</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card">
            <Users className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium">Community</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/auth">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          Ready to join our community? Sign up or sign in to access your dashboard.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Welcome;