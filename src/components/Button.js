const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-6 py-4 bg-orange-600 hover:bg-orange-500 border border-transparent rounded-xl font-semibold text-xs text-white uppercase tracking-widest disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
