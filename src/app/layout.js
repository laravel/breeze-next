import { Inter } from 'next/font/google'
import '@/app/global.css'

const interFont = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`antialiased ${interFont.className}`}>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Vine Starter Template',
}

export default RootLayout
