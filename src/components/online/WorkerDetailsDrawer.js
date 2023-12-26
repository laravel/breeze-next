import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const WorkerDetailsDrawer = ({ isOpen, onClose, workerId, getfapi, gettoken }) => {
    const [workerData, setWorkerData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [imageLoading, setImageLoading] = useState(true)

    const workerTypeMapping = {
        n: 'รหัส 48',
        jno: 'รหัส 82 Online',
        jnw: 'รหัส 82',
        g: 'รหัส G',
        // Add more mappings as needed
    }

    const getBackgroundClass = workpositionId => {
        switch (workpositionId) {
            case 'แม่บ้านทั่วไป':
                return 'text-green-700'
            case 'พี่เลี้ยงน้อง':
                return 'text-orange-500'
            case 'ดูแลผู้สูงอายุ':
                return 'text-red-600'
            case 'แม่บ้านดูแลผู้สูงอายุ':
                return 'text-red-600'
            case 'แม่บ้านพี่เลี้ยงน้อง':
                return 'text-orange-500'
            case 'กรรมกร':
                return 'text-blue-500'
            case 'พ่อบ้านทั่วไป':
                return 'text-blue-500'
            case '-':
                return 'text-black'
            // Add more cases as needed
            default:
                return 'text-black' // Default to no background color
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const response = await axios.get(
                    `${getfapi}/api/i_worker?token=${gettoken}&data_id=${workerId}`,
                )

                const data = response.data
                const firstWorker = Array.isArray(data) ? data[0] : data

                setWorkerData(firstWorker)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching worker data:', error)
                setLoading(false)
            }
        }

        if (isOpen && workerId) {
            fetchData()
        }
    }, [isOpen, workerId])

    return (
        <div
            className={`mt-16 shadow-lg fixed z-20 inset-y-0 right-0 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform ease-in-out duration-300`}>
            {/* Drawer content */}
            <div className="flex flex-col h-full glass text-black w-80 p-4 shadow-lg overflow-y-auto">
                {/* Drawer header */}
                <div className="flex justify-between  items-center mb-4">
                    <h2 className="text-xl font-2 font-semibold">
                        ทะเบียนย่อ {workerId}
                    </h2>

                    <button onClick={onClose} className="text-gray-500">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="fa-xl"
                        />
                    </button>
                </div>
                {loading ? (
                    <div className="w-full p-3">
                        <div className="flex items-center justify-center flex-wrap gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-32"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                ) : (
                    <>
                        {workerData ? (
                            <>
                                <figure
                                    className="p-1"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '290px',
                                    }}>
                                    {imageLoading && (
                                        <span
                                            className="loading loading-bars loading-lg"
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform:
                                                    'translate(-50%, -50%)',
                                            }}></span>
                                    )}
                                    <img
                                        src={`${getfapi}/${workerData.worker_image}`}
                                        alt={workerData.worker_fullname}
                                        className="rounded-box shadow p-2"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            display: imageLoading
                                                ? 'none'
                                                : 'block', // Hide the image while loading
                                        }}
                                        onLoad={() => setImageLoading(false)} // Set loading to false when the image is loaded
                                    />
                                </figure>
                                <div className="bg-white rounded-box mt-2 text-center p-2 m-2">
                                    <h2 className="text-xl font-bold flex items-center px-2">
                                        <div className="badge badge-primary badge-outline py-3 mr-2">
                                            {
                                                workerTypeMapping[
                                                    workerData.worker_type
                                                ]
                                            }
                                        </div>
                                        {workerData.worker_nationality} /{' '}
                                        {workerData.worker_race}
                                    </h2>
                                </div>
                                <div className="bg-gray-200 rounded-box my-1 text-center p-2 m-2 shadow-lg">
                                    <h5 className="font-semibold px-3">
                                        {workerData.worker_fullname}
                                    </h5>
                                    <p className="font-semibold">
                                        {workerData.worker_nickname}
                                        {workerData.worker_namelist === 1 ? (
                            <label className="text-red-400"> (NameList)</label>
                        ) : null}
                                    </p>
                                </div>
                                <div className="divider">ประเภทงาน</div>
                                <div className="join join-vertical bg-white rounded-box p-2 m-2 shadow-lg">
                                    <ul className="list-none">
                                        {workerData.workposition_id1 && (
                                            <li
                                                className={`p-1 ${getBackgroundClass(
                                                    workerData.workposition_id1,
                                                )}`}>
                                                {workerData.workposition_id1}
                                            </li>
                                        )}
                                        {workerData.workposition_id2 && (
                                            <li
                                                className={`p-1 ${getBackgroundClass(
                                                    workerData.workposition_id2,
                                                )}`}>
                                                {workerData.workposition_id2}
                                            </li>
                                        )}
                                        {workerData.workposition_id3 && (
                                            <li
                                                className={`p-1 ${getBackgroundClass(
                                                    workerData.workposition_id3,
                                                )}`}>
                                                {workerData.workposition_id3}
                                            </li>
                                        )}
                                        {workerData.workposition_id4 && (
                                            <li
                                                className={`p-1 ${getBackgroundClass(
                                                    workerData.workposition_id4,
                                                )}`}>
                                                {workerData.workposition_id4}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="join p-2 m-2">
                                    <button className="btn btn-lg btn-neutral join-item shadow-lg w-1/2">
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            className="mr-1"
                                        />
                                        ข้อมูล
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="btn btn-lg btn-error text-white join-item shadow-lg w-1/2">
                                        <FontAwesomeIcon
                                            icon={faCircleXmark}
                                            className="mr-1"
                                        />
                                        ปิด
                                    </button>
                                </div>
                            </>
                        ) : workerData === null ? (
                            <p>Error fetching data. Please try again later.</p>
                        ) : (
                            <span className="loading loading-ring loading-lg"></span>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default WorkerDetailsDrawer
