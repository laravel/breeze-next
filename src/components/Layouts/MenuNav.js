import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faHouse, faGear, faFlaskVial} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuItem = ({ href, icon, label }) => {
    const router = useRouter()
    const isActive = router.pathname === href

    return (
        <Link href={href} className={`px-4 ${isActive ? 'active' : ''}`}>
            <div className="lg:inline-block hidden h-full">
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={icon} className="mr-4 h-8 w-8" />
                    <p className="text-xl">{label}</p>
                </div>
            </div>
            <div
                className="tooltip tooltip-bottom lg:hidden inline-block"
                data-tip={label}>
                <FontAwesomeIcon icon={icon} className="h-8 w-8" />
            </div>
        </Link>
    )
}

const MenuNav = ({ user }) => {
    return (
        <div className="w-1/6 h-screen fixed bg-white lg:p-3 p-0 lg:overflow-y-auto overflow-hidden lg:border-r-0 border-r">
            <ul className="menu mb-3 m-0 p-0 text-gray-600">
                <li className="py-1">
                    <MenuItem href="/dashboard" icon={faHouse} label="Dashboard" />
                </li>
                {user?.type48 === 1 && (
                <li className="py-1">
                    <MenuItem
                        href="/48/worker"
                        icon={faUserGroup}
                        label="นาซ่า48"
                    />
                </li>
                )}
                {user?.type82 === 1 && (
                <li className="py-1">
                    <MenuItem
                        href="/82/worker"
                        icon={faUserGroup}
                        label="แม่บ้านดีดี"
                    />
                </li>
                )}
                {user?.typelaos === 1 && (
                <li className="py-1">
                    <MenuItem
                        href="/laos/worker"
                        icon={faUserGroup}
                        label="เมทอินเตอร์"
                    />
                </li>
                )}
                {user?.typethai === 1 && (
                <li className="py-1">
                    <MenuItem
                        href="/online/worker"
                        icon={faUserGroup}
                        label="ออนไลน์คนไทย"
                    />
                </li>
                )}
                <li className="py-1">
                    <MenuItem
                        href="/test"
                        icon={faFlaskVial}
                        label="ทดสอบ"
                    />
                </li>
                <li className="pb-1">
                    <details className="lg:inline-block hidden h-full">
                        <summary className="lg:px-4 px-3">
                            <div className="flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    className="mr-4 h-8 w-8 text-blue-500"
                                />
                                <p className="text-xl">Setting</p>
                            </div>
                        </summary>
                        <ul>
                            <li>
                                <a href="/settings/system">ตั้งค่าระบบ</a>
                            </li>
                            <li>
                                <a href="/settings/announcements">ประกาศ</a>
                            </li>
                        </ul>
                    </details>
                    <Link
                        href="/settings"
                        className="px-4 lg:hidden inline-blocks">
                        <div
                            className="tooltip tooltip-bottom"
                            data-tip="setting">
                            <FontAwesomeIcon
                                icon={faGear}
                                className="h-8 w-8 text-blue-600"
                            />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuNav
