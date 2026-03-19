import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import ContactButton from "./ContactButton";
import ProfileCard from "../Profile/MyCard";
import guilherme from "../../assets/img/Guilherme.jpeg";
import AsideCard from "../Home/AsideCard";


function Contact() {
  return (
    <>
      <div className="grid lg:grid-cols-[600px_1fr] lg:mt-20 ">
        <div className="hidden lg:block">
          <div className="lg:fixed top-20">
            <AsideCard/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="lg:hidden">
            <ProfileCard
              imagem={guilherme}
              nome={"Guilherme Luiz"}
              cargo1={"Desenvolvedor"}
              cargo2={"Front-End"}
            />
          </div>
          <div className="">
            <div className="flex flex-col ml-6 gap-4 lg:ml-0">
              <div className="flex w-[90%]">
                <p className="text-white font-bold text-2xl mt-4">Contatos</p>
              </div>
              <div className="flex justify-start">
                <ContactButton
                  nome={"Linkedin"}
                  Icon={Linkedin}
                  link={"https://www.linkedin.com/in/guiilhermeluiz"}
                  Icontwo={ExternalLink}
                />
              </div>

              <ContactButton
                nome={"Github"}
                Icon={Github}
                link={"https://github.com/GuiLuiz06"}
                Icontwo={ExternalLink}
              />

              <ContactButton
                nome={"Email"}
                Icon={Mail}
                link={"mailto:guilhermeluiz1030@gmail.com"}
                Icontwo={ExternalLink}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
