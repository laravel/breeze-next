import AppLayout from '@/components/Layouts/AppLayout'
import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function dashboard() {
    const [databeta, setDataBeta] = useState(null)
    const [datadd, setDataDD] = useState(null)
    const [datalaos, setDataLaos] = useState(null)
    const [datathai, setDataThai] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const response1 = await axios.get(
                    `https://beta.wb.in.th/api/status_sv`,
                )
                const result1 = response1.data
                setDataBeta(result1)

                const response2 = await axios.get(
                    `https://dd.wb.in.th/api/status_sv`,
                )
                const result2 = response2.data
                setDataDD(result2)

                const response3 = await axios.get(
                    `https://laos.wb.in.th/api/status_sv`,
                )
                const result3 = response3.data
                setDataLaos(result3)

                const response4 = await axios.get(
                    `https://thai.wb.in.th/api/status_sv`,
                )
                const result4 = response4.data
                setDataThai(result4)

                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <AppLayout>
            {loading ? (
                <div className="w-full p-3">
                    <div className="flex items-center justify-center flex-wrap gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="w-full p-3">
                        <div className="flex items-center justify-center flex-wrap gap-4">
                            <div className="stats stats-vertical lg:stats-horizontal w-full shadow-lg">
                                <div className="stat">
                                    <div className="stat-figure text-blue-500">
                                        <FontAwesomeIcon
                                            icon={faServer}
                                            className="fa-2xl"
                                        />
                                    </div>
                                    <div className="stat-title text-sm">
                                        ฐานข้อมูล 48
                                    </div>
                                    <div className="stat-value text-success">
                                        {databeta}
                                    </div>
                                    <div className="stat-desc">
                                        ทั้งหมด : 05 Record
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-blue-500">
                                        <FontAwesomeIcon
                                            icon={faServer}
                                            className="fa-2xl"
                                        />
                                    </div>
                                    <div className="stat-title text-sm">
                                        ฐานข้อมูล 82
                                    </div>
                                    <div className="stat-value text-success">
                                        {datadd}
                                    </div>
                                    <div className="stat-desc">
                                        ทั้งหมด : 05 Record
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-blue-500">
                                        <FontAwesomeIcon
                                            icon={faServer}
                                            className="fa-2xl"
                                        />
                                    </div>
                                    <div className="stat-title text-sm">
                                        ฐานข้อมูล Laos
                                    </div>
                                    <div className="stat-value text-success">
                                        {datalaos}
                                    </div>
                                    <div className="stat-desc">
                                        ทั้งหมด : 05 Record
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-blue-500">
                                        <FontAwesomeIcon
                                            icon={faServer}
                                            className="fa-2xl"
                                        />
                                    </div>
                                    <div className="stat-title text-sm">
                                        ฐานข้อมูล ThaiOnline
                                    </div>
                                    <div className="stat-value text-success">
                                        {datathai}
                                    </div>
                                    <div className="stat-desc">
                                        ทั้งหมด : 05 Record
                                    </div>
                                </div>
                            </div>

                            <div className="hero text-gray-300">
                                <div className="hero-content my-12">
                                    <div className="text-center p-3">
                                        <h1 className="text-6xl font-bold font-2 m-0">
                                            Welcome Back
                                        </h1>
                                        <p className="font-1 font-semibold">
                                            ระบบจัดการพนักงานและองค์กรภายใน
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mockup-browser w-full lg:w-1/2 shadow-lg border bg-base-300">
                                <div className="mockup-browser-toolbar">
                                    <div className="input font-2 font-semibold">
                                        ข่าวสาร & อัพเดทล่าสุด
                                    </div>
                                </div>
                                <div className="px-4 py-5 text-center font-1 text-sm lg:text-lg font-semibold text-gray-600">
                                    <u>ระบบนี้จัดทำขึ้นเพื่อเป็นระบบกลางในการจัดการคนงานในระบบเก่า โดยไม่ต้องเข้า-ออกหลายหน้าต่างหลายระบบ
                                        สามารถใช้งานได้ทุกระบบในระบบเดียว</u><br/>
                                    ขนาดนี้ v3 อยู่ในช่วงทดสอบระบบการใช้งานจริง อาจมีบัคหรือทำงานผิดพลาดบ้าง<br/>
                                    ในระหว่างนี้สามารถใช้งานได้ทั้งระบบ v2 และระบบ v3 ตามปกติครับ<br/>
                                    หากบาง Function ใช้งานไม่ได้โปรดแจ้งผู้พัฒนาเพื่อแก้ไข และกลับไปใช้ v2 ก่อน<br/>
                                </div>
                                {/* <div className="flex justify-center px-4 py-5 bg-base-200">
                            UPDATE NEW!
                        </div> */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AppLayout>
    )
}
