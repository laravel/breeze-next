import ky from 'ky'

const baseReq = ky.extend({
    prefixUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    credentials: 'include'
})

const api = baseReq.extend({
    hooks: {
        beforeRequest: [
            request => {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
                request.headers.set('X-Requested-With', 'XMLHttpRequest')
                request.headers.set('Accept-Language', 'fr')
                request.headers.set('X-XSRF-TOKEN', decodeURIComponent(token))
            }
        ]
    }
})

export const csrf = () => baseReq.get('sanctum/csrf-cookie')
export default api