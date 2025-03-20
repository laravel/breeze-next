'use client';

import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useAuth } from '@/hooks/auth';
import AuthSessionStatus from '@/components/AuthSessionStatus';
import {  useEffect, useState } from 'react';
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";

interface Values {
    email: string;
    password: string;
    remember: boolean;
}
export default function LoginForm() {

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
       <>
           <AuthSessionStatus className="mb-4" status={status} />
           <Formik
               onSubmit={submitForm}
               validationSchema={LoginSchema}
               initialValues={{ email: '', password: '', remember: false }}>
               <Form className="flex flex-col gap-6">
                   <div className="flex flex-col items-center gap-2 text-center">
                       <h1 className="text-2xl font-bold">Login to your account</h1>
                       <p className="text-balance text-sm text-muted-foreground">
                           Enter your email below to login to your account
                       </p>
                   </div>
                   <div className="grid gap-6">
                       <div className="grid gap-2">
                           <Label htmlFor="email">Email</Label>
                           <Field
                               as={Input}
                               id="email"
                               name="email"
                               type="email"
                               placeholder="me@example.com"
                           />
                           <ErrorMessage
                               name="email"
                               component="span"
                               className="text-xs text-red-500"
                           />
                        </div>
                       <div className="grid gap-2">
                           <Label htmlFor="password">Password</Label>
                           <Field
                               as={Input}
                               id="password"
                               name="password"
                               type="password"
                               placeholder="**********"
                           />
                           <ErrorMessage
                               name="password"
                               component="span"
                               className="text-xs text-red-500"
                           />
                       </div>
                       <div className="flex items-center space-x-2">
                           <Field
                               as={Checkbox}
                               id="remember"
                               name="remember"
                           />
                           <label
                               htmlFor="remember"
                               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                           >
                               Remember me
                           </label>
                       </div>
                       <Button type="submit" className="w-full">
                           Login
                       </Button>
                   </div>
               </Form>
           </Formik>
       </>
    );
}
