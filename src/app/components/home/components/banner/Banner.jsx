'use client'
import useWindowWidth from '@/app/hooks/useWindowWidth';
import { useEffect, useState } from 'react';
import ContentDesktop from './ContentDesktop';
import ScrambleText from './ScrambleText';

const Banner = () => {
    const width = useWindowWidth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Evita renderizado hasta que el cliente monte
    return (
        <div className='container_banner'>
            <img
                src='/Universidad_Jannette_Klein_BlogJK_Comercio_digital_como_una_nueva_plataforma_de_negocios_de_Moda_002.jpg'
                alt='Banner'
                className='banner'
            />
            {width > 768 ?
                <ContentDesktop />
                :
                <ScrambleText />
            }
        </div>
    )
}

export default Banner