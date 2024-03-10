const AuthSessionStatus = ({
    status,
    className,
    ...props
}: {
    status: string | null
} & React.HTMLAttributes<HTMLDivElement>): JSX.Element | null => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
