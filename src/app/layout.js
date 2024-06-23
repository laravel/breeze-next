import { Nunito } from 'next/font/google'
import '@/app/global.css'
import QueryProviders from '@/providers/tanstackquery'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <QueryProviders>{children}</QueryProviders>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
