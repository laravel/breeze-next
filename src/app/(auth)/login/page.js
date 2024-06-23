'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const Login = () => {
    const router = useRouter()

    const { login, loginPending } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0)
        {
            setStatus(atob(router.reset))
        } else
        {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block w-full mt-1"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                        autoComplete="email"
                    />
                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            className="block w-full mt-1"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                        <button className="absolute flex items-center justify-center w-6 h-6 top-2 right-2" title={showPassword ? 'Masquer' : 'Afficher'} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                        </button>
                    </div>
                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Remember Me */}
                <div className="block mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event => setShouldRemember(event.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center mt-4">
                    <div className="flex flex-wrap items-center">
                        <Link
                            href="/register"
                            className="text-sm text-gray-600 underline hover:text-gray-900">
                            No account yet?
                        </Link>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-gray-600 underline hover:text-gray-900">
                            Forgot your password?
                        </Link>
                    </div>
                    <Button className="ml-3" disabled={loginPending}>{loginPending ? 'Please wait...' : 'Login'}</Button>
                </div>
            </form>
        </>
    )
}

export default Login
