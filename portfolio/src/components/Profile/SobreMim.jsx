import React from "react"
import NextPage from "../projetos/ButtonNextPage"
import MyStacks from "../Stacks/Stacks"
import { SendIcon } from "lucide-react"
import CardExp from "./ExpCard"

function Sobremim() {
    return (
        <>
            <div>
                <div className="p-4 text-2xl text-white font-semibold">
                    <p>Sobre mim</p>
                    <p className="text-slate-500 text-base mt-4 font-semibold">Sou um desenvolvedor Front-End apaixonado em criar soluções otimizadas e inovadoras. Tenho experiência em desenvolvimento de interfaces intuitivas. Trabalho com tecnologias como React, JavaScript e Tailwind Css e SQL. Sempre focando em entregar um código limpo e eficaz.</p>
                </div>
                <div className="bg-black w-[90%] mx-auto p-2 flex flex-col rounded-xl">
                    <div className="bg-lime-400 rounded-xl p-2 w-[90%] mx-auto font-bold text-xl m-2">
                        <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                    </div>
                    <div className="text-white w-[90%] mx-auto font-bold">
                        <p className="text-base">Centro Universitário Tiradentes (Unit) - PE</p>
                        <p className="font-semibold mt-2 mb-2">Ago de 2025 - Dez de 2027</p>
                        <p className="font-light mb-2">O Tecnólogo em Análise e Desenvolvimento de Sistemas é um curso superior que abrange áreas como programação, bancos de dados, engenharia de software, segurança da informação e inteligência artificial. O profissional formado pode atuar como desenvolvedor, analista de sistemas, arquiteto de software, entre outras funções, em diversos setores da tecnologia.</p>
                    </div>
                </div>
            </div>
            <div className="bg-black w-[90%] mx-auto p-2 flex flex-col rounded-xl mt-4">
                <div className="flex ml-[5%]">
                    <p className="text-2xl text-white my-2 font-bold">Experiências</p>
                </div>
                <CardExp
                    title={"Experiências"}
                    nomeEmpresa={" MC Games - Sistema Lotérico de Pernambuco"}
                    cargo={"Auxiliar administrativo - Jovem Aprendiz, Recife"}
                    tempoCargo={"Fevereiro de 2025 - Atual"}
                    descricao={"Presto suporte às rotinas administrativas, colaborando para a organização e eficiência operacional da empresa. Atuo na gestão e organização de documentos e arquivos, atualização e controle de planilhas, atendimento e suporte a colaboradores e apoio na execução de processos internos do setor. Minha atuação é focada em manter informações organizadas, otimizar fluxos de trabalho e garantir suporte administrativo às atividades da equipe."}
                />
                    
            </div>
            <NextPage
                NameNextPage={"Contato"}
                Descricao={"Clique aqui e entre em contato comigo"}
                Icon={SendIcon}
                Botao={"Entrar em Contato"}
                link={"/Contatos"}
            />

        </>
    )
}

export default Sobremim