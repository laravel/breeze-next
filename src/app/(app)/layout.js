'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import Sidebar from '@/components/Dashboard/Layout/Sidebar'

const AppLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                <Sidebar show={showSidebar} setter={setShowSidebar} />
                <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout
