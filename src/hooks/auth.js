import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import api, { csrf } from '@/lib/ky'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()
    const queryClient = useQueryClient()

    const { data: user, error } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const userData = await api("api/user").json()
                .then(res => { return res })
                .catch(async (err) => {
                    if (err.name === 'HTTPError')
                    {
                        const errorStatus = await err.response.status
                        if (errorStatus !== 409) throw error
                        router.push('/verify-email')
                    }
                })
            return userData
        },
        retry: false
    })
    const invalidate = () => queryClient.invalidateQueries({ queryKey: ['user'] })

    const { mutateAsync: register, isPending: registerPending } = useMutation({
        mutationFn: async ({ setErrors, ...props }) => {
            await csrf()
            setErrors([])

            await api.post('register', { json: props }).json()
                .then(res => { return res })
                .catch(async (err) => {
                    if (err.name === 'HTTPError')
                    {
                        const errorStatus = await err.response.status
                        if (errorStatus !== 422) throw error
                        await err.response.json().then((e) => setErrors(e.errors))
                    }
                })
        },
        onSuccess: () => {
            invalidate()
        }
    })

    const { mutateAsync: login, isPending: loginPending } = useMutation({
        mutationFn: async ({ setErrors, setStatus, ...props }) => {
            await csrf()
            setErrors([])
            setStatus(null)

            await api.post('login', { json: props }).json()
                .then(res => { return res })
                .catch(async (err) => {
                    if (err.name === 'HTTPError')
                    {
                        const errorStatus = await err.response.status
                        if (errorStatus !== 422) throw error
                        await err.response.json().then((e) => setErrors(e.errors))
                    }
                })
        },
        onSuccess: () => {
            invalidate()
        }
    })

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()
        setErrors([])
        setStatus(null)

        await api.post('forgot-password', { json: {email} }).json()
            .then(res => setStatus(res.status))
            .catch(async (err) => {
                if (err.name === 'HTTPError')
                {
                    const errorStatus = await err.response.status
                    if (errorStatus !== 422) throw error
                    await err.response.json()
                        .then((e) => setErrors(e.errors))
                }
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()
        setErrors([])
        setStatus(null)

        await api.post('reset-password', { json: { token: params.token, ...props } }).json()
            .then(res => router.push('/login?reset=' + btoa(res.status)))
            .catch(async (err) => {
                if (err.name === 'HTTPError')
                {
                    const errorStatus = await err.response.status
                    if (errorStatus !== 422) throw error
                    await err.response.json()
                        .then((e) => setErrors(e.errors))
                }
            })
    }

    const resendEmailVerification = async ({ setStatus }) => {
        await api.post('email/verification-notification').json()
            .then(res => setStatus(res.status))
    }

    const logout = async () => {
        if (!error)
        {
            await api.post('logout')
            await queryClient.resetQueries({ queryKey: ['user'] })
        }
        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && user && !user.email_verified_at)
            router.push('/verify-email')
        if (window.location.pathname === '/verify-email' && user?.email_verified_at)
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        registerPending,
        login,
        loginPending,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout
    }
}
