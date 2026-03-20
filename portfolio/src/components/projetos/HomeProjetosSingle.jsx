import { ArrowLeft, Archive, Rocket } from "lucide-react";

function ProjetosIntra({
  botaoVolta,
  title,
  descricao,
  data,
  img,
  deploy,
  repositorio,
  frontend,
  bibliotecas,
  ferramentas
}) {
  return (
    <>
      <div className="">
        <div className="flex flex-row gap-4 p-4">

          <a href={botaoVolta} className="flex flex-row gap-4 p-2 lg:ml-2 xl:ml-8 border-2 rounded-xl text-slate-600 hover:bg-lime-500 transition duration-500">
            <ArrowLeft />

          </a>

          <p className="font-bold text-3xl text-white">{title}</p>
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <p className="text-lg font-normal text-slate-400">{descricao}</p>
          <div>
            <p className="mt-6 font-normal text-lg text-white">{data}</p>
          </div>
          <div className="mt-6">
            <img src={img} alt={`Projeto ${title}`} className="rounded-xl" />
          </div>
          <div className="bg-black rounded-xl mt-6">
            <div className="text-white p-4">
              <div className="items-center justify-center flex flex-col">
                <p className="font-bold mb-2">Deploy e Repositório</p>
                <p>Visite o site no ar e o repositório no Github</p>
              </div>
              <div className="flex flex-row items-center justify-center mt-6 gap-10">
                <div className="">
                  <a
                    href={deploy}
                    target="_blank"
                    className="flex gap-2 border-2 p-2 rounded-xl hover:bg-lime-500 transition duration-500 group:"
                  >
                    <Rocket />
                    <button className="text-white group-hover:text-black">Site</button>
                  </a>
                </div>
                <div>
                  <a
                    href={repositorio}
                    target="_blank"
                    className="flex gap-2 border-2 p-2 rounded-xl hover:bg-lime-500 transition duration-500"
                  >
                    <Archive />
                    <button>Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-xl mt-6">
            <div className="text-slate-400 flex flex-col p-4">
              <p className="font-bold mb-4">Tecnologias utilizadas</p>
              <p>Front-end: {frontend}</p>
              <p>Bibliotecas: {bibliotecas}</p>
              <p>Ferramentas: {ferramentas}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjetosIntra;
