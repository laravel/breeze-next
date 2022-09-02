import { LabelHTMLAttributes, ReactNode } from 'react'

const Label = ({ className, children, ...props }: {
    className?: string,
    children: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
