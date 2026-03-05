import ContactButton from "./contatos/ContactButton"
import Contact from "./contatos/Contats"

function Aside() {
    return (
        <>
            <aside className="py-10">
                <div className="bg-black p-4 w-96 h-[500px] text-white ml-8 rounded-xl">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <img src="../src/assets/img/Guilherme.jpeg" alt="Foto de guilherme"
                                className="w-24 border-4 border-indigo-600 rounded-md" />
                        </div>
                        <div className="mr-6">
                            <p className="flex font-bold text-3xl">Guilherme Luiz</p>
                            <div className="bg-cyan-500 rounded-xl text-indigo-600 mt-2">
                                <p className="ml-2">Desenvolvedor</p>
                                <div className="">
                                    <p className="ml-2">Full-Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start font-bold mt-2 mb-2">
                        <p>Contato</p>
                    </div>
                   <Contact/>
                </div>
            </aside >
        </>
    )
}

export default Aside