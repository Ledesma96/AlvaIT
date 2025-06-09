'use client'
import { motion } from 'framer-motion';
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'planes', href: '/pricing' },
    { label: 'Nosotros', href: '/aboutus' },
    { label: 'Contacto', href: '/contact' },
];

const Options = () => {
    const pathname = usePathname();
    return (
        <div className="flex justify-around w-[50%] container-options">
            {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link
                    key={item.href}
                    href={item.href}
                    className="relative group text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600"
                >
                    {item.label}

                    {/* Línea inferior con animación */}
                    <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />

                    {/* Indicador de ruta activa */}
                    {isActive && (
                    <motion.span
                        layoutId="active-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
                    />
                    )}
                </Link>
                );
            })}
        </div>
    )
}

export default Options