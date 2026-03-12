function NextPage({ NameNextPage, Descricao, Botao, Icon }) {
    return (
        <>
            <div className="bg-lime-300 mt-10 flex flex-col items-start w-[90%] mx-auto rounded-xl">
                <div className="flex flex-row p-2 w-[90%]">
                    <h1>{NameNextPage}</h1>
                    <p>{Icon}</p>
                </div>
                <div>
                    <p>{Descricao}</p>
                </div>
            </div>
        </>
    )
}

export default NextPage