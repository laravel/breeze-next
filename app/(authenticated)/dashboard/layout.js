'use client';

import Navigation from '@/components/Navigation';
import { useAuth } from '@/hooks/auth';

export default function AuthLayout({ children }) {
    const { user } = useAuth({ middleware: 'auth' })

    if (typeof user === "undefined") {
        return null;
    }

  return (
      <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main>{children}</main>
      </div>
  )
}