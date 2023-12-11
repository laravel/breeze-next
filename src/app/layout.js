import 'tailwindcss/tailwind.css'

export const metadata = {
    title: 'Laravel',
    stylesheet:
        'https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap',
}
const RootLayout = children => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
