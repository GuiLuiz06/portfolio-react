import ProjetoCard from "./ProjetosCard";
import NextPage from "./ButtonNextPage";
import meteora from "../../assets/img/meteora.png"
import liquida from "../../assets/img/LiquidaGames.png"

function Layers(props) {
  return (
    <svg
      {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg>
  )
}

function HomeProject() {
  return (
    <>
      <div>
        <div className="p-4 text-4xl text-white mt-4 flex flex-col">
          <p className="font-bold">Projetos</p>
          <span className="text-xl">Lista dos meus projetos:</span>
        </div>
        <div className="">
          <ProjetoCard
            imagem={meteora}
            titulo={"Meteora Modas"}
            descricao={
              "Este projeto foi desenvolvido como parte dos meus estudos em Bootstrap, com o objetivo de praticar a criação de uma landing page responsiva para uma loja fictícia chamada Silva Modas."
            }
          />
        </div>
        <div className="">
          <ProjetoCard
            imagem={liquida}
            titulo={"Liquida Games"}
            descricao={
              "Feito com intuito de entender como funciona o JavaScript DOM e manipulação de formulários. Tecnologias..."
            }
          />
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
    </>
  );
}

export default HomeProject;
