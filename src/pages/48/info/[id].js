import AppLayout from '@/components/Layouts/AppLayout'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useAuth } from '@/hooks/auth'

export default function Page() {
    const router = useRouter()

    return (
        <AppLayout>
    <p>Post: {router.query.id}</p>
    </AppLayout>
    )
}
