import React from "react"
import MyStacks from "./Stacks/Stacks"

function Sobremim() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <h1 className="font-bold text-3xl mt-10 text-white flex justify-center">Olá, eu sou o Guilherme Luiz 👨‍💻</h1>
                    <p className="font-semibold text-2xl mt-5 text-white flex justify-center">Estudante de ADS</p>
                </div>
                <div className="bg-cyan-500 w-[1000px] p-4 rounded-xl mt-[50px]">
                    <div className="flex justify-center font-semibold text-2xl">
                        <p>

                            Estudante de Análise e Desenvolvimento de Sistemas no Centro Universitário Tiradentes (UNIT) e um desenvolvedor Full-Stack em constante evolução.

                            Desde pequeno tenho interesse por tecnologia e sempre fui curioso para entender como as coisas funcionam. Essa curiosidade me levou ao mundo da programação, onde hoje gosto de aprender novas ferramentas, criar projetos e transformar ideias em soluções digitais.

                            Tenho experiência com tecnologias como <span className="text-orange-600">HTML5</span>, <span className="text-blue-800">CSS3</span>, <span className="text-yellow-400">JavaScript</span>, <span className="text-cyan-300">React</span>, <span className="text-cyan-800">Tailwind Css</span>, <span className="text-purple-800">Bootstrap</span>, <span className="text-red-600">Java</span>, <span className="text-blue-900">Python</span>, Linux, Docker, Git e GitHub e estou sempre buscando aprimorar minhas habilidades.

                            Sou movido pela curiosidade, dedicação e persistência, sempre buscando crescer como desenvolvedor e construir projetos cada vez melhores.

                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sobremim