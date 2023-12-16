const AppLayout = ({ children, header }) => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            <main>{children}</main>
        </>
    )
}

export default AppLayout
