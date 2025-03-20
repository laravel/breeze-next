'use client';

import Link from 'next/link';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useAuth } from '@/hooks/auth';
import ApplicationLogo from '@/components/ApplicationLogo';
import AuthCard from '@/components/AuthCard';
import AuthSessionStatus from '@/components/AuthSessionStatus';
import { Suspense, useEffect, useState } from 'react';

interface Values {
    email: string;
    password: string;
    remember: boolean;
}
function LoginForm() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<string>('');

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    useEffect(() => {
        const resetToken = searchParams.get('reset');
        setStatus(resetToken ? atob(resetToken) : '');
    }, [searchParams]);

    const submitForm = async (
        values: Values,
        { setSubmitting, setErrors }: FormikHelpers<Values>,
    ) => {
        try {
            await login(values);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 422) {
                setErrors(error.response?.data?.errors);
            }
        } finally {
            setSubmitting(false);
            setStatus('');
        }
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('The email field is required.'),
        password: Yup.string().required('The password field is required.'),
    });

    return (
        <AuthCard
            logo={
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            }>
            <AuthSessionStatus className="mb-4" status={status} />

            <Formik
                onSubmit={submitForm}
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '', remember: false }}>
                <Form className="space-y-4">
                    {/* Rest of your form remains the same */}
                    <div>
                        <label htmlFor="email" className="block font-medium text-sm text-gray-700">
                            Email
                        </label>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <ErrorMessage
                            name="email"
                            component="span"
                            className="text-xs text-red-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-medium text-sm text-gray-700">
                            Password
                        </label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            className="block mt-1 w-full rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <ErrorMessage
                            name="password"
                            component="span"
                            className="text-xs text-red-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="remember" className="inline-flex items-center">
                            <Field
                                type="checkbox"
                                name="remember"
                                className="rounded-sm border-[#99A6AE] text-indigo-600 shadow-xs focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <span className="ml-2 text-[#252729] text-sm leading-[150%] tracking-[-0.4px] font-medium">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/forgot-password"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Forgot your password?
                        </Link>
                        <button
                            type="submit"
                            className="ml-3 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-hidden focus:border-gray-900 focus:ring-3 ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Login
                        </button>
                    </div>
                </Form>
            </Formik>
        </AuthCard>
    );
}
export default function LoginPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
