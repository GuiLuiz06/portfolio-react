import ProjetoCard from "../projetos/ProjetosCard";
import liquida from "../../assets/img/liquidaGames.png";
import NextPage from "../projetos/ButtonNextPage";

function HomeMain() {
    return (
        <>
            <div className="flex flex-row items-center bg-black w-[90%] ml-4 mt-4 rounded-xl">
                <div className="border-4 border-lime-400 w-24 mt-4 ml-4 rounded-md mb-4">
                    <img
                        src="../src/assets/img/Guilherme.jpeg"
                        alt="Foto de Guilherme"
                        className=""
                    />
                </div>
                <div className="ml-2">
                    <p className="whitespace-nowrap ml-4 mb-2 text-xl text-white font-bold">
                        Guilherme Luiz
                    </p>
                    <div className="bg-lime-400 w-[90%] rounded-md ml-4">
                        <div className="ml-2 font-bold w">
                            <p>Desenvolvedor</p>
                            <p>Front-end</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-4 text-2xl mt-6 font-semibold">
                <p className="text-white">Transformando ideias em</p>
                <p className="text-lime-400">Interfaces intuitivas</p>
                <p className="text-white">e experiências envolventes</p>
            </div>
            <div className="h-1 bg-lime-400 w-[90%] ml-4 mt-6"></div>
            <div className="text-sm font-medium text-white mt-8 ml-4 w-[90%]">
                <p>
                    Oi! Sou <span className="text-lime-400">Guilherme Luiz</span>,
                    desenvolvedor em formação e apaixonado por tecnologia. Neste portfólio
                    você encontrará projetos que representam minha jornada de aprendizado
                    e minha busca por criar interfaces modernas e funcionais.
                </p>
            </div>
            <p className="text-lg font-bold text-white ml-4 mt-4">Destaque recente</p>
            <div>
                <ProjetoCard
                    imagem={liquida}
                    titulo="Liquida Games"
                    descricao={"Feito com intuito de entender como funciona o JavaScript DOM e manipulação de formulários. Tecnologias utilizadas: Html5, Css3, Boostrap e JavaScript."}
                />
            </div>
            <div>
                <NextPage
                    NameNextPage={"Projetos"}
                    Descricao={"okdsadajm"}
                />
            </div>
        </>
    );
}

export default HomeMain;
