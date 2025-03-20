const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-xs border-gray-300 focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
