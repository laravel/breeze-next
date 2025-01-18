import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { getUserAction } from '@/actions/actions'
import UserRefresh from '@/app/(app)/UserRefresh'

const AppLayout = async ({ children }) => {

    const user = await getUserAction();

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main>{children}</main>

            <UserRefresh />
        </div>
    )
}

export default AppLayout
