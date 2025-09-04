import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/utils/toast";

const mediaFormSchema = z.object({
  program_id: z.string().min(1, "Program is required"),
  video_url: z.string().optional(),
  file: z.instanceof(FileList).optional(),
});

type MediaFormValues = z.infer<typeof mediaFormSchema>;

interface Program {
  id: string;
  title: string;
}

export const MediaForm = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const form = useForm<MediaFormValues>({
    resolver: zodResolver(mediaFormSchema),
  });

  useEffect(() => {
    const fetchPrograms = async () => {
      const { data } = await supabase.from("programs").select("id, title");
      if (data) setPrograms(data);
    };
    fetchPrograms();
  }, []);

  const onSubmit = async (values: MediaFormValues) => {
    if (values.file && values.file.length > 0) {
      const file = values.file[0];
      const { data: fileData, error: uploadError } = await supabase.storage
        .from("media")
        .upload(`public/${file.name}`, file);

      if (uploadError) {
        toast.error("Failed to upload file.");
        return;
      }

      const { error } = await supabase.from("media").insert([
        {
          program_id: values.program_id,
          file_name: file.name,
          file_type: file.type,
          file_size: file.size,
          file_url: fileData.path,
        },
      ]);
      if (error) {
        toast.error("Failed to create media record.");
      } else {
        toast.success("Media uploaded successfully!");
        form.reset();
      }
    } else if (values.video_url) {
      const { error } = await supabase.from("media").insert([
        {
          program_id: values.program_id,
          video_url: values.video_url,
        },
      ]);
      if (error) {
        toast.error("Failed to add video link.");
      } else {
        toast.success("Video link added successfully!");
        form.reset();
      }
    } else {
      toast.error("Please provide a file or a video URL.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="program_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program.id} value={program.id}>
                      {program.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Media File</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="video_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video URL</FormLabel>
              <FormControl>
                <Input placeholder="https://youtube.com/watch?v=..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Media</Button>
      </form>
    </Form>
  );
};