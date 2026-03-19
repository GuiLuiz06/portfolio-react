import ProjetosIntra from "./HomeProjetosSingle"
import liquida from "../../assets/img/LiquidaGames.png"
import AsideCard from "../Home/AsideCard"

function ProjectLiquida() {
    return (
        <>
            <div className="grid lg:grid-cols-[600px_1fr] lg:mt-20 ">
                <div className="hidden lg:block">
                    <div className="lg:fixed top-20">
                        <AsideCard/>
                    </div>
                </div>
                <div className="">
                    <ProjetosIntra
                        title={"Liquida Games"}
                        botaoVolta={"/Projetos"}
                        descricao={"Liquida Games é um projeto de interface web que simula uma loja de Tecnologia. A aplicação foi desenvolvida com o objetivo de criar uma experiência simples e organizada para que usuários possam visualizar ofertas e interagir com formulários dentro da plataforma. Durante o desenvolvimento, foram implementadas validações de dados para garantir que as informações inseridas pelos usuários estejam corretas, contribuindo para uma navegação mais segura e intuitiva. O projeto foi desenvolvido utilizando Html para a estrutura da página, Bootstrap para a estilização e criação de um layout responsivo, e JavaScript para implementar a validação dos formulários e interações na página."}
                        data={"08/02/2026"}
                        img={liquida}
                        deploy={"https://project-liquida-games.vercel.app/"}
                        repositorio={"https://github.com/GuiLuiz06/Project-Liquida-Games"}
                        frontend={"Html, Css, JavaScript"}
                        bibliotecas={"Bootstrap"}
                        ferramentas={"Visual Studio Code"}
                    />
                </div>
            </div>
        </>
    )
}

export default ProjectLiquida