import ProjetoCard from "./ProjetosCard";
import NextPage from "./ButtonNextPage";
import meteora from "../../assets/img/SilvaModas.png";
import liquida from "../../assets/img/LiquidaGames.png";
import AsideCard from "../Home/AsideCard";
import { Layers } from "lucide-react";

function HomeProject() {
  return (
    <>
      <div className="grid lg:grid-cols-[600px_1fr] lg:mt-20 ">
        <div className="hidden lg:block">
          <div className="fixed top-20">
            <AsideCard />
          </div>
        </div>
        <div>
          <div className="p-4 text-2xl text-white mt-4 flex flex-col">
            <p className="font-bold">Projetos</p>
            <span className="text-xl">Lista dos meus projetos:</span>
          </div>
          <div className="flex flex-wrap">
            <div className="">
              <ProjetoCard
                imagem={meteora}
                titulo={"Silva Modas"}
                descricao={
                  "Silva Modas é um projeto de landing page desenvolvido como parte dos meus estudos em desenvolvimento web. A proposta foi criar a interface de uma loja fictícia de roupas, com foco em apresentar produtos, destacar promoções e oferecer uma navegação clara e agradável para o usuário. O principal objetivo do projeto foi praticar a construção de layouts modernos e responsivos, explorando conceitos como organização de conteúdo em grid, utilização de componentes visuais e adaptação da interface para diferentes tamanhos de tela. Durante o desenvolvimento, foram utilizadas tecnologias como HTML5 para a estrutura da página, CSS3 para ajustes de estilo e Bootstrap para criação do layout responsivo e dos componentes da interface."
                }
              />
            </div>
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
