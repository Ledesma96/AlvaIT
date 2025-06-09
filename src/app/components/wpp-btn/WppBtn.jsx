// components/WppBtn.jsx
'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const WppBtn = () => {
    const [pushedUp, setPushedUp] = useState(false)

    useEffect(() => {
        const btn = document.querySelector('.btn-wpp-container')
        const footer = document.querySelector('footer')

        if (!footer || !btn) return

        const observer = new IntersectionObserver(([entry]) => {
        setPushedUp(entry.isIntersecting)
        })

        observer.observe(footer)

        return () => observer.disconnect()
    }, [])

    return (
        <div className={`btn-wpp-container ${pushedUp ? 'pushed' : ''}`}>
        <Image
            src='/WhatsApp.svg.png'
            width={60}
            height={60}
            alt='Botón de acceso a WhatsApp'
            className="btn-wpp"
        />
        </div>
    )
}

export default WppBtn
