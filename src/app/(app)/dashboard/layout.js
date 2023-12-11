export default function Layout({ children, header }) {
    return (
        <>
            {header}

            <main>{children}</main>
        </>
    )
}
