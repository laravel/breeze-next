import Link from 'next/link'
import { Menu } from '@headlessui/react'

const DropdownLink = ({
    href = '',
    children,
    ...props
}: {
    href: string
    children: React.ReactNode
}) => (
    <Menu.Item>
        {({ active }: { active: boolean }) => (
            <Link
                href={href}
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

export const DropdownButton = ({
    children,
    ...props
}: {
    children: React.ReactNode
    [key: string]: any
}) => (
    <Menu.Item>
        {({ active }: { active: boolean }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink
