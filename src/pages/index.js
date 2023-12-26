import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push('/login')
        }else{
            router.push('/dashboard')
        }
    }, [])

    return (
        <div className="bg-gray-100">
            <Head>
                <title>JS-System v3</title>
            </Head>
            <main>
                <div className="flex items-center justify-center h-screen">
                    <div>
                        <h1 className="title-font m-0 font-extrabold text-5xl text-transparent py-1 bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 text-left">
                            <FontAwesomeIcon
                                icon={faGear}
                                shake
                                className="text-gray-600"
                            />{' '}
                            JS-System
                            <sup className="text-red-500 lg:text-1xl text-sm">
                                v3
                            </sup>
                        </h1>
                        <p className="leading-relaxed text-lg lg:max-w-xl text-slate-400 font-semibold text-center ">
                            ระบบจัดการพนักงานและองค์กรภายใน
                        </p>
                    </div>
                </div>
                <div className="toast toast-top toast-center lg:toast-end">
                    <div className="alert bg-blue-700 text-white font-1 font-bold px-3 shadow-lg">
                    <span className="loading loading-bars loading-sm"></span>
                        <span>กำลังดาวน์โหลดข้อมูล กรุณารอสักครู่...</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
