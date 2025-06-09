'use client'
import useWindowWidth from '@/app/hooks/useWindowWidth'
import { useEffect, useState } from 'react'
import NavbarDesktop from './navbar-desktop/NavbarDesktop'
import NavbarMobile from './navbar-mobile/NavbarMobile'

const NavBar = () => {
    const width = useWindowWidth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Evita renderizado hasta que el cliente monte

    return (
        <nav className="w-screen h-20 bg-primary">
            {width > 1023 ? <NavbarDesktop /> : <NavbarMobile />}
        </nav>
    );
};

export default NavBar;

