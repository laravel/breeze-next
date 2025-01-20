'use server'

import { serverFetch } from '@/lib/serverFetch'

export const getUserAction = async () => {

    return await serverFetch('/api/user')
}
