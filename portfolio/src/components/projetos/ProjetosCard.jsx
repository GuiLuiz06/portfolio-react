function ProjetoCard({ imagem, titulo, descricao, deploy, codigo }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col p-2 w-[90%] mt-4 border-4 border-lime-400">

        <div className="rounded-md w-full">
          <img src={imagem} alt={titulo} />
        </div>

        <div className="bg-black w-full p-2 rounded-md">
          <p className="text-white font-bold">{titulo}</p>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjetoCard;