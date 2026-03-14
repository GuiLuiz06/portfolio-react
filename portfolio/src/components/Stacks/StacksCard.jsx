import MyStacks from "./Stacks";
import NextPage from "../projetos/ButtonNextPage";
import { User } from "lucide-react";


const html5 = () => (
  <img
    src="https://camo.githubusercontent.com/822fcc8df1633008d599cfe1c3a85e7d15374fa6d9b08e3262e04106b4ea44b0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667"
    alt="Html5"
    className="max-w-10 max-h-10"
  />
);

const css3 = () => (
  <img
    src="https://camo.githubusercontent.com/35ac0694790ddda21ada952700c09d2995ea90b8cb37857f52aa63041a131959/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f637373332f637373332d6f726967696e616c2e737667"
    alt="Css3"
    className="max-w-10 max-h-10"
  />
);

const JavaScript = () => (
  <img
    src="https://camo.githubusercontent.com/5f9c88ee1da6ce5f954b5aa4902bdd20438598c332b6c71e405e4c2acc731176/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
    alt="JavaScript"
    className="max-w-10 max-h-10"
  />
);

const react = () => (
  <img
    src="https://camo.githubusercontent.com/81009b146327bd4b2041db71eb2dfb815387f2da20c8997c4eb57844b7d7f010/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667"
    alt="React"
    className="max-w-10 max-h-10"
  />
);

const bootstrap = () => (
  <img
    src="https://camo.githubusercontent.com/cb1e16f0df9518c3d0503b69a3120fa590e9289abb789905b04403865ab70534/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f626f6f7473747261702f626f6f7473747261702d6f726967696e616c2e737667"
    alt="Bootstrap"
    className="max-w-10 max-h-10"
  />
);

const Tailwind = () => (
  <img
    src="https://camo.githubusercontent.com/7e2dc1a7b297b21d35098d994a9236accd52325ce54e6af52213e8f9e3b94e0b/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
    alt="Tailwind Css"
    className="max-w-10 max-h-10"
  />
);

const java = () => (
  <img
    src="https://camo.githubusercontent.com/effec136df8079262f959dbd34a06eac54cdbdc153a944c65ecd19968f4bdcc7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6a6176612f6a6176612d6f726967696e616c2e737667"
    alt=""
    className="max-w-10 max-h-10"
  />
);

const mysql = () => (
  <img
    src="https://camo.githubusercontent.com/943275de32c8b1141579e98817392da161ec11c058719de6bf1ec846abf66e79/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6d7973716c2f6d7973716c2d6f726967696e616c2e737667"
    alt="Mysql"
    className="max-w-10 max-h-10"
  />
);

const linux = () => (
  <img
    src="https://camo.githubusercontent.com/e5b73aac41779533894a5bdaf9402083addc4d689a3d47deb62b9f678b20aeb9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6c696e75782f6c696e75782d6f726967696e616c2e737667"
    alt="Linux"
    className="max-w-10 max-h-10"
  />
);

const docker = () => (
  <img
    src="https://camo.githubusercontent.com/1c75fbf2872129d70335af4a56bb72f843d8c3ba93269b6fcf9bf456067f063e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2e737667"
    alt="Docker"
    className="max-w-10 max-h-10"
  />
);

const git = () => (
  <img
    src="https://camo.githubusercontent.com/4262b7812ebc2950eeb63d502f39cf94cc1de73c1befa3dff1346baddfb22f8a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6769742f6769742d6f726967696e616c2e737667"
    alt="Git"
    className="max-w-10 max-h-10"
  />
);

const github = () => (
  <img
    src="https://camo.githubusercontent.com/eeb954c3785e56e4290c926f8c4b8bbe26342df5891f7fc39d16569817b84b8d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6769746875622f6769746875622d6f726967696e616c2e737667"
    alt="Github"
    className="max-w-10 max-h-10"
  />
);

const figma = () => (
  <img
    src="https://camo.githubusercontent.com/b159c6805998d16ff412e620f04c597294d5132599c72318afc7855f811bb3fb/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6669676d612f6669676d612d6f726967696e616c2e737667"
    alt="Figma"
    className="max-w-10 max-h-10"
  />
);

const vscode = () => (
  <img
    src="https://camo.githubusercontent.com/5a27eca4ed03b119f0dcd3787ca1ded4298169e6a8f693617d7fd2ce18fe410d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667"
    alt="VsCode"
    className="max-w-10 max-h-10"
  />
);

function CardStack() {
  return (
    <>
      <div className=" text-white w-[90%] m-auto py-5">
        <h1 className="font-bold text-2xl">Stack's</h1>
        <p>Lista das minhas Stack's:</p>
      </div>
      <div className="bg-black flex flex-col p-2 w-[90%] mx-auto rounded-xl">
        <p className="text-white font-bold text-xl mb-4 p-2">
          Habilidades Front-End
        </p>
        <MyStacks
          Icon={html5}
          Title={"Html"}
          Descricao={
            "Html é a linguagem de marcação usada para estruturar páginas web."
          }
        />
        <MyStacks
          Icon={css3}
          Title={"Css"}
          Descricao={
            "Css é usado para estilizar e criar o design das páginas web."
          }
        />
        <MyStacks
          Icon={JavaScript}
          Title={"JavaScript"}
          Descricao={
            "JavaScript é a linguagem responsável pela interatividade nas páginas web."
          }
        />
        <MyStacks
          Icon={react}
          Title={"React"}
          Descricao={
            "React é uma biblioteca para interfaces de usuário dinâmicas."
          }
        />
        <MyStacks
          Icon={Tailwind}
          Title={"Tailwind Css"}
          Descricao={
            "Tailwind CSS é um framework CSS que facilita a criação de interfaces rápidas e modernas."
          }
        />
        <MyStacks
          Icon={bootstrap}
          Title={"Bootstrap"}
          Descricao={
            "Bootstrap é um framework CSS que ajuda a criar layouts responsivos rapidamente."
          }
        />
      </div>
      <div className="bg-black flex flex-col p-2 w-[90%] mx-auto rounded-xl mt-10">
        <p className="text-white font-bold text-xl mb-4 p-2">
          Habilidades Back-End
        </p>
        <MyStacks
          Icon={java}
          Title={"Java"}
          Descricao={
            "Java é uma linguagem de programação usada para desenvolver aplicações robustas e escaláveis."
          }
        />
        <MyStacks
          Icon={mysql}
          Title={"Mysql"}
          Descricao={
            "MySQL é um sistema de banco de dados usado para armazenar e gerenciar informações."
          }
        />
      </div>
      <div className="bg-black flex flex-col p-2 w-[90%] mx-auto rounded-xl mt-10">
        <p className="text-white font-bold text-xl mb-4 p-2">Ferramentas</p>
        <MyStacks
          Icon={docker}
          Title={"Docker"}
          Descricao={
            "Docker é uma ferramenta que cria containers para rodar aplicações de forma isolada."
          }
        />
        <MyStacks
          Icon={linux}
          Title={"Linux"}
          Descricao={
            "Linux é um sistema operacional muito usado em servidores e desenvolvimento."
          }
        />
        <MyStacks
          Icon={git}
          Title={"Git"}
          Descricao={
            "Git é um sistema de controle de versão usado para gerenciar código."
          }
        />
        <MyStacks
          Icon={figma}
          Title={"Figma"}
          Descricao={
            "Figma é uma ferramenta usada para criar protótipos e interfaces de design."
          }
        />
        <MyStacks
          Icon={github}
          Title={"Github"}
          Descricao={
            "GitHub é uma plataforma para hospedar e colaborar em projetos com Git."
          }
        />
        <MyStacks
          Icon={vscode}
          Title={"Visual Studio Code"}
          Descricao={
            "Visual Studio Code é um editor de código leve e muito usado por desenvolvedores."
          }
        />
      </div>
      <div>
        <NextPage
          NameNextPage={"Sobre mim"}
          link={"SobreMim"}
          Descricao={"Clique aqui e conheça mais sobre mim"}
          Botao={"Conheça mais sobre mim"}
          Icon={User}
        />
      </div>
    </>
  );
}

export default CardStack;
