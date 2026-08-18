import ProjetoCard from "./ProjetosCard";
import NextPage from "./ButtonNextPage";
import liquida from "../../assets/img/LiquidaGames.png";
import AsideCard from "../Home/AsideCard";
import qrcode from "../../assets/img/qrcode.png";
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
          <div className="flex flex-row">
            <div className="flex flex-col lg:flex-row gap-6">
              <ProjetoCard
                imagem={liquida}
                titulo={"Liquida Games"}
                descricao={
                  "Liquida Games é um projeto de interface web que simula uma loja de Tecnologia. A aplicação foi desenvolvida com o objetivo de criar uma experiência simples e organizada para que usuários possam visualizar ofertas e interagir com formulários dentro da plataforma. Durante o desenvolvimento, foram implementadas validações de dados para garantir que as informações inseridas pelos usuários estejam corretas, contribuindo para uma navegação mais segura e intuitiva."
                }
              />
              <ProjetoCard
                imagem={qrcode}
                titulo={"Gerador de QR Code"}
                descricao={
                  "O Gerador de QR Code é um projeto de interface web desenvolvido com o objetivo de oferecer uma experiência simples, prática e intuitiva para a geração de códigos QR a partir de textos ou links inseridos pelo usuário. A aplicação permite que o usuário interaja de forma rápida com a interface, visualizando o QR Code gerado de maneira dinâmica após a solicitação. Durante o desenvolvimento, foram implementadas validações para garantir que o campo de entrada não esteja vazio antes da geração do QR Code, contribuindo para uma melhor usabilidade e evitando erros na interação. Além disso, foram trabalhados conceitos de manipulação de eventos para tornar a experiência mais fluida e responsiva."
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
