// src/pages/LiveStreams.tsx

import React, { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import LiveStream from "@/components/LiveStream";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

  return () => {
    clearTimeout(handler);
  };
}, [value, delay]);

  return debouncedValue;
};

const LiveStreams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [streams, setStreams] = useState<any[]>([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const fetchStreams = useCallback(async (search: string) => {
    let query = supabase
      .from("media")
      .select("*, program:programs(*)")
      .not("video_url", "is", null);

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (data) {
      const formattedStreams = data.map((media) => {
        const videoId = media.video_url?.split("v=")[1]?.split("&")[0];
        const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : "/placeholder.svg";
        const streamUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : media.video_url;

        return {
          id: media.id,
          title: media.program?.title,
          description: media.program?.description,
          thumbnailUrl,
          streamUrl,
          startTime: media.program?.date,
          viewerCount: 0,
          isLive: media.program?.is_upcoming,
        };
      });
      setStreams(formattedStreams);
    }
  }, []);

  useEffect(() => {
    fetchStreams(debouncedSearchQuery);
  }, [debouncedSearchQuery, fetchStreams]);

  const filteredStreams = streams.filter(
    (stream) =>
      stream.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Live Streams</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Watch live and recorded sessions from our conferences, workshops, and
            events. Learn from experienced ministers and church leaders from
            across Africa.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              className="pl-10"
              placeholder="Search streams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredStreams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStreams.map((stream, index) => (
              <LiveStream
                key={stream.id}
                {...stream}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No live streams match your search.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LiveStreams;