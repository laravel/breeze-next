import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
//import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faRightFromBracket,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const getBadgeProps = role => {
    switch (role) {
        case 99:
            return { color: 'gold', text: 'ผู้พัฒนา' }
        case 0:
            return { color: 'ghost', text: 'รอแอดตำแหน่ง' }
        case 1:
            return { color: 'primary', text: 'แอดมิน' }
        case 2:
            return { color: 'secondary', text: 'เซลล์' }
        case 3:
            return { color: 'warning', text: 'ผู้แก้ไข' }
        case 4:
            return { color: 'danger', text: 'ผู้จัดการ' }
        case 5:
            return { color: 'accent', text: 'ผู้ดูแล' }
        default:
            return { color: 'gray', text: 'Unknown Role' }
    }
}

const Navigation = ({ user }) => {
    // const router = useRouter()

    const { logout } = useAuth()
    const { color, text } = getBadgeProps(user?.role)
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-10">
            {/* Primary Navigation Menu */}
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-10 w-auto fill-current" />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                href="/"
                                active={router.pathname === '/'}>
                                หน้าหลัก
                            </NavLink>
                        </div> */}
                    </div>

                    {/* Settings Dropdown */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <Dropdown
                            align="right"
                            width="48"
                            trigger={
                                <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none transition duration-150 ease-in-out">
                                    <div
                                        className={`badge badge-${color} badge-outline mx-1 py-3 text-xs font-semibold`}>
                                        {text}
                                    </div>
                                    <div className="mx-1 font-semibold text-lg">
                                        {user?.name}
                                    </div>

                                    <div className="mx-1">
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                            className="h-7 w-7"
                                        />
                                    </div>
                                </button>
                            }>
                            {/* Authentication */}
                            <DropdownButton onClick={logout}>
                                <div className="flex items-center font-semibold text-lg text-red-600 justify-center">
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="mr-2 h-5 w-5"
                                    />
                                    Logout
                                </div>
                            </DropdownButton>
                        </Dropdown>
                    </div>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    {/* <div className="pt-2 pb-3 space-y-1">
                         <ResponsiveNavLink
                            href="/dashboard"
                            active={router.pathname === '/'}>
                            หน้าหลัก
                        </ResponsiveNavLink>
                    </div> */}

                    {/* Responsive Settings Options */}
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="h-8 w-8"
                                />
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {/* Authentication */}
                            <ResponsiveNavButton onClick={logout}>
                                <div className="flex items-center font-semibold rounded-box text-lg bg-red-600 text-white p-1 justify-center">
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="mr-2 h-5 w-5"
                                    />
                                    Logout
                                </div>
                            </ResponsiveNavButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
