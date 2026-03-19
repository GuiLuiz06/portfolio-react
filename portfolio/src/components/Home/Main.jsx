import ProjetoCard from "../projetos/ProjetosCard";
import liquida from "../../assets/img/LiquidaGames.png";
import NextPage from "../projetos/ButtonNextPage";
import GuilhermeImg from "../../assets/img/Guilherme.jpeg"
import ProfileCard from "../Profile/MyCard";
import AsideCard from "./AsideCard";
import { Pencil } from "lucide-react";

function HomeMain() {
  return (
    <>
      <div className="grid lg:grid-cols-[600px_1fr] lg:mt-20 ">
        <div className="lg:hidden">
          <ProfileCard
            imagem={GuilhermeImg}
            nome={"Guilherme Luiz"}
            cargo1={"Desenvolvedor"}
            cargo2={"Front-End"}
          />
        </div>
        <div className="hidden lg:block">
          <div className="fixed top-20 ">
            <AsideCard />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="ml-4 mt-4 font-bold w-[85%] text-xl lg:text-3xl lg:font-extralight 3xl:text-6xl">
            <p className="text-white">Transformando ideias em <span className="text-lime-400">Interfaces intuitivas</span> e experiências envolventes</p>
          </div>
          <div className="h-1 bg-lime-400 w-[90%] ml-4 mt-2 "></div>
          <div className="text-sm font-medium text-white mt-6 ml-4 w-[90%] 3xl:text-2xl">
            <p>
              Oi! Sou <span className="text-lime-400">Guilherme Luiz</span>,
              desenvolvedor em formação e apaixonado por tecnologia. Neste portfólio
              você encontrará projetos que representam minha jornada de aprendizado
              e minha busca por criar interfaces modernas e funcionais.
            </p>
          </div>
          <p className="text-lg font-bold text-white ml-4 mt-4 3xl:text-3xl">Destaque recente</p>
          <div className="">
            <ProjetoCard
              imagem={liquida}
              titulo="Liquida Games"
              descricao={
                "Feito com intuito de entender como funciona o JavaScript DOM e manipulação de formulários. Tecnologias..."
              }
            />
          </div>
          <div>
            <NextPage
              NameNextPage={"Projetos"}
              Icon={Pencil}
              Descricao={"Clique aqui e conheça meus projetos"}
              Botao={"Conheça meus projetos"}
              link={"Projetos"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
