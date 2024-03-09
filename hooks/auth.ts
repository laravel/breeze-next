import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { SetErrors, SetStatus } from '@/lib/definitions'

export const useAuth = ({
    middleware,
    redirectIfAuthenticated
}: {
    middleware?: string,
    redirectIfAuthenticated?: string
} = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/api/csrf')

    const register = async ({
        setErrors,
        ...props
    }: {
        setErrors: SetErrors
        [key: string]: any
    }) => {
        await csrf();

        setErrors({})

        axios
            .post('/api/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({
        setErrors,
        setStatus,
        ...props
    }: {
        setErrors: SetErrors
        setStatus: SetStatus
        [key: string]: any
    }) => {
        await csrf();

        setErrors({})
        setStatus(null)

        axios
            .post('/api/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email,
    }: {
        setErrors: SetErrors
        setStatus: SetStatus
        email: string
    }) => {
        await csrf()

        setErrors({});
        setStatus(null)

        axios
            .post('/api/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors || {})
            })
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: {
        setErrors: SetErrors
        setStatus: SetStatus
        [key: string]: any
    }) => {
        await csrf()

        setErrors({})
        setStatus(null)

        axios
            .post('/api/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                console.log(error.response.data)

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({
        setStatus,
    }: {
        setStatus: SetStatus
    }) => {
        axios
            .post('/api/verification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/api/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated ?? '')
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
