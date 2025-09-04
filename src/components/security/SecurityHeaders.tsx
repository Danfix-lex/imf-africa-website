import { useEffect } from 'react';

// Component to set basic client-side security measures
export const SecurityHeaders = () => {
  useEffect(() => {
    // Prevent right-click context menu on production
    if (import.meta.env.PROD) {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };
      
      document.addEventListener('contextmenu', handleContextMenu);
      
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, []);

  useEffect(() => {
    // Set basic CSP-like restrictions via meta tags if not already present
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://qgzkrspvlyrcebemnmhe.supabase.co https://api.resend.com;";
      document.head.appendChild(meta);
    }

    // Prevent clickjacking
    if (!document.querySelector('meta[http-equiv="X-Frame-Options"]')) {
      const frameMeta = document.createElement('meta');
      frameMeta.httpEquiv = 'X-Frame-Options';
      frameMeta.content = 'DENY';
      document.head.appendChild(frameMeta);
    }

    // Prevent MIME sniffing
    if (!document.querySelector('meta[http-equiv="X-Content-Type-Options"]')) {
      const mimeJeta = document.createElement('meta');
      mimeJeta.httpEquiv = 'X-Content-Type-Options';
      mimeJeta.content = 'nosniff';
      document.head.appendChild(mimeJeta);
    }
  }, []);

  return null; // This component doesn't render anything
};