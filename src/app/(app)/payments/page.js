import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Payments',
}

const Page = () => {
    return (
        <>
            <Header title="Payments" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Payments
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
