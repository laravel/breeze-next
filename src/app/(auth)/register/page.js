'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const Page = () => {
    const { register, registerPending } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [tc, setTc] = useState(false)
    const [errors, setErrors] = useState([])

    const toogleTc = event => {
        setTc(event.target.checked)
        if (tc && !errors.length)
            setErrors({ 'tc': ['You must accept the T&Cs to register'] })
        else
            setErrors([])
    }
    const submitForm = event => {
        event.preventDefault()
        if (tc)
            register({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
                setErrors,
            })
        else
            setErrors({ 'tc': ['You must accept the T&Cs to register'] })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Prénom</Label>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block w-full mt-1"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                    autoComplete="name"
                />
                <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block w-full mt-1"
                    onChange={event => setEmail(event.target.value)}
                    required
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
                        autoComplete="new-password"
                    />
                    <button className="absolute flex items-center justify-center w-6 h-6 top-2 right-2" title={showPassword ? 'Masquer' : 'Afficher'} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </button>
                </div>
                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">Confirm Password</Label>
                <div className="relative">
                    <Input
                        id="passwordConfirmation"
                        type={showPassword ? "text" : "password"}
                        value={passwordConfirmation}
                        className="block w-full mt-1"
                        onChange={event => setPasswordConfirmation(event.target.value)}
                        required
                    />
                    <button className="absolute flex items-center justify-center w-6 h-6 top-2 right-2" title={showPassword ? 'Masquer' : 'Afficher'} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </button>
                </div>
                <InputError messages={errors.password_confirmation} className="mt-2" />
            </div>

            {/* T&Cs */}
            <div className="block mt-4">
                <label
                    htmlFor="tc"
                    className="inline-flex items-center">
                    <input
                        id="tc"
                        type="checkbox"
                        className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={event => toogleTc(event)}
                    />
                    <span className="ml-2 text-sm text-gray-600">I accept this website's T&Cs.</span>
                </label>
                <InputError messages={errors.tc} className="mt-2" />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/login"
                    className="text-sm text-gray-600 underline hover:text-gray-900">
                    Already registered?
                </Link>

                <Button className="ml-4" disabled={registerPending}>{registerPending ? 'Please wait...' : 'Register'}</Button>
            </div>
        </form>
    )
}

export default Page
