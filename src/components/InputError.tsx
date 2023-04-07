import { FC, InputHTMLAttributes } from 'react'

interface InputErrorProps
    extends Pick<InputHTMLAttributes<HTMLInputElement>, any> {
    messages?: any | any[]
    className?: string
}

const InputError: FC<InputErrorProps> = ({ messages = [], className = '' }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p
                        className={`${className} text-sm text-red-600`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError
