import { fetchData } from '@/lib/fetch'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    return await fetchData({
        path: '/api/user',
        request: request
    });
}
