'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  LogIn, 
  Home, 
  Info, 
  Users, 
  Camera, 
  Newspaper, 
  Phone, 
  Sun, 
  Moon 
} from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { useTheme } from 'next-themes';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

// Organized navigation structure with logical grouping
const navigation: NavigationItem[] = [
  { name: 'Home', href: '/welcome' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

const HeaderShadcn: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/welcome" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178679/logo_wv6j8l.png"
              alt="IMF Africa Logo"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/36x36?text=Logo';
              }}
            />
            <span className="text-xl font-bold text-primary">IMF AFRICA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={pathname === item.href ? "default" : "ghost"}
              asChild
              className="rounded-full px-3 py-1.5 text-sm font-medium"
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </Button>
          ))}
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          {/* Auth Buttons */}
          <Button variant="default" asChild className="rounded-full">
            <Link href="/auth">
              <User className="mr-2 h-4 w-4" />
              Join Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link 
                    href="/welcome" 
                    className="flex items-center gap-2"
                    onClick={handleLinkClick}
                  >
                    <img
                      src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178679/logo_wv6j8l.png"
                      alt="IMF Africa Logo"
                      className="h-8 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/32x32?text=Logo';
                      }}
                    />
                    <span className="text-lg font-bold text-primary">IMF AFRICA</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-auto py-4">
                  <div className="px-4 py-2">
                    <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground">Navigation</h3>
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Button
                          key={item.name}
                          variant={pathname === item.href ? "default" : "ghost"}
                          asChild
                          className="w-full justify-start rounded-full"
                          onClick={handleLinkClick}
                        >
                          <Link href={item.href}>
                            {item.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 py-2">
                    <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground">Account</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start rounded-full" asChild>
                        <Link href="/auth" onClick={handleLinkClick}>
                          <LogIn className="mr-2 h-4 w-4" />
                          Sign In
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t p-4">
                  <Button variant="outline" className="w-full rounded-full" onClick={toggleTheme}>
                    {theme === 'dark' ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        Switch to Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderShadcn;