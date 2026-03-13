import ProjetoCard from "../projetos/ProjetosCard";
import liquida from "../../assets/img/LiquidaGames.png";
import NextPage from "../projetos/ButtonNextPage";
import GuilhermeImg from "../../assets/img/Guilherme.jpeg"


function Pencil(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z" />
    </svg>
  );
}

function HomeMain() {
  return (
    <>
      <div className="flex flex-row items-center bg-black w-[90%] ml-4 mt-4 rounded-xl">
        <div className="border-4 border-lime-400 w-24 mt-4 ml-4 rounded-md mb-4">
          <img
            src={GuilhermeImg}
            alt="Foto de Guilherme"
            className=""
          />
        </div>
        <div className="w-[90%]">
          <p className="whitespace-nowrap ml-4 mb-2 text-xl text-white font-bold">
            Guilherme Luiz
          </p>
          <div className="bg-lime-400 w-[75%] rounded-md ml-4">
            <div className="ml-2 font-bold w">
              <p>Desenvolvedor</p>
              <p>Front-end</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4 text-xl mt-4 font-semibold">
        <p className="text-white">Transformando ideias em</p>
        <p className="text-lime-400">Interfaces intuitivas</p>
        <p className="text-white">e experiências envolventes</p>
      </div>
      <div className="h-1 bg-lime-400 w-[90%] ml-4 mt-2"></div>
      <div className="text-sm font-medium text-white mt-6 ml-4 w-[90%]">
        <p>
          Oi! Sou <span className="text-lime-400">Guilherme Luiz</span>,
          desenvolvedor em formação e apaixonado por tecnologia. Neste portfólio
          você encontrará projetos que representam minha jornada de aprendizado
          e minha busca por criar interfaces modernas e funcionais.
        </p>
      </div>
      <p className="text-lg font-bold text-white ml-4 mt-4">Destaque recente</p>
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
    </>
  );
}

export default HomeMain;
