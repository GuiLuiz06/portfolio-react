import ProjetoCard from "./ProjetosCard";
import NextPage from "./ButtonNextPage";
import meteora from "../../assets/img/SilvaModas.png";
import liquida from "../../assets/img/LiquidaGames.png";

function Layers(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-layers-icon lucide-layers"
    >
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </svg>
  );
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
