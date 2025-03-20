import useSWR from 'swr';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import {useCallback, useEffect} from "react";

interface AuthOptions {
    middleware?: 'guest' | 'auth';
    redirectIfAuthenticated?: string;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: AuthOptions) => {
    const router = useRouter();
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
                logout();
            }),
    )
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const login = async (data: {
        email: string
        password: string
        remember: boolean
    }) => {
        try {
            await csrf()
            await axios.post('/login', data)
            await mutate()
        } catch (error) {
            throw error
        }
    }
    const logout = useCallback(async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate());
        }
        window.location.pathname = '/';
    }, [error, mutate]);

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated);
        }
        if (user?.email_verified_at && redirectIfAuthenticated) {
            router.push(redirectIfAuthenticated);
        }
    }, [user, middleware, redirectIfAuthenticated, router]);

    useEffect(() => {
        if (middleware === 'auth' && error) {
            logout();
        }
    }, [middleware, error, logout]);
    return {
        user,
        login,
        logout,
    };
};
