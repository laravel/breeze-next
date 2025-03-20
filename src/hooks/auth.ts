import { useCallback, useEffect } from 'react';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { useRouter, useParams } from 'next/navigation';

interface AuthOptions {
    middleware?: 'guest' | 'auth';
    redirectIfAuthenticated?: string;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: AuthOptions) => {
    const router = useRouter();
    const params = useParams();

    const {
        data: user,
        error,
        mutate,
    } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const register = async (data: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }) => {
        try {
            await csrf();
            await axios.post('/register', data);
            mutate();
        } catch (error) {
            throw error;
        }
    };

    const login = async (data: {
        email: string;
        password: string;
        remember: boolean;
    }) => {
        try {
            await csrf();
            await axios.post('/login', data);
            mutate();
        } catch (error) {
            throw error;
        }
    };

    const forgotPassword = async (data: { email: string }): Promise<AxiosResponse> => {
        try {
            await csrf();
            return await axios.post('/forgot-password', data);
        } catch (error) {
            throw error;
        }
    };

    const resetPassword = async (data: {
        email: string;
        password: string;
        password_confirmation: string;
    }) => {
        try {
            await csrf();
            const response = await axios.post('/reset-password', {
                ...data,
                token: params.token as string, // Type assertion since params.token is string | string[]
            });
            router.push('/login?reset=' + btoa(response.data.status));
        } catch (error) {
            throw error;
        }
    };

    const resendEmailVerification = async () => {
        try {
            return await axios.post('/email/verification-notification');
        } catch (error) {
            throw error;
        }
    };

    const logout = useCallback(async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate());
        }
        window.location.pathname = '/login';
    }, [error, mutate]);

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated);
        }
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at &&
            redirectIfAuthenticated
        ) {
            router.push(redirectIfAuthenticated);
        }
        if (middleware === 'auth' && error) {
            logout();
        }
    }, [user, error, middleware, redirectIfAuthenticated, logout, router]);

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    };
};
