import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Download, FileText, Users, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

type MemberResource = {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
};

const Membership = () => {
  const [resources, setResources] = useState<MemberResource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      const { data } = await supabase
        .from("member_resources")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setResources(data);
    };
    fetchResources();
  }, []);

  const getPublicUrl = (filePath: string) => {
    return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/member-resources/${filePath}`;
  };

  const formatBytes = (bytes: number | null, decimals = 2) => {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Users className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Become a Member</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join a continental network of ministers dedicated to fellowship, growth, and Kingdom impact.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <div><Award className="mx-auto h-8 w-8 text-primary mb-2" /> <h3 className="font-semibold">Official Recognition</h3></div>
            <div><Handshake className="mx-auto h-8 w-8 text-primary mb-2" /> <h3 className="font-semibold">Continental Fellowship</h3></div>
            <div><FileText className="mx-auto h-8 w-8 text-primary mb-2" /> <h3 className="font-semibold">Exclusive Resources</h3></div>
        </div>

        <div className="text-center mb-16">
            <Link to="/auth">
                <Button size="lg">Register to Begin</Button>
            </Link>
        </div>

        {/* Downloadable Resources Section */}
        <Card>
          <CardHeader>
            <CardTitle>Member Resources</CardTitle>
            <CardDescription>Download official documents, training materials, and more.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <p className="text-xs text-muted-foreground">{formatBytes(resource.file_size)}</p>
                    </div>
                  </div>
                  <a href={getPublicUrl(resource.file_url)} download target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Membership;