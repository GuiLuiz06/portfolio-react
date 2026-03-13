import { Link } from "react-router-dom";

function ProjetoCard({ imagem, titulo, descricao, deploy, codigo }) {
  const slug = titulo.toLowerCase().replaceAll(" ", "-");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[90%] mt-4 border-4 border-lime-400 rounded-md">
        <div className="rounded-md">
          <Link to={`/Projetos/${slug}`}>
            <img src={imagem} alt={titulo} />
          </Link>
        </div>

        <div className="">
          <div className="bg-black p-2 rounded-md bottom-0 text-sm text-white w-full">
            <strong className="font-bold">{titulo}</strong>
            <p className="line-clamp-2">{descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetoCard;