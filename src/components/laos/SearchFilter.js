import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTasks } from '@fortawesome/free-solid-svg-icons'

const SearchFilter = ({
    searchWorkerId,
    handleSearchWorkerId,
    handleResetSearch,
    setSearchWorkerId,

    showOnlyTypeT,
    showOnlyTypeC,
    showOnlyTypeM,
    showOnlyTypeL,
    setShowOnlyTypeT,
    setShowOnlyTypeC,
    setShowOnlyTypeM,
    setShowOnlyTypeL,

    showOvernightt,
    showOvernightf,
    setShowOnlyOvernightt,
    setShowOnlyOvernightf,
    selectedStatus,
    setSelectedStatus,
    selectedJob,
    setSelectedJob,

    selectedZone,
    setSelectedZone,

    selectedOutside,
    setSelectedOutside,
}) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="navbar rounded-box bg-white my-2  ">
                <div className="navbar navbar-start w-full lg:w-auto hidden lg:flex">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <FontAwesomeIcon icon={faTasks} className="mr-2" />{' '}
                            ตั้งค่าการแสดงผล
                        </div>
                        <div className="collapse-content">
                            <ul className="bg-white menu menu-horizontal rounded-box mb-3 mr-3">
                                <li className="menu-title">โซนประเทศ</li>
                                <li>
                                    <label className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={showOnlyTypeT}
                                            onChange={() =>
                                                setShowOnlyTypeT(!showOnlyTypeT)
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ไทย
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox mr-2">
                                        <input
                                            type="checkbox"
                                            checked={showOnlyTypeC}
                                            onChange={() =>
                                                setShowOnlyTypeC(!showOnlyTypeC)
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        กัมพูชา
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox mr-2">
                                        <input
                                            type="checkbox"
                                            checked={showOnlyTypeM}
                                            onChange={() =>
                                                setShowOnlyTypeM(!showOnlyTypeM)
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        พม่า
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={showOnlyTypeL}
                                            onChange={() =>
                                                setShowOnlyTypeL(!showOnlyTypeL)
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ลาว
                                    </label>
                                </li>
                            </ul>
                            <ul className="bg-white menu menu-horizontal rounded-box mb-3 mr-3">
                                <li className="menu-title">รูปแบบงาน</li>
                                <li>
                                    <label className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={showOvernightt}
                                            onChange={() =>
                                                setShowOnlyOvernightt(
                                                    !showOvernightt,
                                                )
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ไป-กลับ
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox mr-2">
                                        <input
                                            type="checkbox"
                                            checked={showOvernightf}
                                            onChange={() =>
                                                setShowOnlyOvernightf(
                                                    !showOvernightf,
                                                )
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        อยู่ประจำ
                                    </label>
                                </li>
                            </ul>
                            <ul className="bg-white menu menu-horizontal rounded-box mb-3">
                                <li className="menu-title">พื้นที่</li>
                                <li>
                                    <label className="form-checkbox">
                                        <input
                                            type="radio"
                                            name="OutsideGroup"
                                            checked={
                                                selectedOutside === null
                                            }
                                            onChange={() =>
                                                setSelectedOutside(null)
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ได้ทั้งหมด
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox">
                                        <input
                                            type="radio"
                                            name="OutsideGroup"
                                            checked={
                                                selectedOutside ===
                                                '2'
                                            }
                                            onChange={() =>
                                                setSelectedOutside(
                                                    '2',
                                                )
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ในพื้นที่อาศัย
                                    </label>
                                </li>
                                <li>
                                    <label className="form-checkbox mr-2">
                                        <input
                                            type="radio"
                                            name="OutsideGroup"
                                            checked={
                                                selectedOutside ===
                                                '1'
                                            }
                                            onChange={() =>
                                                setSelectedOutside(
                                                    '1',
                                                )
                                            }
                                        />
                                        <i className="form-icon"></i>
                                        ออกต่างจังหวัดได้
                                    </label>
                                </li>
                            </ul>
                            <div className="grid grid-cols-3 gap-3">
                                <ul className="bg-white menu menu-horizontal rounded-box">
                                    <li className="menu-title w-full">สถานะ</li>
                                    <li>
                                        <label className="form-checkbox text-blue-500">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === null
                                                }
                                                onChange={() =>
                                                    setSelectedStatus(null)
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ทั้งหมด
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === 'wait'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus('wait')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ว่างงาน
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === 'save'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus('save')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ติดจอง
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus ===
                                                    'changepp'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus(
                                                        'changepp',
                                                    )
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            เปลี่ยน
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === 'retry'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus('retry')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            เคลม
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus ===
                                                    'incomplete'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus(
                                                        'incomplete',
                                                    )
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            รอทำสัญญา
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus ===
                                                    'bfprocess'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus(
                                                        'bfprocess',
                                                    )
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            สพ.แล้ว
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === 'woker'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus('woker')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ได้งานแล้ว
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox text-red-500">
                                            <input
                                                type="radio"
                                                name="statusGroup"
                                                checked={
                                                    selectedStatus === 'export'
                                                }
                                                onChange={() =>
                                                    setSelectedStatus('export')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ไม่ส่งงาน
                                        </label>
                                    </li>
                                </ul>

                                <ul className="bg-white menu menu-horizontal rounded-box">
                                    <li className="menu-title w-full">
                                        ประเภทงาน
                                    </li>
                                    <li>
                                    <label className="form-checkbox text-blue-500">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === null
                                                }
                                                onChange={() =>
                                                    setSelectedJob(null)
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ทั้งหมด
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'แม่บ้านทั่วไป'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('แม่บ้านทั่วไป')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            แม่บ้านทั่วไป
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'พี่เลี้ยงน้อง'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('พี่เลี้ยงน้อง')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            พี่เลี้ยงเด็ก
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'ดูแลผู้สูงอายุ'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('ดูแลผู้สูงอายุ')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            คนดูแลผู้สูงอายุ
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'แม่บ้านพี่เลี้ยงน้อง'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('แม่บ้านพี่เลี้ยงน้อง')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            แม่บ้าน+พี่เลี้ยงเด็ก
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'แม่บ้านดูแลผู้สูงอายุ'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('แม่บ้านดูแลผู้สูงอายุ')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            แม่บ้าน+คนดูแลผู้สูงอายุ
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'กรรมกร'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('กรรมกร')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            กรรมกร
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="JobGroup"
                                                checked={
                                                    selectedJob === 'พ่อบ้านทั่วไป'
                                                }
                                                onChange={() =>
                                                    setSelectedJob('พ่อบ้านทั่วไป')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            พ่อบ้าน
                                        </label>
                                    </li>
                                </ul>

                                <ul className="bg-white menu menu-horizontal rounded-box">
                                    <li className="menu-title w-full">
                                        ภูมิภาค
                                    </li>
                                    <li>
                                    <label className="form-checkbox text-blue-500">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === null
                                                }
                                                onChange={() =>
                                                    setSelectedZone(null)
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ทุกภาค
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                        <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '1'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('1')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคเหนือ
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '2'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('2')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคอีสาน
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox mr-2">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '3'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('3')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคกลาง
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '4'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('4')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคตะวันออก
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '5'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('5')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคตะวันตก
                                        </label>
                                    </li>
                                    <li>
                                        <label className="form-checkbox">
                                            <input
                                                type="radio"
                                                name="ZoneGroup"
                                                checked={
                                                    selectedZone === '6'
                                                }
                                                onChange={() =>
                                                    setSelectedZone('6')
                                                }
                                            />
                                            <i className="form-icon"></i>
                                            ภาคใต้
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-brand w-64 text-center hidden lg:flex">
                    <div className="badge badge-outline w-full py-5 font-bold text-gray-600">
                        ระบบ 48
                    </div>
                </div>
                <div className="navbar navbar-end w-auto lg:w-full">
                    <div className="join">
                        <input
                            type="text"
                            placeholder="ค้นหารหัส"
                            value={searchWorkerId}
                            onChange={e => setSearchWorkerId(e.target.value)}
                            className="input bg-gray-100 w-full lg:w-80 join-item"
                        />
                        <button
                            className="btn btn-neutral join-item"
                            onClick={() =>
                                handleSearchWorkerId(searchWorkerId)
                            }>
                            ค้นหารหัส
                        </button>
                        <button
                            className="btn btn-error btn-outline join-item"
                            onClick={() => handleResetSearch()}>
                            รีเซ็ต
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter
