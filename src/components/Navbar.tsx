import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LayoutDashboard, LogOut, User, Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const { isAuthenticated, profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Determine the correct home link based on authentication status
  const homeLink = isAuthenticated ? "/dashboard" : "/";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link to={homeLink} className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="hidden font-bold sm:inline-block">IMF Africa</span>
          </Link>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <div className="flex flex-col space-y-4">
                  <Link to={homeLink} onClick={() => { /* close sheet */ }}>Home</Link>
                  <Link to="/about" onClick={() => { /* close sheet */ }}>About</Link>
                  <Link to="/beliefs" onClick={() => { /* close sheet */ }}>Our Beliefs</Link>
                  <Link to="/leadership" onClick={() => { /* close sheet */ }}>Leadership</Link>
                  <Link to="/live-streams" onClick={() => { /* close sheet */ }}>Live Streams</Link>
                  <Link to="/programs" onClick={() => { /* close sheet */ }}>Programs</Link>
                  <Link to="/giving" onClick={() => { /* close sheet */ }}>Giving</Link>
                  <Link to="/prayer-requests" onClick={() => { /* close sheet */ }}>Prayer Requests</Link>
                  {isAuthenticated && (
                    <>
                      <Separator className="my-2" />
                      <Link to="/dashboard" onClick={() => { /* close sheet */ }}>Dashboard</Link>
                      <Link to="/membership" onClick={() => { /* close sheet */ }}>Membership</Link>
                      <Button onClick={handleLogout} variant="ghost" className="w-full justify-start">
                        Logout
                      </Button>
                    </>
                  )}
                  {!isAuthenticated && (
                    <>
                      <Separator className="my-2" />
                      <Link to="/auth">
                        <Button className="w-full">Sign In</Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-4">
          <Link to={homeLink}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/beliefs">Our Beliefs</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/live-streams">Live Streams</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/giving">Giving</Link>
          <Link to="/prayer-requests">Prayer Requests</Link>
        </div>

        {/* User Actions and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          {!isAuthenticated ? (
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback>
                      {profile?.display_name?.charAt(0) || <User className="h-5 w-5" />}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{profile?.display_name || "User"}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {profile?.role || "user"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;