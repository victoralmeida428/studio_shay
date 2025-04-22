'use client'

import Menu from "@/ui/menu/menu";
import { MENU_HEIGHT } from "@/components/menu/NavBar";
import Image from "next/image";
import {FaInstagram} from "react-icons/fa";
import {SERVICOS} from "@/utils/data";

export default function Home() {


    return (
        <div className="flex flex-col min-h-screen bg-beige text-dark font-sans">
            <Menu />
            <main
                className="flex-1 pt-[${MENU_HEIGHT}px] px-4 md:px-16 lg:px-32"
                style={{ paddingTop: `${MENU_HEIGHT}px` }}
            >
                {/* Seção de Boas-Vindas */}
                <section id="inicio" className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            Seja Bem-Vinda ao Studio Shay!
                        </h1>
                        <p className="text-xl text-primary/80">
                            Realce sua beleza natural com nossos tratamentos especializados
                        </p>
                        <button className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-xl text-lg transition">
                            Agende sua consulta
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/foto_principal.jpg"
                            alt="Foto de destaque"
                            width={350}
                            height={350}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </section>

                {/* Seção Sobre */}
                <section id="sobre" className="text-center scroll-mt-20 py-10 max-w-3xl mx-auto ">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Sobre Nós</h2>
                    <p className="text-lg text-primary/80">
                        Somos um centro dedicado à beleza e estética, oferecendo uma ampla gama de
                        serviços para cuidar de você. Nossa equipe é experiente e apaixonada, pronta
                        para proporcionar um atendimento personalizado em um ambiente acolhedor.
                    </p>
                </section>

                {/* Seção de Serviços */}
                <section id={"servico"} className="scroll-mt-20 py-16 bg-beige">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-primary">
                        Nossos Serviços
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {SERVICOS.map((servico) => (
                            <div
                                id={`servico-${servico.id}`}
                                key={servico.id}
                                className="scroll-mt-20 bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300"
                            >
                                {/* SVG genérico com ícone simbólico */}
                                <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gold/10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-gold"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 11c0 2.21-1.79 4-4 4S4 13.21 4 11s1.79-4 4-4 4 1.79 4 4zm0 0c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z"
                                        />
                                    </svg>
                                </div>
                                <a href={`/service/${servico.id}`}><h3 className="text-xl font-semibold text-primary">{servico.nome}</h3></a>
                                <p className="text-sm text-primary/80 mt-1">{servico.categoria}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id={'contato'} className="py-16 scroll-mt-20 bg-beige">

                    <h2 className="text-3xl font-semibold text-center mb-12 text-primary flex justify-center">
                        <span className={'px-4'}><a href={"https://www.instagram.com/studioshayoficial_?igsh=MTlnbGF3eDZyODJjbw=="} target={'_blank'}>< FaInstagram /></a></span>Contato
                    </h2>
                    <div className={'text-center flex justify-between'}>
                        <div>
                            <h3 className={'text-primary'}>Horário de funcionamento</h3>
                            <div>
                                <div>
                                    <p className={'text-primary/80 text-sm'}>Quarta à Sexta-Feira</p>
                                    <p className={'text-primary text-xl'}>09:00 - 12:00</p>
                                </div>
                                <div>
                                    <p className={'text-primary/80 text-sm'}>Sábado</p>
                                    <p className={'text-primary text-xl'}>09:00 - 19:00</p>
                                </div>
                            </div>

                        </div>
                        <address className="not-italic text-primary text-sm text-center">
                            R. Cap. Lafay, nº 170<br />
                            Casa 102<br />
                            Rio de Janeiro - RJ<br />
                            23059-160
                        </address>


                    </div>
                    <div className=" mt-3 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="Mapa Studio Shay"
                            src="https://www.google.com/maps?q=R.+Cap.+Lafay,+170,+Rio+de+Janeiro+-+RJ,+23059-160&output=embed"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </section>
            </main>
        </div>
    );
}
