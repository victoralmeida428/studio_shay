'use client'

import { useState, useEffect } from 'react';
import NavBar from "@/components/menu/NavBar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ImWhatsapp } from "react-icons/im";
import { FiMenu, FiX } from "react-icons/fi";

export default function Menu() {
    const url = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const phoneNumber = "5521920011394";
    const message = "Olá, gostaria de agendar uma sessão";
    const phoneURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

    const servicos = [
        { id: 1, nome: "Designer de sobrancelhas", categoria: "Sobrancelhas" },
        { id: 2, nome: "Brow Lamination", categoria: "Sobrancelhas" },
        { id: 3, nome: "Micropigmentação", categoria: "Sobrancelhas" },
        { id: 4, nome: "Hidratação labial e de sobrancelhas", categoria: "Hidratação" },
        { id: 5, nome: "Hidra Gloss", categoria: "Labial" },
        { id: 6, nome: "Depilação (linha, cera e corporal)", categoria: "Depilação" },
        { id: 7, nome: "Esfoliação corporal", categoria: "Corporal" },
        { id: 8, nome: "Banho dourado", categoria: "Corporal" }
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [url]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Navbar principal */}
            <NavBar className={`fixed w-full z-50 px-4 py-3 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between md:justify-start md:space-x-11 w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/logo_transp.png"
                            alt="logo"
                            width={80}
                            height={80}
                            className="w-16 h-16 md:w-20 md:h-20"
                        />
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex space-x-6 items-center">
                            <NavBar.Item active={url === "#inicio" } href={"#inicio"}>Início</NavBar.Item>
                            <NavBar.Item active={url === "#sobre"}  href={"#sobre"}>Sobre</NavBar.Item>
                            <NavBar.Dropdown title="Serviços" active={url.includes("/servico")}>
                                {servicos.map((item) => (
                                    <NavBar.Item

                                        key={item.id}
                                        href={`#servico-${item.id}`}
                                        className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer text-gray-700"
                                    >
                                        {item.nome}
                                    </NavBar.Item>
                                ))}
                            </NavBar.Dropdown>
                            <NavBar.Item active={url === "#contato"} href={"#contato"} >Contato</NavBar.Item>
                        </ul>
                    </div>

                    {/* Botão do menu mobile */}
                    <button
                        className="md:hidden text-primary focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white w-full mt-4 py-4 shadow-lg rounded-lg text-primary">
                        <ul className="flex flex-col space-y-3 px-4">
                            <NavBar.Item
                                active={url === "#inicio"}
                                href={"#inicio"}
                                className="block py-2 px-4 hover:bg-gray-100 rounded"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Início
                            </NavBar.Item>
                            <NavBar.Item
                                active={url === "#sobre"}
                                href={"#sobre"}
                                className="block py-2 px-4 hover:bg-gray-100 rounded"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sobre
                            </NavBar.Item>

                            {/* Dropdown de serviços no mobile */}
                            <details className="group">
                                <summary className="flex justify-between items-center py-2 px-4 hover:bg-gray-100 rounded cursor-pointer list-none">
                                    <span className={`${url.includes("/servico") ? 'font-bold' : ''}`}>Serviços</span>
                                    <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <ul className="pl-4 mt-2 space-y-2">
                                    {servicos.map((item) => (
                                        <NavBar.Item
                                            key={item.id}
                                            href={`#servico-${item.id}`}
                                            className="block py-2 px-4 hover:bg-gray-100 rounded cursor-pointer text-gray-700"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.nome}
                                        </NavBar.Item>
                                    ))}
                                </ul>
                            </details>

                            <NavBar.Item
                                active={url === "#contato"}
                                href={"#contato"}
                                className="block py-2 px-4 hover:bg-gray-100 rounded"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contato
                            </NavBar.Item>
                        </ul>
                    </div>
                )}
            </NavBar>

            {/* Botão do WhatsApp fixo */}
            <div className="fixed bottom-6 right-6 z-40">
                <a
                    href={phoneURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                    aria-label="WhatsApp"
                >
                    <ImWhatsapp className="text-3xl" />
                    <span className="sr-only">WhatsApp</span>
                </a>
            </div>
        </>
    );
}