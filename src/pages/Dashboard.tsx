import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Settings, Plus, Home, Radio, Crown, HeartHandshake, Shield } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/utils/toast";

const Dashboard = () => {
  const navigate = useNavigate();
  // Key Change: Get the new 'isAdmin' flag directly from the context.
  const { user, profile, isAuthenticated, isLoading, isAdmin } = useAuth();

  const [myUpcomingPrograms, setMyUpcomingPrograms] = useState<any[]>([]);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
    if (profile) {
      setDisplayName(profile.display_name || "");
    }
  }, [isAuthenticated, isLoading, navigate, profile]);

  useEffect(() => {
    // Fetch user-specific data here
    const fetchData = async () => {
      // For now, fetching general upcoming programs as "My Programs"
      const { data: programsData } = await supabase
        .from("programs")
        .select("*, media(file_url)")
        .eq("is_upcoming", true)
        .limit(2);
      if (programsData) {
        setMyUpcomingPrograms(programsData.map(program => ({
          id: program.id,
          title: program.title,
          description: program.description,
          imageUrl: program.media[0]?.file_url ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/${program.media[0]?.file_url}` : "/placeholder.svg",
          date: program.date,
          time: new Date(program.date).toLocaleTimeString(),
          location: "Online",
          speaker: "IMF Africa",
        })));
      }
    };
    fetchData();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const { error } = await supabase.from("profiles").update({ display_name: displayName }).eq("user_id", user.id);
    if (error) {
      toast.error("Failed to update profile.");
    } else {
      toast.success("Profile updated successfully!");
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
            <p className="text-muted-foreground">Loading Dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.display_name || user?.email?.split('@')[0] || 'User'}!</h1>
            <p className="text-muted-foreground">
              Manage your IMF Africa account, programs, and streams from your dashboard.
            </p>
          </div>
          {/* Key Change: Use the new 'isAdmin' flag here. */}
          {isAdmin && (
            <Link to="/admin" className="mt-4 md:mt-0">
              <Button>
                <Shield size={16} className="mr-2" />
                Admin Panel
              </Button>
            </Link>
          )}
        </div>

        {/* Dashboard Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <Link to="/home"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardContent className="flex flex-col items-center p-6"><Home className="w-8 h-8 text-primary mb-2" /><span className="font-medium">Home</span></CardContent></Card></Link>
          <Link to="/live-streams"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardContent className="flex flex-col items-center p-6"><Radio className="w-8 h-8 text-primary mb-2" /><span className="font-medium">Live Streams</span></CardContent></Card></Link>
          <Link to="/programs"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardContent className="flex flex-col items-center p-6"><Calendar className="w-8 h-8 text-primary mb-2" /><span className="font-medium">Programs</span></CardContent></Card></Link>
          <Link to="/leadership"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardContent className="flex flex-col items-center p-6"><Crown className="w-8 h-8 text-primary mb-2" /><span className="font-medium">Leadership</span></CardContent></Card></Link>
          <Link to="/giving"><Card className="hover:shadow-lg transition-shadow cursor-pointer"><CardContent className="flex flex-col items-center p-6"><HeartHandshake className="w-8 h-8 text-primary mb-2" /><span className="font-medium">Giving</span></CardContent></Card></Link>
        </div>

        <Tabs defaultValue="programs" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="programs">My Programs</TabsTrigger>
            <TabsTrigger value="streams">Saved Streams</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="programs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myUpcomingPrograms.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  {...program}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
              <Link to="/programs">
                <Card className="border-dashed border-2 flex items-center justify-center h-full animate-fade-in hover:border-primary transition-colors" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                      <Button variant="ghost" className="h-20 w-20 rounded-full">
                        <Plus size={30} />
                      </Button>
                      <p className="mt-2 text-muted-foreground">Browse More Programs</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="streams">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-dashed border-2 flex items-center justify-center h-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground text-center">Saved streams feature coming soon!</p>
                  <Link to="/live-streams" className="mt-4">
                    <Button variant="outline">Browse Live Streams</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" value={user?.email || ''} disabled className="mt-1" />
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className="btn-primary">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};
export default Dashboard;