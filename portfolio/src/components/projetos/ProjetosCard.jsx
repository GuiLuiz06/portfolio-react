function ProjetoCard({ imagem, titulo, descricao, deploy, codigo }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col p-2 w-[90%] mt-4 border-4 border-lime-400">

        <div className="rounded-md w-full">
          <img src={imagem} alt={titulo} />
        </div>

        <div className="bg-black w-full p-2 rounded-md mt-4">
          <p className="text-white font-bold">{titulo}</p>
        </div>

        <div className="bg-black w-full p-2 rounded-md mt-2 mb-2">
          <p className="text-white font-semibold">{descricao}</p>
        </div>

        <button
          className="bg-lime-400 text-black font-bold py-2 px-4 rounded-md"
          onClick={() => window.open(deploy, "_blank")}
        >
          Deploy
        </button>

        <button
          className="bg-lime-400 text-black font-bold py-2 px-4 rounded-md mt-2"
          onClick={() => window.open(codigo, "_blank")}
        >
          Código Fonte
        </button>

      </div>
    </div>
  );
}

export default ProjetoCard;