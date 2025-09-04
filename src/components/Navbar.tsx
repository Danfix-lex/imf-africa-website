import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, profile, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const mainLinks = [
    { name: "Programs", path: "/programs" },
    { name: "Live Streams", path: "/live-streams" },
    { name: "Membership", path: "/membership" },
    { name: "Prayer Wall", path: "/prayer-requests" },
    { name: "Giving", path: "/giving" },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "glass py-2 shadow-md" : "bg-transparent py-4")}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img src="/logo.png" alt="IMF Africa Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/home" className={navigationMenuTriggerStyle()}>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] lg:w-[250px]">
                    <ListItem to="/about" title="About Us">Our mission, vision, and leadership.</ListItem>
                    <ListItem to="/beliefs" title="Our Beliefs">Our core doctrines and statement of faith.</ListItem>
                    <ListItem to="/leadership" title="Leadership">Meet our executive board and leaders.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {mainLinks.map(link => (
                <NavigationMenuItem key={link.path}>
                  <Link to={link.path} className={navigationMenuTriggerStyle()}>{link.name}</Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side of Navbar */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageSwitcher />
          <ThemeToggle />
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  {profile?.display_name || user?.email?.split('@')[0] || 'User'}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full cursor-pointer">{t("nav.dashboard")}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
                  {t("nav.logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button className="btn-primary">{t("nav.signIn")}</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden", isOpen ? "max-h-screen py-4" : "max-h-0")}>
        <div className="container-custom flex flex-col space-y-2">
          <Link to="/home" className="py-2 px-4 font-medium hover:text-primary rounded-md">Home</Link>
          <Link to="/about" className="py-2 px-4 font-medium hover:text-primary rounded-md">About Us</Link>
          <Link to="/beliefs" className="py-2 px-4 font-medium hover:text-primary rounded-md">Our Beliefs</Link>
          <Link to="/leadership" className="py-2 px-4 font-medium hover:text-primary rounded-md">Leadership</Link>
          {mainLinks.map(link => (
             <Link key={link.path} to={link.path} className="py-2 px-4 font-medium hover:text-primary rounded-md">{link.name}</Link>
          ))}
          <div className="border-t border-border pt-4 mt-2 flex items-center gap-3 px-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <div className="border-t border-border pt-4 mt-2 px-4">
            {isAuthenticated ? (
              <div className="space-y-2">
                <Link to="/dashboard" className="block py-2 font-medium hover:text-primary">{t("nav.dashboard")}</Link>
                <button onClick={logout} className="w-full text-left py-2 font-medium text-red-500 hover:text-red-600">{t("nav.logout")}</button>
              </div>
            ) : (
              <Link to="/auth" className="py-2">
                <Button className="btn-primary w-full">{t("nav.signIn")}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { to: string }>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <Link to={to} ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;