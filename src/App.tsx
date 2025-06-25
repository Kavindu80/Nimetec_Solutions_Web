import { Route, Switch, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";

// Pages
import Home from "./pages/home";
import NotFound from "./pages/not-found";

// Project Pages
import DigitalWalletPro from "./pages/projects/digital-wallet-pro";
import EdulankaOnline from "./pages/projects/edulanka-online";
import LankaMarketplace from "./pages/projects/lanka-marketplace";
import MediconnectLanka from "./pages/projects/mediconnect-lanka";
import SmartLogisticsHub from "./pages/projects/smart-logistics-hub";
import TourismLKMobile from "./pages/projects/tourismLK-mobile";

// Service Pages
import WebDevelopment from "./pages/services/web-development";
import MobileDevelopment from "./pages/services/mobile-development";
import ApiDevelopment from "./pages/services/api-development";
import CloudSolutions from "./pages/services/cloud-solutions";
import DigitalTransformation from "./pages/services/digital-transformation";
import MaintenanceSupport from "./pages/services/maintenance-support";

// Import required CSS
import "./index.css";
import "./styles/premium-effects.css";
import "./styles/smooth-animations.css";

// Add lazysizes for better image loading
import "lazysizes";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          
          {/* Project Routes */}
          <Route path="/projects/digital-wallet-pro" component={DigitalWalletPro} />
          <Route path="/projects/edulanka-online" component={EdulankaOnline} />
          <Route path="/projects/lanka-marketplace" component={LankaMarketplace} />
          <Route path="/projects/mediconnect-lanka" component={MediconnectLanka} />
          <Route path="/projects/smart-logistics-hub" component={SmartLogisticsHub} />
          <Route path="/projects/tourismLK-mobile" component={TourismLKMobile} />
          
          {/* Service Routes */}
          <Route path="/services/web-development" component={WebDevelopment} />
          <Route path="/services/mobile-development" component={MobileDevelopment} />
          <Route path="/services/api-development" component={ApiDevelopment} />
          <Route path="/services/cloud-solutions" component={CloudSolutions} />
          <Route path="/services/digital-transformation" component={DigitalTransformation} />
          <Route path="/services/maintenance-support" component={MaintenanceSupport} />
          
          {/* 404 Route */}
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
} 