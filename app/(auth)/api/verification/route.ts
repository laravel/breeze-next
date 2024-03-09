import { fetchData } from '@/lib/fetch'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    return await fetchData({
        path: '/email/verification-notification',
        request: request,
        method: 'POST'
    });
}
