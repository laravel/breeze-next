'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get('email'))
    }, [searchParams.get('email')])

    return (
        <>
            {/* Session Status */}
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
                        />
                        <button className="absolute flex items-center justify-center w-6 h-6 top-2 right-2" title={showPassword ? 'Masquer' : 'Afficher'} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                        </button>
                    </div>
                    <InputError
                        messages={errors.password}
                        className="mt-2"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>
                    <div className="relative">
                        <Input
                            id="passwordConfirmation"
                            type={showPassword ? "text" : "password"}
                            value={passwordConfirmation}
                            className="block w-full mt-1"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />
                        <button className="absolute flex items-center justify-center w-6 h-6 top-2 right-2" title={showPassword ? 'Masquer' : 'Afficher'} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                        </button>
                    </div>
                    <InputError
                        messages={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button>Reset Password</Button>
                </div>
            </form>
        </>
    )
}

export default PasswordReset
