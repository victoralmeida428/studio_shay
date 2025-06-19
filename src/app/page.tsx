'use client'

import Menu from "@/ui/menu/menu";
import {MENU_HEIGHT} from "@/components/menu/NavBar";
import Image from "next/image";
import {FaInstagram, FaPhone} from "react-icons/fa";
import {PRICES, SERVICOS} from "@/utils/data";

export default function Home() {
    const pricesOrderByCategory = [...PRICES].sort((a, b) => {
        // Primeiro ordena pela categoria (A-Z)
        if (a.categoria < b.categoria) return -1;
        if (a.categoria > b.categoria) return 1;

        // Se a categoria for igual, ordena pelo ID (opcional)
        return a.id - b.id;
    });


    const meio = Math.ceil(pricesOrderByCategory.length / 2);

    const pricesCol1 = pricesOrderByCategory.slice(0, meio);
    const pricesCol2 = pricesOrderByCategory.slice(meio);


    return (
        <div className="flex flex-col min-h-screen bg-beige text-dark font-sans">
            <Menu/>
            <main
                className={`flex-1 pt-[${MENU_HEIGHT}px] px-4 md:px-16 lg:px-32`}
                style={{paddingTop: `${MENU_HEIGHT}px`}}
            >
                {/* Seção de Boas-Vindas */}
                <section id="inicio"
                         className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            Seja Bem-Vinda ao Studio Shay!
                        </h1>
                        <p className="text-xl text-primary/80">
                            Realce sua beleza natural com nossos tratamentos especializados
                        </p>
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
                <section id={"servico"} className="scroll-mt-20 py-16 ">
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
                                <div
                                    className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gold/10">
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
                                <a href={`/service/${servico.id}`}><h3
                                    className="text-xl font-semibold text-primary">{servico.nome}</h3></a>
                                <p className="text-sm text-primary/80 mt-1">{servico.categoria}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Preco*/}
                <section id="preco" className="text-center scroll-mt-20 py-10  mx-auto ">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Tabela de Preço</h2>
                    <section
                        className={'flex flex-col md:flex-row  justify-items-stretch items-stretch text-primary/80'}>
                        <article className={'w-full md:w-1/2'}>
                            {pricesCol1.map((prod, index) => {
                                if (index === 0 || pricesOrderByCategory[index - 1].categoria != prod.categoria) {
                                    return <div key={prod.id} className={'py-1'}>
                                        <h3 className={'text-primary font-bold text-start px-3'}>{prod.categoria}</h3>
                                        <div className={'flex justify-between px-3 mt-2'}>
                                            <p>{prod.nome}</p>
                                            <p className={'font-bold'}><span>R$</span> {prod.valor.toFixed(2)}</p>
                                        </div>
                                    </div>
                                }

                                return <div key={prod.id} className={'flex justify-between px-3 mt-2'}>
                                    <p>{prod.nome}</p>
                                    <p className={'font-bold'}><span>R$</span> {prod.valor.toFixed(2)}</p>
                                </div>

                            })}

                        </article>
                        <div className={'bg-primary/50 w-1 rounded-xl hidden md:block'}></div>
                        <article className={'md:w-1/2 w-full'}>
                            {pricesCol2.map((prod, index) => {
                                const lastCategory = pricesCol1[pricesCol1.length - 1].categoria;
                                const condicao1 = index === 0 || pricesCol2[index - 1].categoria != prod.categoria
                                const condicao2 = lastCategory !== prod.categoria
                                if (condicao1) {
                                    return <div key={prod.id} className={'py-1'}>
                                        <h3 className={`${condicao1 && !condicao2 ? 'hidden md:block' : ''} text-primary font-bold text-start px-3`}>{prod.categoria}</h3>
                                        <div className={'flex justify-between px-3 mt-2'}>
                                            <div className={'flex flex-col items-start justify-start'}>
                                                <p>{prod.nome}</p>
                                                <p className={'text-sm font-normal'}>{prod.descricao && `(${prod.descricao})`}</p>
                                            </div>
                                            <div className="font-bold">
                                                {!prod.promo ? (
                                                    <div>R$ {prod.valor.toFixed(2)}</div>
                                                ) : (
                                                    <div
                                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-1 sm:gap-3">
                                                        <div className="flex items-center gap-2">
                                                            <span
                                                                className="text-sm font-normal text-red-500 line-through">
                                                              R$ {prod.valor.toFixed(2)}
                                                            </span>
                                                            <span
                                                                className="text-xs sm:text-sm font-normal border border-red-500 text-red-500 rounded-md px-1 sm:px-2 py-0.5">
                                                              50% OFF <sup>*</sup>
                                                            </span>
                                                        </div>
                                                        <span className="text-base sm:text-lg">
                                    R$ {(prod.valor * prod.promo / 100).toFixed(2)}
                                  </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                }

                                return <div key={prod.id} className={'flex justify-between px-3 mt-2'}>
                                    <p>{prod.nome}</p>
                                    <div className="font-bold">
                                        {!prod.promo ? (
                                            <div>R$ {prod.valor.toFixed(2)}</div>
                                        ) : (
                                            <div
                                                className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-1 sm:gap-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-normal text-red-500 line-through">
                                                      R$ {prod.valor.toFixed(2)}
                                                    </span>
                                                    <span
                                                        className="text-xs sm:text-sm font-normal border border-red-500 text-red-500 rounded-md px-1 sm:px-2 py-0.5">
                                                      50% OFF <sup>*</sup>
                                                    </span>
                                                </div>
                                                <span className="text-base sm:text-lg">
                                    R$ {(prod.valor * prod.promo / 100).toFixed(2)}
                                  </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            })}
                        </article>

                    </section>
                    <div className={'text-red-800 text-sm text-start'}><sup>*</sup>Descontos válidos apenas para mães atípicas</div>
                </section>

                {/* Seção de Contato*/}
                <section id={'contato'} className="py-16 scroll-mt-20 bg-beige">

                    <h2 className="text-3xl font-semibold text-center mb-12 text-primary flex justify-center">
                        <span className={'px-4'}><a
                            href={"https://www.instagram.com/studioshayoficial_?igsh=MTlnbGF3eDZyODJjbw=="}
                            target={'_blank'}>< FaInstagram/></a></span>Contato
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
                        <div className={'text-primary'}>
                            <p className={'text-primary/80'}>Contato:</p>
                            <p className={'flex items-center italic text-sm'}><span
                                className={'text-primary px-2'}><FaPhone/></span>(21) 92001-1394</p>
                        </div>
                        <address className="italic text-primary text-sm text-center">
                            <p className={'not-italic text-primary/80'}>Endereço:</p>
                            R. Cap. Lafay, nº 170<br/>
                            Casa 102<br/>
                            Rio de Janeiro - RJ<br/>
                            23059-160
                        </address>


                    </div>
                    <div className=" mt-3 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="Mapa Studio Shay"
                            src="https://www.google.com/maps?q=R.+Cap.+Lafay,+170,+Rio+de+Janeiro+-+RJ,+23059-160&output=embed"
                            width="100%"
                            height="350"
                            style={{border: 0}}
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
