import React from "react";
import NextPage from "../projetos/ButtonNextPage";
import MyStacks from "../Stacks/Stacks";
import { SendIcon } from "lucide-react";
import CardExp from "./ExpCard";
import AsideCard from "../Home/AsideCard";

function Sobremim() {
  return (
    <>
      <div className="grid lg:grid-cols-[500px_1fr] xl:grid-cols-[600px_1fr] lg:mt-20">
        <div className="hidden lg:block">
          <div className="fixed top-20">
            <AsideCard />
          </div>
        </div>
        <div>
          <div>
            <div className="p-4 text-2xl text-white font-bold">
              <p>Sobre mim</p>
              <div className="w-[97%]">
                <p className="text-slate-500 text-base mt-4 font-semibold">
                  Sou um desenvolvedor Front-End apaixonado em criar soluções
                  otimizadas e inovadoras. Tenho experiência em desenvolvimento
                  de interfaces intuitivas. Trabalho com tecnologias como React,
                  JavaScript e Tailwind Css e SQL. Sempre focando em entregar um
                  código limpo e eficaz.
                </p>
              </div>
            </div>
            <div className="bg-black w-[90%] items-center ml-4 p-2 flex flex-col rounded-xl">
              <div className="bg-lime-400 rounded-xl p-4 w-[90%] mx-auto font-bold text-xl m-4">
                <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
              </div>
              <div className="text-white w-[90%] mx-auto font-bold">
                <p className="text-base">
                  Centro Universitário Tiradentes (Unit) - PE
                </p>
                <p className="font-semibold mt-2 mb-2">
                  Ago de 2025 - Dez de 2027
                </p>
                <p className="font-light mb-2">
                  O Tecnólogo em Análise e Desenvolvimento de Sistemas é um
                  curso superior que abrange áreas como programação, bancos de
                  dados, engenharia de software, segurança da informação e
                  inteligência artificial. O profissional formado pode atuar
                  como desenvolvedor, analista de sistemas, arquiteto de
                  software, entre outras funções, em diversos setores da
                  tecnologia.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black w-[90%] items-start ml-4 p-2 flex flex-col rounded-xl mt-4">
            <div className="flex ml-[5%]">
              <p className="text-2xl text-white my-2 font-bold">Experiências</p>
            </div>
          <div className="mt-6">
            <CardExp 
            nomeEmpresa={'Alloy - Tecnologia e Serviços'}
            cargo={'Auxiliar de suporte de TI - Tempo integral, Remoto'}
            tempoCargo={'Julho de 2026 - Atual'}
            descricao={'Atuação em suporte técnico N1, realizando triagem, diagnóstico e resolução de incidentes chamados, incluindo atendimento remoto, análise de logs e acompanhamento de SLA. Apoio na instalação, configuração e manutenção de equipamentos e sistemas, além de documentação de procedimentos, registro das soluções aplicadas e orientação aos usuários.'}
          />
          </div>
            <div className="mt-6">
              <CardExp
              nomeEmpresa={"Alloy - Tecnologia e Serviços"}
              cargo={"Suporte e implementação - Estágio, Remoto"}
              tempoCargo={"Março de 2026 - Julho de 2026"}
              descricao={
                "Atuação com suporte técnico a usuários, realizando atendimento e resolução de chamados relacionados a hardware, software e sistemas. Apoio na instalação, configuração e manutenção de equipamentos, além de registro e acompanhamento de demandas. Auxílio na documentação de processos e orientação aos usuários."
              }
            />
            </div>
            <div className="mt-6">
              <CardExp
                title={"Experiências"}
                nomeEmpresa={" MC Games - Sistema Lotérico de Pernambuco"}
                cargo={"Auxiliar administrativo - Jovem Aprendiz, Recife"}
                tempoCargo={"Fevereiro de 2025 - Março de 2026"}
                descricao={
                  "Prestei suporte às rotinas administrativas, colaborando para a organização e eficiência operacional da empresa. Atuo na gestão e organização de documentos e arquivos, atualização e controle de planilhas, atendimento e suporte a colaboradores e apoio na execução de processos internos do setor. Minha atuação é focada em manter informações organizadas, otimizar fluxos de trabalho e garantir suporte administrativo às atividades da equipe."
                }
              />
            </div>
          </div>
          <NextPage
            NameNextPage={"Contato"}
            Descricao={"Clique aqui e entre em contato comigo"}
            Icon={SendIcon}
            Botao={"Entrar em Contato"}
            link={"/Contatos"}
          />
        </div>
      </div>
    </>
  );
}

export default Sobremim;
