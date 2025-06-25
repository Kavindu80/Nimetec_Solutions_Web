import { useEffect } from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  // Log 404 errors for monitoring
  useEffect(() => {
    console.error(`404 page not found: ${window.location.pathname}`);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">404</h1>
        
        <p className="mt-4 text-xl text-muted-foreground">
          Page not found
        </p>
        
        <p className="mt-4 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Link href="/">
            <a className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
