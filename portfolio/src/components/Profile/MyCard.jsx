function ProfileCard({ imagem, nome, cargo1, cargo2 }) {
  return (
    <div className="flex flex-row items-center bg-black w-[90%] ml-4 mt-4 rounded-xl">
      
      <div className="border-4 border-lime-400 w-24 mt-4 ml-4 rounded-md mb-4">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="w-[90%]">
        <p className="whitespace-nowrap ml-4 mb-2 text-xl text-white font-bold">
          {nome}
        </p>

        <div className="bg-lime-400 w-[86%] rounded-md ml-4">
          <div className="ml-2 font-bold">
            <p>{cargo1}</p>
            <p>{cargo2}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileCard;