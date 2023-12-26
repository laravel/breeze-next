import Navigation from '@/components/Layouts/Navigation'
import MenuNav from '@/components/Layouts/MenuNav'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

const AppLayout = ({ children }) => {
    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })

     useEffect(() => {
         if (!user) {
             router.push('/')
         }
     }, [user])

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>JS-System v3</title>
            </Head>
            <main>
                <Navigation user={user} />
                <div className="flex justify-between mx-auto px-0 mt-16">
                    <MenuNav user={user} />

                    <div className="w-5/6 ml-auto p-3">{children}</div>
                </div>
            </main>
        </div>
    )
}

export default AppLayout
