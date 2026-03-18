function NextPage({ NameNextPage, Descricao, Botao, Icon, link }) {
  return (
    <>
      <div className="bg-lime-500 mt-10 flex flex-col justify-between items-start ml-4 w-[90%] rounded-xl p-4">
        <div className="flex flex-row w-[90%] font-bold text-xl">
          <h1>{NameNextPage}</h1>
          <div className="ml-2 bg-slate-600 p-1 rounded-xl">
            <Icon ClassName="w-6 h-6" />
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-md ">{Descricao}</p>
        </div>
        <div className="mb-[8%] sm:mb-[3%]">
          <div className="mt-10">
            <a href={link} className="bg-white px-2 py-4 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
              <button>{Botao}</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextPage;
