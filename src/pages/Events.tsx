// src/pages/Events.tsx

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Stored as a string in ISO format
  time: string; // Stored as a string, e.g., "10:00 AM"
  location: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true }); // Order by date to show upcoming events first

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data as Event[]);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Events & Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Stay up-to-date with our upcoming events, conferences, and programs. Join us for a time of fellowship and spiritual growth.
          </p>
        </motion.div>

        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading events...</p>
        ) : events.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>{format(new Date(event.date), "PPP")}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No upcoming events are scheduled at the moment.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;