'use server'

import {cookies} from 'next/headers'

/**
 * Forwards cookies from the client to the server, adds base URL, and adds additional headers.
 *
 * @param url
 * @param options
 */
export async function serverFetch(url, options = {}) {

    const cookieStore = await cookies();

    const session = cookieStore.get(process.env.LARAVEL_SESSION_COOKIE_NAME || 'laravel_session')?.value;
    const csrf = cookieStore.get(process.env.LARAVEL_CSRF_COOKIE_NAME || 'XSRF-TOKEN')?.value;

    if (! session || ! csrf) {
        // If either cookie is missing, return void. This should be handled by the useAuth hook on our client component.
        return;
    }

    const headers = new Headers();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('X-XSRF-TOKEN', decodeURIComponent(csrf));
    headers.append('Origin', process.env.NEXT_PUBLIC_FRONTEND_URL);

    cookieStore.getAll().forEach(cookie => {
        headers.append('Cookie', `${cookie.name}=${cookie.value}`);
    });

    const requestInit = {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : null,
        cache: 'no-cache',
    }

    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + url, requestInit);
}
