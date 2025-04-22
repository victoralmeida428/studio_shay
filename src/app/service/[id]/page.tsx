'use client'

import {useParams} from 'next/navigation'
import {SERVICOS} from "@/utils/data";
import Menu from "@/ui/menu/menu";
import {MENU_HEIGHT} from "@/components/menu/NavBar";
import {FaTag} from "react-icons/fa";
import Image from "next/image";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export default function ServicePage() {
    const params = useParams();
    const id = parseInt(params.id!.toString());
    const servico = SERVICOS.find((item) => item.id === id);
    const nextID = (id: number): number => {
        return id === SERVICOS.length? 1 : id+1
    }
    const prevID = (id: number): number => {
        return id === 1? SERVICOS.length : id-1
    }
    return (
        <div className="flex flex-col min-h-screen bg-beige text-dark font-sans">
            <Menu/>
            <main
                className="flex-1 px-4 pt-[${MENU_HEIGHT}px] md:px-10 lg:px-32"
                style={{paddingTop: `${MENU_HEIGHT}px`}}
            >
                {servico && (
                    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
                        <h1 className="text-2xl text-center md:text-3xl font-bold text-primary mb-4">
                            {servico.nome}
                        </h1>
                        <div
                            className="flex justify-center items-center bg-gold/10 text-destaque px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <p className={'flex w-fit bg-secondary  rounded-full py-1 items-center pe-3'}>
                                <span className={'text-primary px-3'}><FaTag/></span>
                                {servico.categoria}
                            </p>

                        </div>
                        <div className="flex justify-center text-center mx-auto">
                            <span className={'text-5xl text-primary my-auto cursor-pointer'}>
                                <a href={`/service/${prevID(id)}`}><IoIosArrowBack/></a>
                            </span>
                            <Image
                                src={`/service-${id}.jpg`}
                                alt="Foto de destaque"
                                width={200}
                                height={200}
                                className="rounded-2xl shadow-lg"
                            />
                            <span className={'text-5xl text-primary my-auto cursor-pointer'}>
                                <a href={`/service/${nextID(id)}`}><IoIosArrowForward/></a>
                            </span>
                        </div>
                        <p className="mt-3 text-primary/80 text-base text-justify">
                            {servico.descricao}
                        </p>
                    </div>
                )}

                {!servico && (
                    <div className="text-center text-primary mt-20">
                        <p className="text-xl">Serviço não encontrado 😕</p>
                    </div>
                )}
            </main>
        </div>
    );
}
