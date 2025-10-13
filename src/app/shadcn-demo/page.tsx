'use client';

import React from 'react';
import HeaderShadcn from '@/components/ui/HeaderShadcn';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Calendar, 
  User, 
  Settings, 
  Bell, 
  Heart, 
  Share, 
  Download,
  Star,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from 'next-themes';

const ShadcnDemoPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background">
      <HeaderShadcn />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            shadcn/ui Components Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcase of enhanced UI components using shadcn/ui for consistent design and improved user experience
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Theme Toggle</h2>
          <div className="flex justify-center gap-4">
            <Button 
              variant={theme === 'light' ? 'default' : 'outline'}
              onClick={() => setTheme('light')}
            >
              <Sun className="w-4 h-4 mr-2" />
              Light Mode
            </Button>
            <Button 
              variant={theme === 'dark' ? 'default' : 'outline'}
              onClick={() => setTheme('dark')}
            >
              <Moon className="w-4 h-4 mr-2" />
              Dark Mode
            </Button>
          </div>
        </div>

        {/* Button Variants */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Card Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Simple card with header, content, and footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a basic card component with a header, content area, and footer.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Get Started</Button>
              </CardFooter>
            </Card>

            {/* Card with Badge */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Card with Badge</CardTitle>
                    <CardDescription>Card featuring badge components</CardDescription>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This card demonstrates the use of badges for status indicators.
                </p>
                <div className="flex gap-2">
                  <Badge>React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="secondary">UI</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Interactive Card
                </CardTitle>
                <CardDescription>Card with interactive elements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This card has hover effects and interactive buttons.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Form Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
                <CardDescription>Various input field styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
                <div className="flex gap-2">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Components</CardTitle>
                <CardDescription>Custom select dropdowns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ministry">Ministry</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="outreach">Outreach</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="ghana">Ghana</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dialog Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Dialogs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialogs</CardTitle>
              <CardDescription>Interactive modal components</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ministry Information</DialogTitle>
                    <DialogDescription>
                      Details about our ministry programs and initiatives
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground">
                      This is a modal dialog component from shadcn/ui. It provides a clean and 
                      accessible way to display important information or collect user input.
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Icon Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icons</h2>
          <Card>
            <CardHeader>
              <CardTitle>Lucide Icons</CardTitle>
              <CardDescription>Consistent icon set for UI elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <User className="w-6 h-6" />
                  <span className="text-xs">User</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Settings className="w-6 h-6" />
                  <span className="text-xs">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Bell className="w-6 h-6" />
                  <span className="text-xs">Bell</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Heart className="w-6 h-6" />
                  <span className="text-xs">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Share className="w-6 h-6" />
                  <span className="text-xs">Share</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Download className="w-6 h-6" />
                  <span className="text-xs">Download</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Calendar className="w-6 h-6" />
                  <span className="text-xs">Calendar</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted">
                  <Star className="w-6 h-6" />
                  <span className="text-xs">Star</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShadcnDemoPage;