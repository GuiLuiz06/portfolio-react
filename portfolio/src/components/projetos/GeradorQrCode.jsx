import ProjetosIntra from "./HomeProjetosSingle";
import AsideCard from "../Home/AsideCard"
import qrcode from "../../assets/img/qrcode.png"
import liquida from "../../assets/img/LiquidaGames.png"


function ProjectGeradorQrCode() {
    return (
        <>
            <div className="grid lg:grid-cols-[500px_1fr] xl:grid-cols-[600px_1fr] lg:mt-20 ">
                <div className="hidden lg:block">
                    <div className="lg:fixed top-20">
                        <AsideCard/>
                    </div>
                </div>
                <div className="">
                    <ProjetosIntra
                        title={"Gerador QR Code"}
                        botaoVolta={"/Projetos"}
                        descricao={"O Gerador de QR Code é um projeto de interface web desenvolvido com o objetivo de oferecer uma experiência simples, prática e intuitiva para a geração de códigos QR a partir de textos ou links inseridos pelo usuário. A aplicação permite que o usuário interaja de forma rápida com a interface, visualizando o QR Code gerado de maneira dinâmica após a solicitação.Durante o desenvolvimento, foram implementadas validações para garantir que o campo de entrada não esteja vazio antes da geração do QR Code, contribuindo para uma melhor usabilidade e evitando erros na interação. Além disso, foram trabalhados conceitos de manipulação de eventos para tornar a experiência mais fluida e responsiva. O projeto foi desenvolvido utilizando HTML para a estrutura da página, CSS para estilização e responsividade, e JavaScript para consumo da API de geração de QR Code, além de controlar a lógica da aplicação e as interações do usuário."}
                        data={"26/04/2026"}
                        img={qrcode}
                        deploy={"https://gerador-qrcode-flax.vercel.app/"}
                        repositorio={"https://github.com/GuiLuiz06/Gerador-Qrcode"}
                        frontend={"Html, Css, JavaScript"}
                        bibliotecas={"Não foi utilizada nenhuma biblioteca externa nesse projeto"}
                        ferramentas={"Visual Studio Code"}
                    />
                </div>
            </div>
        </>
    )};

    export default ProjectGeradorQrCode