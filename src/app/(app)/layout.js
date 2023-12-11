'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {children}
        </div>
    )
}

export default AppLayout
