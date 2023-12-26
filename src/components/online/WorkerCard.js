import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faCirclePause,
    faFileCircleCheck,
    faClock,
    faArrowRightArrowLeft,
    faPersonCircleExclamation,
    faUserCheck,
    faCircleXmark,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons'

const WorkerCard = ({
    item,
    imageLoading,
    setImageLoading,
    handleFreeButtonClick,
    getBackgroundClass,
    getFlagUrl,
    getfapi,
}) => {
    const getStatusData = status => {
        switch (status) {
            case 'wait':
                return {
                    styles: 'bg-gray-100 text-gray-500 border-gray-500',
                    icon: faClock,
                    text: 'ว่างงาน',
                }
            case 'save':
                return {
                    styles: 'bg-amber-100 text-amber-500 border-amber-500',
                    icon: faCirclePause,
                    text: 'จอง',
                }
            case 'incomplete':
                return {
                    styles: 'bg-blue-100 text-blue-500 border-blue-500',
                    icon: faFileCircleCheck,
                    text: 'รอทำสัญญา',
                }
            case 'woker':
                return {
                    styles:
                        'bg-emerald-100 text-emerald-500 border-emerald-500',
                    icon: faCircleCheck,
                    text: 'ได้งานแล้ว',
                }
            case 'retry':
                return {
                    styles: 'bg-purple-100 text-purple-500 border-purple-500',
                    icon: faPersonCircleExclamation,
                    text: 'เคลม',
                }
            case 'changepp':
                return {
                    styles: 'bg-gray-100 text-black border-black',
                    icon: faArrowRightArrowLeft,
                    text: 'เปลี่ยน',
                }
            case 'bfprocess':
                return {
                    styles: 'bg-sky-100 text-sky-500 border-sky-500',
                    icon: faUserCheck,
                    text: 'สพ.แล้ว',
                }
            case 'export':
                return {
                    styles: 'bg-red-100 text-red-500 border-red-500',
                    icon: faCircleXmark,
                    text: 'ห้ามส่งงาน',
                }
            default:
                return {
                    styles: '',
                    icon: faQuestion,
                    text: 'Unknown Status',
                }
        }
    }

    return (
        <div className="flex flex-col gap-4 w-full lg:w-48 mx-1">
            <div className="card indicator w-full bg-base-100 shadow-xl">
                <figure
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '190px',
                    }}>
                    {imageLoading && (
                        <span
                            className="loading loading-bars loading-lg"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}></span>
                    )}
                    <img
                        src={`${getfapi}/${item.worker_image}`}
                        alt={item.worker_fullname}
                        style={{
                            width: '100%',
                            height: '100%',
                            display: imageLoading ? 'none' : 'block',
                        }}
                        onLoad={() => setImageLoading(false)}
                    />
                    <figcaption
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            background: 'rgba(45, 45, 45, 0.6)',
                            color: 'white',
                            padding: '5px',
                            fontSize: '18px',
                        }}>
                        {item.worker_nickname}
                    </figcaption>
                    <figcaption
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            background: 'rgba(0, 0, 0, 0)',
                            padding: '3px',
                        }}>
                            <div className="badge badge-primary py-3 mr-2">
                            {getFlagUrl(item.worker_type)}
                        </div>
                    </figcaption>
                </figure>
                <span className="indicator-item indicator-center badge badge-neutral">
                    <div className="font-bold">
                        {item.worker_id}{' '}
                        {item.worker_namelist === 1 ? (
                            <label className="text-red-400">NameList</label>
                        ) : null}
                    </div>
                </span>
                <div className="card-body p-0">
                    {(() => {
                        const { styles, icon, text } = getStatusData(
                            item.worker_status,
                        )
                        return (
                            <h2
                                className={`card-title py-1 font-bold justify-center border-dashed border-b ${styles}`}>
                                <FontAwesomeIcon icon={icon} />
                                {text}
                            </h2>
                        )
                    })()}
                    <div className="px-2">
                        <ul className="list">
                            {item.workposition_id1 && (
                                <li
                                    className={`badge text-xs p-1 ${getBackgroundClass(
                                        item.workposition_id1,
                                    )}`}>
                                    {item.workposition_id1}
                                </li>
                            )}
                            {item.workposition_id2 && (
                                <li
                                    className={`badge text-xs p-1 ${getBackgroundClass(
                                        item.workposition_id2,
                                    )}`}>
                                    {item.workposition_id2}
                                </li>
                            )}
                            {item.workposition_id3 && (
                                <li
                                    className={`badge text-xs p-1 ${getBackgroundClass(
                                        item.workposition_id3,
                                    )}`}>
                                    {item.workposition_id3}
                                </li>
                            )}
                            {item.workposition_id4 && (
                                <li
                                    className={`badge text-xs p-1 ${getBackgroundClass(
                                        item.workposition_id4,
                                    )}`}>
                                    {item.workposition_id4}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="card-actions justify-center pb-2 px-2">
                        <button
                            className="btn btn-primary btn-sm btn-block font-1 text-xs font-bold"
                            onClick={() =>
                                handleFreeButtonClick(item.worker_id)
                            }>
                            รายละเอียด
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkerCard
