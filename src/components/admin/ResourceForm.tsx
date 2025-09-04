import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/utils/toast";

const resourceFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  file: z.instanceof(FileList).refine(files => files.length > 0, "File is required"),
});

type ResourceFormValues = z.infer<typeof resourceFormSchema>;

export const ResourceForm = ({ onUploadSuccess }: { onUploadSuccess: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
  });

  const onSubmit = async (values: ResourceFormValues) => {
    setIsLoading(true);
    const file = values.file[0];

    try {
      // Upload file to Supabase Storage
      const { data: fileData, error: uploadError } = await supabase.storage
        .from("member-resources")
        .upload(`public/${Date.now()}_${file.name}`, file);

      if (uploadError) throw uploadError;

      // Add record to the database
      const { error: dbError } = await supabase.from("member_resources").insert({
        title: values.title,
        description: values.description,
        file_name: file.name,
        file_type: file.type,
        file_size: file.size,
        file_url: fileData.path,
      });

      if (dbError) throw dbError;

      toast.success("Resource uploaded successfully!");
      form.reset();
      onUploadSuccess(); // Callback to refresh the list of resources
    } catch (error: any) {
      toast.error(`Upload failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl><Input placeholder="Resource Title" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl><Textarea placeholder="Describe the resource..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <FormField control={form.control} name="file" render={({ field: { onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl><Input type="file" onChange={e => onChange(e.target.files)} {...fieldProps} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload Resource"}
        </Button>
      </form>
    </Form>
  );
};