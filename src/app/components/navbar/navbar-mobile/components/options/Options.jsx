'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiGift, FiHome, FiPhone, FiUsers } from 'react-icons/fi';
import { ToggleMenu } from '..';
const Options = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    
    const handleMenu = () =>{
        setOpen(!open)
    }
    const closeMenu = () =>{
        setOpen(false)
    }
    return (
        <>
            <ToggleMenu
                open={open}
                handleMenu={handleMenu}
            />
            <div className={`${open ? 'on' : 'off'} container_menu`}>
                <Link href='/' className={`${pathname === '/' && 'active'}`}    onClick={closeMenu}>
                    <FiHome />
                    <p>INICIO</p>
                </Link>
                <Link href='/contact' className={`${pathname === '/contact' && 'active'}`}  onClick={closeMenu}>
                    <FiPhone />
                    <p>CONTACTO</p>
                </Link>
                <Link href='/pricing' className={`${pathname === '/pricing' && 'active'}`}  onClick={closeMenu}>
                    <FiGift />
                    <p>PLANES</p>
                </Link>
                <Link href='/aboutus' className={`${pathname === '/aboutus' && 'active'}`}  onClick={closeMenu}>
                    <FiUsers />
                    <p>NOSOTROS</p>
                </Link>
            </div>
            {open && <div className="backdrop" onClick={() => setOpen(false)} />}
        </>
    )
}

export default Options