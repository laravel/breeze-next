import { FC, LabelHTMLAttributes } from 'react'

interface LabelProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>, any> {
    className?: string
    children: string | React.ReactNode
}

const Label: FC<LabelProps> = ({ className = '', children, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
