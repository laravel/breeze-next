import '@/app/global.css'
import ThemeWrapper from '@/providers/ThemeWrapper'

export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased bg-slate-100 dark:bg-slate-900">
                <ThemeWrapper attribute="class" defaultTheme="system">{children}</ThemeWrapper>
            </body>
        </html>
    )
}

export default RootLayout
