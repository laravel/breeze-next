const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 px-8 py-6 bg-white border border-gray-100 bg-white/80 overflow-hidden sm:rounded-[30px]">
            {children}
        </div>
    </div>
)

export default AuthCard
