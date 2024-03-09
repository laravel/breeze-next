import type { Metadata } from 'next'
import '@/app/global.css'

export const metadata: Metadata = {
    title: 'Laravel',
}
const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
