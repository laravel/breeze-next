const AppLayout = ({ children, header }) => {
    return (
        <>
            {header}

            <main>{children}</main>
        </>
    )
}

export default AppLayout
