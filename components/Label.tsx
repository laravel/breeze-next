const Label = ({
    className,
    children,
    ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
