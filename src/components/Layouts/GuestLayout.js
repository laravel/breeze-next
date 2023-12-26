
import Head from 'next/head'
import React from 'react'

const GuestLayout = ({ children }) => {

    return (
        <div className="bg-gray-100">
            <Head>
                <title>JS-System v3</title>
            </Head>
            <main>
                <div className="flex items-center justify-center h-screen">
                {children}
                </div>
            </main>
        </div>
    )
}

export default GuestLayout
