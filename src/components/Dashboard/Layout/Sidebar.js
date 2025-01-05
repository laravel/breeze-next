import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    FiGrid,
    FiFileText,
    FiBriefcase,
    FiCreditCard,
    FiUsers,
    FiSettings,
} from 'react-icons/fi'

import ApplicationLogo from '@/components/ApplicationLogo'

export default function Sidebar({ show, setter }) {
    const pathname = usePathname()

    const className =
        'bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40'
    const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0'

    const MenuItem = ({ icon, name, route }) => {
        const isActive = pathname === route
        const colorClass = isActive
            ? 'text-orange-500'
            : 'text-white hover:text-orange-500'

        return (
            <Link href={route} legacyBehavior>
                <a
                    onClick={() => {
                        setter(oldVal => !oldVal)
                    }}
                    className={`flex gap-1 items-center text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass} cursor-pointer tracking-widest`}>
                    <span className="text-xl flex justify-center w-[30px]">
                        {icon}
                    </span>
                    <span>{name}</span>
                </a>
            </Link>
        )
    }

    const ModalOverlay = () => (
        <div
            className="flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
            onClick={() => {
                setter(oldVal => !oldVal)
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="p-2 ms-8 flex">
                    <Link href="/dashboard">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <MenuItem
                        name="Dashboard"
                        route="/dashboard"
                        icon={<FiGrid />}
                    />
                    <MenuItem
                        name="Projects"
                        route="/projects"
                        icon={<FiBriefcase />}
                    />
                    <MenuItem
                        name="Invoices"
                        route="/invoices"
                        icon={<FiFileText />}
                    />
                    <MenuItem
                        name="Payments"
                        route="/payments"
                        icon={<FiCreditCard />}
                    />
                    <MenuItem
                        name="Customers"
                        route="/customers"
                        icon={<FiUsers />}
                    />
                    <MenuItem
                        name="Settings"
                        route="/settings"
                        icon={<FiSettings />}
                    />
                </div>
            </div>
            {show && <ModalOverlay />}
        </>
    )
}
