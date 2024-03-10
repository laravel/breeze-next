import { fetchData } from '@/lib/fetch';
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const formData = await request.json();
    return await fetchData({
        path: '/login',
        request: request,
        method: 'POST',
        formData: formData
    });
}