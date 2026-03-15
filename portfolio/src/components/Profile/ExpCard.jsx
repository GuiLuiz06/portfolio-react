function CardExp({ nomeEmpresa, cargo, tempoCargo, descricao }) {
    return (
        <>
                <div className="text-white w-[90%] mx-auto font-bold">
                    <p className="font-semibold text-zinc-400">{nomeEmpresa}</p>
                    <p className="font-semibold text-zinc-400">{cargo}</p>
                    <p className="font-semibold mb-2 text-zinc-400">{tempoCargo}</p>
                    <p className="font-light mb-2 text-white">{descricao}</p>
                </div>
        </>
    )
}

export default CardExp