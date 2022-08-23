const InputError = ({ message, className = '' }) => (
    <>
        {message && (
            <p
                className={`${className} text-sm text-red-600`}>
                {message}
            </p>
        )}
    </>
)

export default InputError
