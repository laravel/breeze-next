'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { useAuth } from '@/hooks/auth'
import AuthCard from '@/components/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

const VerifyEmailPage = () => {
  const [status, setStatus] = useState<string>('')

  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard',
  })

  const onClickResend = () => {
    resendEmailVerification().then(response => setStatus(response.data.status))
  }

  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      }>
      <div className="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-green-600">
          A new verification link has been sent to the email address you
          provided during registration.
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-hidden focus:border-gray-900 focus:ring-3 ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
          onClick={onClickResend}>
          Resend Verification Email
        </button>

        <button
          type="button"
          className="underline text-sm text-gray-600 hover:text-gray-900"
          onClick={logout}>
          Logout
        </button>
      </div>
    </AuthCard>
  )
}

export default VerifyEmailPage
