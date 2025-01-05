import Footer from '@/components/Guest/Layout/Footer'
import Header from '@/components/Guest/Layout/Header'

export const metadata = {
    title: 'Vine Starter Template',
}

const Home = () => {
    return (
        <>
            <div className="relative items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
                <Header />

                <div className="container relative flex flex-col justify-between max-w-screen-md mx-auto pt-[10rem] xl:px-0 mt-5 lg:max-w-screen-lg">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
                        Vine Starter Template
                    </h2>
                    <p className="mb-12 text-lg text-gray-500">
                        Discover the perfect starting point for your admin
                        dashboard or SaaS project.
                    </p>
                    <div className="w-full">
                        <div className="flex flex-col w-full mb-10 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                Easy Setup
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600">
                                            Get started quickly with a clean,
                                            well-organized structure that saves
                                            you time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                Modern Design
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600">
                                            Impress users with a sleek and
                                            professional interface.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-5 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                Fully Responsive
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600">
                                            Built to look great on any device,
                                            from desktops to smartphones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-400 rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-orange-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                Customizable
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-orange-400 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600">
                                            Easily adapt the template to fit
                                            your unique project needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                Scalable
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600">
                                            Designed to grow with your business
                                            and handle increasing demands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home
