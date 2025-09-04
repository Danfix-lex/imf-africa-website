import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Film, Calendar, MoreHorizontal, Book, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgramForm } from "@/components/admin/ProgramForm";
import { MediaForm } from "@/components/admin/MediaForm";
import { ResourceForm } from "@/components/admin/ResourceForm";
import { toast } from "@/utils/toast";

// Type Definitions
type UserType = {
  id: string;
  email: string | undefined;
  created_at: string;
  role: string;
};

type PrayerRequestAdmin = {
  id: string;
  name: string;
  request: string;
  is_public: boolean;
  is_answered: boolean;
};

type MemberResource = {
  id: string;
  title: string;
  description: string | null;
  file_name: string | null;
  file_url: string;
};

const Admin = () => {
  const navigate = useNavigate();
  // Key Change: Get the new 'isAdmin' flag directly from the context
  const { isAuthenticated, isLoading, isAdmin } = useAuth();

  // State Management
  const [users, setUsers] = useState<UserType[]>([]);
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequestAdmin[]>([]);
  const [resources, setResources] = useState<MemberResource[]>([]);

  // Data Fetching Functions
  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("user_id, user:users(*), role:user_roles(role)");

    if (error) {
      console.error("Error fetching users:", error);
    } else {
      const formattedUsers = data.map((profile) => ({
        id: profile.user_id,
        email: profile.user.email,
        created_at: new Date(profile.user.created_at).toLocaleDateString(),
        role: Array.isArray(profile.role) ? (profile.role[0]?.role || "user") : "user",
      }));
      setUsers(formattedUsers);
    }
  };

  const fetchPrayerRequests = async () => {
    const { data } = await supabase.from("prayer_requests").select("*");
    if (data) setPrayerRequests(data);
  };

  const fetchResources = async () => {
    const { data } = await supabase.from("member_resources").select("*");
    if (data) setResources(data);
  };

  useEffect(() => {
    // Key Change: This check is now simpler and more reliable
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      navigate("/admin/login");
    }
    if (isAdmin) {
      fetchUsers();
      fetchPrayerRequests();
      fetchResources();
    }
  }, [isAuthenticated, isLoading, isAdmin, navigate]);

  // Handler Functions
  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const { error } = await supabase.functions.invoke("delete-user", {
        body: { userId },
      });
      if (error) {
        toast.error("Failed to delete user.");
      } else {
        toast.success("User deleted successfully!");
        fetchUsers();
      }
    }
  };

  const handleDeleteResource = async (resource: MemberResource) => {
    if (window.confirm(`Are you sure you want to delete "${resource.title}"?`)) {
        const { error: storageError } = await supabase.storage.from("member-resources").remove([resource.file_url]);
        if (storageError) {
            toast.error(`Storage error: ${storageError.message}`);
            return;
        }
        const { error: dbError } = await supabase.from("member_resources").delete().eq("id", resource.id);
        if (dbError) {
            toast.error(`Database error: ${dbError.message}`);
        } else {
            toast.success("Resource deleted successfully!");
            fetchResources();
        }
    }
  };

  if (isLoading || !isAdmin) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
            <p className="text-muted-foreground">Verifying access...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="mb-8 flex-wrap h-auto justify-start">
            <TabsTrigger value="users"><User className="mr-2 h-4 w-4" />User Management</TabsTrigger>
            <TabsTrigger value="programs"><Calendar className="mr-2 h-4 w-4" />Program Management</TabsTrigger>
            <TabsTrigger value="media"><Film className="mr-2 h-4 w-4" />Media Management</TabsTrigger>
            <TabsTrigger value="prayer_requests"><User className="mr-2 h-4 w-4" />Prayer Requests</TabsTrigger>
            <TabsTrigger value="resources"><Book className="mr-2 h-4 w-4" />Member Resources</TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader><CardTitle>Registered Users</CardTitle></CardHeader>
              <CardContent>
                <Table>
                    <TableHeader><TableRow><TableHead>Email</TableHead><TableHead>Registered</TableHead><TableHead>Role</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {users.map((user) => (<TableRow key={user.id}><TableCell>{user.email}</TableCell><TableCell>{user.created_at}</TableCell><TableCell><Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>{user.role}</Badge></TableCell><TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => handleDeleteUser(user.id)} className="text-red-600">Delete</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>))}
                    </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Program Management Tab */}
          <TabsContent value="programs">
            <Card>
              <CardHeader><CardTitle>Create New Program</CardTitle></CardHeader>
              <CardContent><ProgramForm /></CardContent>
            </Card>
          </TabsContent>

          {/* Media Management Tab */}
          <TabsContent value="media">
            <Card>
              <CardHeader><CardTitle>Add New Media</CardTitle></CardHeader>
              <CardContent><MediaForm /></CardContent>
            </Card>
          </TabsContent>

          {/* Prayer Requests Tab */}
          <TabsContent value="prayer_requests">
            <Card>
              <CardHeader><CardTitle>Prayer Requests</CardTitle></CardHeader>
              <CardContent>
                <Table>
                    <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Request</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {prayerRequests.map((req) => (<TableRow key={req.id}><TableCell>{req.name}</TableCell><TableCell className="max-w-xs truncate">{req.request}</TableCell><TableCell><Badge variant={req.is_answered ? "secondary" : "default"}>{req.is_answered ? "Answered" : "Pending"}</Badge></TableCell><TableCell>{/* Actions can be added here */}</TableCell></TableRow>))}
                    </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Member Resources Tab */}
          <TabsContent value="resources">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader><CardTitle>Upload New Resource</CardTitle></CardHeader>
                        <CardContent><ResourceForm onUploadSuccess={fetchResources} /></CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader><CardTitle>Uploaded Resources</CardTitle></CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>File Name</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    {resources.map((res) => (<TableRow key={res.id}><TableCell>{res.title}</TableCell><TableCell>{res.file_name}</TableCell><TableCell><Button variant="destructive" size="sm" onClick={() => handleDeleteResource(res)}><Trash2 className="h-4 w-4" /></Button></TableCell></TableRow>))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;