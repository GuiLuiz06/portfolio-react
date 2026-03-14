import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import ContactButton from "./ContactButton";
import ProfileCard from "../Profile/MyCard";
import guilherme from "../../assets/img/Guilherme.jpeg";

function Contact() {
  return (
    <>
      <div className="flex flex-col">
        <ProfileCard
          imagem={guilherme}
          nome={"Guilherme Luiz"}
          cargo1={"Desenvolvedor"}
          cargo2={"Front-End"}
        />

        <div className="px-4">
          <p className="text-white font-bold text-2xl mb-4 p-2">Contatos</p>

          <div className="flex flex-col gap-4">
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
              link={"https://mailto:seuemail@gmail.com"}
              Icontwo={ExternalLink}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
