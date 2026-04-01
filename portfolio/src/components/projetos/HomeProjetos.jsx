import ProjetoCard from "./ProjetosCard";
import NextPage from "./ButtonNextPage";
import liquida from "../../assets/img/LiquidaGames.png";
import AsideCard from "../Home/AsideCard";
import { Layers } from "lucide-react";

function HomeProject() {
  return (
    <>
      <div className="grid lg:grid-cols-[500px_1fr] xl:grid-cols-[600px_1fr] lg:mt-20 ">
        <div className="hidden lg:block">
          <div className="fixed top-20">
            <AsideCard />
          </div>
        </div>
        <div>
          <div className="px-4 py-4 text-2xl text-white  flex flex-col">
            <p className="font-bold">Projetos</p>
            <p className="text-base">Lista dos meus projetos:</p>
          </div>
          <div className="flex flex-wrap">
            <div className="">
              <ProjetoCard
                imagem={liquida}
                titulo={"Liquida Games"}
                descricao={
                  "Liquida Games é um projeto de interface web que simula uma loja de Tecnologia. A aplicação foi desenvolvida com o objetivo de criar uma experiência simples e organizada para que usuários possam visualizar ofertas e interagir com formulários dentro da plataforma. Durante o desenvolvimento, foram implementadas validações de dados para garantir que as informações inseridas pelos usuários estejam corretas, contribuindo para uma navegação mais segura e intuitiva."
                }
              />
            </div>
          </div>
          <div>
            <NextPage
              NameNextPage={"Stacks"}
              Icon={Layers}
              Descricao={"Clique aqui e conheça minhas Habilidades"}
              Botao={"Conheça minhas habilidades"}
              link={"MyStacks"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProject;
