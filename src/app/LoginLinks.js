'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden content-center px-6 py-4 sm:flex">
            {user ? (
                <Link href="/dashboard" className="ml-4 text-sm text-gray-700">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link href="/login" className="text-sm text-gray-700">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700">
                        Register
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
