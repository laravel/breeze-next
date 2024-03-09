import { fetchData } from '@/lib/fetch';
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    return await fetchData({
        path: '/sanctum/csrf-cookie',
        request: request,
    })
}
