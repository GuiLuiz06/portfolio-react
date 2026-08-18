import guilherme from "../../assets/img/Guilherme.jpeg"
import ContactButton from "../contatos/ContactButton"
import { Linkedin, ExternalLink, Github, Mail } from "lucide-react"

function AsideCard() {
    return (
        <>
            <div className="bg-black flex flex-col ml-6 p-4 w-[350px] lg:h-[85vh] xl:h-[85vh] 3xl:h-[90vh] rounded-md">
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
                <p className="text-white mt-2 mb-4 text-2xl font-semibold">Contatos</p>
                <div className="w-full">
                    <div className="mb-4">
                        <ContactButton
                            nome={"Linkedin"}
                            Icon={Linkedin}
                            link={"https://www.linkedin.com/in/guiilhermeluiz"}
                            Icontwo={ExternalLink}
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <ContactButton
                            nome={"Github"}
                            Icon={Github}
                            link={"https://github.com/GuiLuiz06"}
                            Icontwo={ExternalLink}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <ContactButton
                            nome={"Email"}
                            Icon={Mail}
                            link={"mailto:guilhermeluiz1030@gmail.com"}
                            Icontwo={ExternalLink}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideCard