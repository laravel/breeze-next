import ApplicationLogo from '@/components/ApplicationLogo'

const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a
                            aria-current="page"
                            className="flex items-center"
                            href="/">
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <a
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">
                            Home
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">
                            Products
                        </a>
                        <a
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">
                            Resources
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">
                            Pricing
                        </a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <a
                            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                            href="/login">
                            Log In
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-3 py-2 font-semibold text-white shadow-sm transition-all duration-150 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/login">
                            Create Account
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
