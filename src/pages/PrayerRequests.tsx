import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/utils/toast";
import { useAuth } from "@/context/AuthContext";

interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  created_at: string;
}

const PrayerRequests = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState<PrayerRequest[]>([]);

  useEffect(() => {
    if (user && user.user_metadata.name) {
      setName(user.user_metadata.name);
    }
    fetchRequests();
  }, [user]);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: false });

    if (data) {
      setRequests(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.from("prayer_requests").insert([
      { name, request, is_public: isPublic, user_id: user?.id },
    ]);

    if (error) {
      toast.error("Failed to submit prayer request.");
    } else {
      toast.success("Your prayer request has been submitted.");
      setName(user?.user_metadata.name || "");
      setRequest("");
      fetchRequests();
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Prayer Wall</h1>
        <p className="text-muted-foreground text-lg text-center mb-12">
          Submit your prayer requests and join us in praying for one another.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Prayer Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="request">Prayer Request</Label>
                  <Textarea
                    id="request"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="Share your prayer request here..."
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPublic"
                    checked={isPublic}
                    onCheckedChange={(checked) => setIsPublic(Boolean(checked))}
                  />
                  <Label htmlFor="isPublic">Make this prayer public</Label>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-4">Community Prayers</h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4">
              {requests.map((req) => (
                <Card key={req.id} className="bg-secondary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold">{req.name}</p>
                    <p className="text-muted-foreground">{req.request}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(req.created_at).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrayerRequests;