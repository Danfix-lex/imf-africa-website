// src/pages/Membership.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  created_at: string;
}

const Membership = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [resources, setResources] = useState<Resource[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated. If not, redirect them to the welcome page.
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }

    const fetchResources = async () => {
      setIsFetching(true);
      const { data, error } = await supabase
        .from("member_resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching member resources:", error);
        // You might want to show a toast message here
      } else {
        setResources(data as Resource[]);
      }
      setIsFetching(false);
    };

    if (isAuthenticated) {
      fetchResources();
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Member Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            This page contains exclusive resources for our registered members, including documents, sermons, and other valuable content.
          </p>
        </motion.div>

        {isFetching ? (
          <p className="text-center text-muted-foreground">Loading resources...</p>
        ) : resources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <Button asChild className="w-full">
                      <a href={resource.file_url} target="_blank" rel="noopener noreferrer">
                        Access Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No member resources available at the moment.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Membership;