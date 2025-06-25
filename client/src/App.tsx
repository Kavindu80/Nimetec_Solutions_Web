import { Switch, Route, Router as WouterRouter } from "wouter";
import { lazy, Suspense, useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Custom type for the wouter location hook
type LocationHook = () => [string, (to: string) => void];

// Lazy load all page components
const Home = lazy(() => import("@/pages/home"));
const WebDevelopmentPage = lazy(() => import("@/pages/services/web-development"));
const MobileDevelopmentPage = lazy(() => import("@/pages/services/mobile-development"));
const CloudSolutionsPage = lazy(() => import("@/pages/services/cloud-solutions"));
const ApiDevelopmentPage = lazy(() => import("@/pages/services/api-development"));
const DigitalTransformationPage = lazy(() => import("@/pages/services/digital-transformation"));
const MaintenanceSupportPage = lazy(() => import("@/pages/services/maintenance-support"));
const LankaMarketplaceProject = lazy(() => import("@/pages/projects/lanka-marketplace"));
const EduLankaOnlineProject = lazy(() => import("@/pages/projects/edulanka-online"));
const DigitalWalletProProject = lazy(() => import("@/pages/projects/digital-wallet-pro"));
const SmartLogisticsHubProject = lazy(() => import("@/pages/projects/smart-logistics-hub"));
const TourismLKMobileProject = lazy(() => import("@/pages/projects/tourismLK-mobile"));
const MediConnectLankaProject = lazy(() => import("@/pages/projects/mediconnect-lanka"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component for route transitions
const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Use hash-based routing in production for better compatibility with static hosting
const useHashLocation: LocationHook = () => {
  const [location, setLocation] = useState<string>(
    window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    // Handle hash change
    const handleHashChange = () => {
      setLocation(window.location.hash.replace("#", "") || "/");
    };

    // Use popstate for history changes and hashchange for direct hash manipulation
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // Redirect function that modifies the hash
  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [location, navigate];
};

// Determine if we should use hash routing based on environment
const useRouter = (): LocationHook | undefined => {
  // Use hash-based routing in production for compatibility with static hosting
  if (typeof window !== "undefined" && 
      (window.location.hostname !== "localhost" && 
       !window.location.hostname.includes("127.0.0.1"))) {
    return useHashLocation;
  }
  return undefined; // undefined will use wouter's default router
};

function AppRouter() {
  return (
    <WouterRouter hook={useRouter()}>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services/web-development" component={WebDevelopmentPage} />
          <Route path="/services/mobile-development" component={MobileDevelopmentPage} />
          <Route path="/services/cloud-solutions" component={CloudSolutionsPage} />
          <Route path="/services/api-development" component={ApiDevelopmentPage} />
          <Route path="/services/digital-transformation" component={DigitalTransformationPage} />
          <Route path="/services/maintenance-support" component={MaintenanceSupportPage} />
          <Route path="/projects/lanka-marketplace" component={LankaMarketplaceProject} />
          <Route path="/projects/edulanka-online" component={EduLankaOnlineProject} />
          <Route path="/projects/digital-wallet-pro" component={DigitalWalletProProject} />
          <Route path="/projects/smart-logistics-hub" component={SmartLogisticsHubProject} />
          <Route path="/projects/tourismLK-mobile" component={TourismLKMobileProject} />
          <Route path="/projects/mediconnect-lanka" component={MediConnectLankaProject} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
