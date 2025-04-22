'use client'

import { useParams } from 'next/navigation'
import { SERVICOS } from "@/utils/data";
import Menu from "@/ui/menu/menu";
import { MENU_HEIGHT } from "@/components/menu/NavBar";

export default function ServicePage() {
    const params = useParams();
    const id = parseInt(params.id!.toString());
    const servico = SERVICOS.find((item) => item.id === id);

    return (
        <div className="flex flex-col min-h-screen bg-beige text-dark font-sans">
            <Menu/>
            <main
                className="flex-1 px-4 pt-[${MENU_HEIGHT}px] md:px-10 lg:px-32"
                style={{ paddingTop: `${MENU_HEIGHT}px` }}
            >
                {servico && (
                    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            {servico.nome}
                        </h1>
                        <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {servico.categoria}
                        </span>
                        <p className="text-primary/80 text-base leading-relaxed">
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
