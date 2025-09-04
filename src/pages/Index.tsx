import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { t } = useTranslation();
  const [upcomingPrograms, setUpcomingPrograms] = useState<any[]>([]);
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    const fetchUpcomingPrograms = async () => {
      const { data } = await supabase
        .from("programs")
        .select("*, media(file_url)")
        .eq("is_upcoming", true)
        .limit(3);

      if (data) {
        const formattedPrograms = data.map((program) => ({
          id: program.id,
          title: program.title,
          description: program.description,
          imageUrl: program.media[0]?.file_url
            ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/${program.media[0]?.file_url}`
            : "/placeholder.svg",
          date: program.date,
          time: new Date(program.date).toLocaleTimeString(),
          location: "Online",
          speaker: "IMF Africa",
        }));
        setUpcomingPrograms(formattedPrograms);
      }
    };
    fetchUpcomingPrograms();
  }, []);

  if (isLoading || !isAuthenticated) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <Layout fullWidth withoutFooter={false}>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        {/* ... About section content ... */}
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.p
                className="text-primary font-medium mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("programs.title")}
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("programs.heading")}
              </motion.h2>
            </div>
            <Link to="/programs" className="mt-4 md:mt-0">
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="ghost" className="flex items-center group">
                  {t("programs.viewAll")}
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight size={16} className="ml-1" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {upcomingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        {/* ... CTA section content ... */}
      </section>
    </Layout>
  );
};

export default Index;