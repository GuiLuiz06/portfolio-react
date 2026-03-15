import silvamodas from "../../assets/img/SilvaModas.png"
import ProjetosIntra from "./HomeProjetosSingle";

function ProjectSilva() {
  return (
    <>
      <ProjetosIntra
        title={"Silva Modas"}
        botaoVolta={"/Projetos"}
        descricao={
          "Silva Modas é um projeto de landing page desenvolvido como parte dos meus estudos em desenvolvimento web. A proposta foi criar a interface de uma loja fictícia de roupas, com foco em apresentar produtos, destacar promoções e oferecer uma navegação clara e agradável para o usuário.O principal objetivo do projeto foi praticar a construção de layouts modernos e responsivos, explorando conceitos como organização de conteúdo em grid, utilização de componentes visuais e adaptação da interface para diferentes tamanhos de tela.Durante o desenvolvimento, foram utilizadas tecnologias como HTML5 para a estrutura da página, CSS3 para ajustes de estilo e Bootstrap para criação do layout responsivo e dos componentes da interface."
        }
        data={"16/10/2025"}
        img={silvamodas}
        deploy={"https://landing-page-bootstrap-beta.vercel.app/"}
        repositorio={"https://github.com/GuiLuiz06/Landing-page-Bootstrap"}
        frontend={"Html, Css"}
        bibliotecas={"Bootstrap"}
        ferramentas={"Visual Studio Code"}
      />
    </>
  );
}

export default ProjectSilva
