// src/pages/Index.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import SubscriptionForm from "@/components/SubscriptionForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If a user is not authenticated and the auth state has loaded,
    // redirect them to the welcome page.
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // While checking the auth state, show a blank page to avoid a flash of content
  if (isLoading || !isAuthenticated) {
    return <div className="min-h-screen bg-background"></div>;
  }
  
  // This content will only be rendered if the user is authenticated.
  return (
    <Layout>
      <Hero />
      <section className="py-16 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Upcoming Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Global Leadership Summit"
              description="An annual forum for ministers and leaders to exchange ideas, share best practices, and collaborate on initiatives that advance the gospel."
              date="October 20, 2025"
              imageUrl="https://source.unsplash.com/random/800x600/?leadership"
              url="/programs"
            />
            <ProgramCard
              title="Ministers' Conference"
              description="A gathering of ministers for spiritual rejuvenation, practical training, and networking."
              date="November 15, 2025"
              imageUrl="https://source.unsplash.com/random/800x600/?conference"
              url="/programs"
            />
            <ProgramCard
              title="Youth Empowerment Workshop"
              description="Equipping young ministers with the tools and knowledge to lead and disciple the next generation."
              date="December 5, 2025"
              imageUrl="https://source.unsplash.com/random/800x600/?youth"
              url="/programs"
            />
          </div>
          <Link to="/programs" className="mt-8 inline-block">
            <Button size="lg">View All Programs</Button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Stay Connected with IMF Africa
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest updates, event
            notifications, and spiritual resources directly in your inbox.
          </p>
          <SubscriptionForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;