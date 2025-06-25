import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Return to Home
          </Button>
        </Link>
          </div>
    </div>
  );
}
