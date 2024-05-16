'use client'

import axios from '@/lib/axios'
import CardCommon from './cardCommon'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { v4 as uuidv4 } from 'uuid'

const CardList = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { code } = useAuth()
    const [list, setList] = useState([])
    const codeUnique = uuidv4()

    useEffect(() => {
        axios
            .get('/api/list_offers')
            .then(response => {
                // Actualizar el estado con los datos de las ofertas recibidas
                setList(response.data)
            })
            .catch(error => {
                console.error('Error fetching offers:', error)
            })
    }, [])

    const handleCode = () => {
        list.forEach(offer => {
            code({
                code: codeUnique,
                user_id: user.id,
                offer_id: offer.id,
                redeemed: false,
            })
        })
    }
    return (
        <>
            {list &&
                list.map(offer => (
                    <CardCommon
                        key={offer.id}
                        title={offer.name}
                        discount={offer.discount}
                        image={offer.image_url}
                        description={offer.description}
                        buttonText={'Obtener'}
                        handlerClick={handleCode}
                    />
                ))}
        </>
    )
}

export default CardList
