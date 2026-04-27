import ProjetoCard from "../projetos/ProjetosCard";
import liquida from "../../assets/img/LiquidaGames.png";
import NextPage from "../projetos/ButtonNextPage";
import GuilhermeImg from "../../assets/img/Guilherme.jpeg"
import ProfileCard from "../Profile/MyCard";
import AsideCard from "./AsideCard";
import qrcode from "../../assets/img/qrcode.png";
import { Pencil } from "lucide-react";

function HomeMain() {
  return (
    <>
      <div className="grid lg:grid-cols-[500px_1fr] xl:grid-cols-[600px_1fr] lg:mt-20 ">
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
          <div className="ml-4 mt-4 font-bold w-[85%] text-xl lg:text-4xl lg:font-extralight 3xl:text-6xl">
            <p className="text-white">Transformando ideias em <span className="text-lime-400">Interfaces intuitivas</span> e experiências envolventes</p>
          </div>
          <div className="h-1 bg-lime-400 w-[90%] ml-4 mt-2 "></div>
          <div className="text-sm font-medium text-white mt-6 ml-4 w-[90%] xl:text-xl">
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
                  imagem={qrcode}
                  titulo={"Gerador de QR Code"}
                  descricao={
                    "O Gerador de QR Code é um projeto de interface web desenvolvido com o objetivo de oferecer uma experiência simples, prática e intuitiva para a geração de códigos QR a partir de textos ou links inseridos pelo usuário. A aplicação permite que o usuário interaja de forma rápida com a interface, visualizando o QR Code gerado de maneira dinâmica após a solicitação.Durante o desenvolvimento, foram implementadas validações para garantir que o campo de entrada não esteja vazio antes da geração do QR Code, contribuindo para uma melhor usabilidade e evitando erros na interação. Além disso, foram trabalhados conceitos de manipulação de eventos para tornar a experiência mais fluida e responsiva. O projeto foi desenvolvido utilizando HTML para a estrutura da página, CSS para estilização e responsividade, e JavaScript para consumo da API de geração de QR Code, além de controlar a lógica da aplicação e as interações do usuário."
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
