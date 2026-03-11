function HomeMain() {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="border-4 border-lime-400 w-32 mt-4 ml-4 rounded-md">
                    <img src="../src/assets/img/Guilherme.jpeg" alt="Foto de Guilherme" className="" />
                </div>
                <div className="">
                    <p className="whitespace-nowrap ml-4 mb-2 text-xl text-white font-bold">Guilherme Luiz</p>
                    <div className="bg-lime-400 w-[90%] rounded-md ml-4">
                        <div className="ml-2 font-bold">
                            <p>Desenvolvedor</p>
                            <p>Front-end</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-4 text-lg mt-6 font-semibold">
                <p className="text-white">Transformando ideias em</p>
                <p className="text-lime-400">Interfaces intuitivas</p>
                <p className="text-white">e experiências envolventes</p>
            </div>
            <div className="h-1 bg-lime-400 w-[90%] ml-4"></div>
        </>
    )
}

export default HomeMain