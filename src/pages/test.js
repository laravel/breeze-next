import AppLayout from '@/components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function TestPage() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://randomuser.me/api/')
            setUserData(result.data.results[0])
        }

        fetchData()
    }, [])

    return (
        <AppLayout>
            <div className="w-full p-3 mb-20">
                <div className="flex items-center justify-center flex-wrap gap-4">
                    {userData ? (
                        <div>
                            <h1>{`${userData.name.first} ${userData.name.last}`}</h1>
                            <p>{userData.email}</p>
                            <img
                                src={userData.picture.large}
                                alt="User Avatar"
                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}
