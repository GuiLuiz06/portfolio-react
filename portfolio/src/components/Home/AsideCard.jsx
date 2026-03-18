import guilherme from "../../assets/img/Guilherme.jpeg"
import Contact from "../contatos/Contats"
function AsideCard() {
    return (
        <>
            <div className="bg-black flex flex-col ml-10 p-4 w-[400px] h-[640px] rounded-md">
                <div className="flex flex-row items-start">
                    <div className="">
                        <img src={guilherme} alt="Foto de Guilherme" className="w-48 border-4 border-lime-400 rounded-xl" />
                    </div>
                    <div className="flex flex-col items-start w-full ml-4">
                        <p className="text-white font-bold text-2xl">Guilherme Luiz</p>
                        <div className="text-black bg-lime-500 rounded-md p-2 font-bold flex flex-col w-full mt-2">
                            <p>Desenvolvedor</p>
                            <p className="font-semibold">Front-End</p>
                        </div>
                    </div>
                </div>
                <div className="h-0.5 bg-white w-full mt-6"></div>
                <div className="flex flex-col">
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default AsideCard