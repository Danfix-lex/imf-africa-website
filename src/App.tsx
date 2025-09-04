import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SecurityHeaders } from "./components/security/SecurityHeaders";
import Welcome from "./pages/Welcome";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AdminAuth from "./pages/AdminAuth";
import LiveStreams from "./pages/LiveStreams";
import Programs from "./pages/Programs";
import Leadership from "./pages/Leadership";
import Dashboard from "./pages/Dashboard";
import Giving from "./pages/Giving";
import PrayerRequests from "./pages/PrayerRequests";
import Beliefs from "./pages/Beliefs"; // Import the new page
import About from "./pages/About";
import Membership from "./pages/Membership";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";


const App = () => (
  <TooltipProvider>
    <SecurityHeaders />
    <Toaster />
    <Sonner />
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/login" element={<AdminAuth />} />
          <Route path="/live-streams" element={<LiveStreams />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/prayer-requests" element={<PrayerRequests />} />
          <Route path="/beliefs" element={<Beliefs />} /> {/* Add the route */}
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  </TooltipProvider>
);

export default App;