interface RequestData {
    headers: Headers
    json(): Promise<any>
}

interface FetchOptions {
    path: string
    request: RequestData
    method?: RequestMethod
    formData?: Record<string, any>
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

function createResponse(
    data: any,
    status: number,
    statusText: string,
    headers: Headers,
): Response {
    return new Response(data, {
        status,
        statusText,
        headers: new Headers(headers),
    })
}

export async function fetchData(options: FetchOptions): Promise<Response> {
    const { path, request, method = 'GET', formData = {} } = options

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + path

    const requestOptions: RequestInit = {
        method,
        headers: {
            Accept: 'application/json',
            origin: request.headers.get('host') || '',
            referer: request.headers.get('referer') || '',
            cookie: request.headers.get('cookie') || '',
            'x-xsrf-token': request.headers.get('x-xsrf-token') || '',
            'X-Requested-With': 'XMLHttpRequest',
        },
    }

    if (method !== 'GET') {
        (requestOptions.headers as Record<string, string>)['Content-Type'] =
            'application/json'
        requestOptions.body = JSON.stringify(formData)
    }

    const res = await fetch(url, requestOptions);

    if (res.ok) {
        if (res.status === 204) {
            return createResponse('', 200, res.statusText, res.headers)
        }
        const data = await res.json()
        return Response.json(data);
    }

    return res;
}

// Usage examples:

// 1. Making a GET request
// const response = await fetchData({ path: '/some-endpoint', request });

// 2. Making a POST request with formData
// const formData = await request.json();
// const response = await fetchData({ path: '/forgot-password', request, method: 'POST', formData });

// 3. Making a DELETE request
// const response = await fetchData({ path: '/delete-something', request, method: 'DELETE' });
