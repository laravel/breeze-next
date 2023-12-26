import React from 'react'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()
        setLoading(true)
        login({
            username,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        }).finally(() => setLoading(false))
    }
    return (
        <div>
            <Head>
                <title>JS-System v3</title>
            </Head>
            <section className="text-gray-600 body-font bg-gray-100">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="container xl:px-32 px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
                            <h1 className="title-font font-extrabold lg:text-7xl text-5xl text-transparent py-2 bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 text-center md:text-left">
                                JS-System
                                <sup className="text-red-500 lg:text-4xl text-xl">
                                    v3
                                </sup>
                            </h1>
                            <p className="leading-relaxed mt-4 lg:text-2xl text-xl lg:max-w-xl text-slate-400 font-medium text-center md:text-left ">
                                ระบบจัดการพนักงานและองค์กรภายใน
                            </p>
                        </div>

                        <div className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <AuthSessionStatus
                                className="mb-4"
                                status={status}
                            />
                            {loading ? (
                                <div className="relative mb-4 justify-center">
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        className="animate-spin text-blue-600 mr-2"
                                    />
                                    Logging in...
                                </div>
                            ) : (
                                <form onSubmit={submitForm}>
                                    <div className="relative mb-4">
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="Account UserID"
                                            onChange={event =>
                                                setUsername(event.target.value)
                                            }
                                            required
                                            autoFocus
                                            autoComplete="username"
                                            value={username}
                                            className="input input-bordered w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        <InputError
                                            messages={errors.username}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={event =>
                                                setPassword(event.target.value)
                                            }
                                            required
                                            value={password}
                                            autoComplete="current-password"
                                            className="input input-bordered w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                        <InputError
                                            messages={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="relative my-3">
                                        <label
                                            htmlFor="remember_me"
                                            className="inline-flex items-center font-semibold">
                                            <input
                                                id="remember_me"
                                                type="checkbox"
                                                name="remember"
                                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                onChange={event =>
                                                    setShouldRemember(
                                                        event.target.checked,
                                                    )
                                                }
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <button className="text-white w-full border-0 py-2 px-8 focus:outline-none font-bold rounded text-xl bg-blue-600">
                                            Log In
                                        </button>
                                    </div>
                                    <p className="text-sm text-blue-500 py-4 text-center font-bold">
                                        Forgotten password?
                                    </p>
                                    <hr className="mb-5" />
                                    <Link href="/register">
                                        <button className="text-white w-full border-0 py-2 focus:outline-none font-bold rounded text-xl bg-green-500">
                                            Create New Account
                                        </button>
                                    </Link>
                                </form>
                            )}
                        </div>

                        <div className="lg:w-2/6 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-3 md:mt-0">
                            <p className="text-sm text-gray-700 mt-3 text-center font-black text-slate-400">
                                Developer & Design By Wallock
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginPage
