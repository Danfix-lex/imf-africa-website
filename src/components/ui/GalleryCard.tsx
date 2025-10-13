'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Image, 
  Play, 
  FileText, 
  Download, 
  Eye 
} from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'document';
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  downloadUrl: string;
  category: string;
  date: string;
  duration?: number;
  format?: string;
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onOpenDialog: (item: GalleryItem) => void;
  onDownload: (url: string, title: string) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  item, 
  index, 
  onOpenDialog, 
  onDownload 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg">
        <div className="relative" onClick={() => onOpenDialog(item)}>
          {/* Media Type Indicator */}
          <div className="absolute top-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg">
            {item.type === 'image' ? (
              <Image className="w-5 h-5" />
            ) : item.type === 'video' ? (
              <Play className="w-5 h-5" />
            ) : (
              <FileText className="w-5 h-5" />
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4 z-10">
            <Badge variant="secondary" className="font-medium">
              {item.category}
            </Badge>
          </div>

          {/* Media Preview */}
          {item.type === 'video' ? (
            <div className="w-full h-56 bg-black flex items-center justify-center relative">
              <Play className="w-12 h-12 text-white" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : item.type === 'document' ? (
            <div className="w-full h-56 bg-primary/10 flex items-center justify-center">
              {item.format?.toLowerCase() === 'pdf' ? (
                <FileText className="w-16 h-16 text-primary" />
              ) : (
                <FileText className="w-16 h-16 text-primary" />
              )}
            </div>
          ) : (
            <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
              {item.thumbnail ? (
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Image className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
        </CardHeader>

        <CardContent className="flex-grow pb-2">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {item.description}
          </p>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>{formatDate(item.date)}</span>
            {item.type === 'video' && item.duration && (
              <span>{formatDuration(item.duration)}</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full rounded-lg py-2 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onDownload(item.downloadUrl, item.title);
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default GalleryCard;