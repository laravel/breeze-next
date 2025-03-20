import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

interface NavLinkProps extends LinkProps {
  active?: boolean
  children: ReactNode
}

const NavLink = ({
  active = false,
  href,
  children,
  ...props
}: NavLinkProps) => (
  <Link
    as="a"
    href={href}
    {...props}
    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-hidden transition duration-150 ease-in-out ${
      active
        ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
    }`}>
    {children}
  </Link>
)

export default NavLink
