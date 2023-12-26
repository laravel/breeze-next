import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const ApplicationLogo = props => (
    <div>
        <h1 className="title-font m-0 font-extrabold lg:text-3xl text-2xl text-transparent py-0 bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 text-left">
            <FontAwesomeIcon icon={faGear} shake className="text-gray-600" />{' '}
            JS-System
            <sup className="text-red-500 lg:text-1xl text-sm">v3</sup>
        </h1>
        <p className="leading-relaxed text-xs lg:max-w-xl text-slate-400 font-semibold text-left ">
            ระบบจัดการพนักงานและองค์กรภายใน
        </p>
    </div>
)

export default ApplicationLogo
