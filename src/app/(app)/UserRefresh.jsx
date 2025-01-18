'use client'

import { useAuth } from '@/hooks/auth'

function UserRefresh() {

    useAuth({
        middleware: 'auth'
    })

    return <></>
}

export default UserRefresh
