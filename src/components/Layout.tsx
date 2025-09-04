import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
  withoutFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth, withoutFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-grow pt-20", !fullWidth && "container-custom")}>
        {children}
      </main>
      {!withoutFooter && <Footer />}
    </div>
  );
};

export default Layout;