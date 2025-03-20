import React, { ComponentProps } from 'react'

interface AuthSessionStatusProps extends ComponentProps<'div'> {
  status: string
}

const AuthSessionStatus = ({
  status,
  className,
  ...props
}: AuthSessionStatusProps) => {
  return (
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
}

export default AuthSessionStatus
