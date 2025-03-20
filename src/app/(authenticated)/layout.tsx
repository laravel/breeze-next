'use client';

import { ReactNode } from 'react'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth({ middleware: 'auth' })

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      {/* Page Content */}
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
