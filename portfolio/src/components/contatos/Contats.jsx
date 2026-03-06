import { Linkedin, Github, Mail } from "lucide-react"
import ContactButton from "./ContactButton"

function Contact() {
    return (
        <>
            <div className="flex flex-col gap-3">
                <ContactButton nome={"Linkedin"} link={"https://linkedin.com/in/guiilhermeluiz"} Icon={Linkedin} />
                <ContactButton nome={"GitHub"} link={"https://GitHub.com/GuiLuiz06"} Icon={Github} />
                <ContactButton nome={"Email"} link={"https://linkedin.com/guiilhermeluiz"} Icon={Mail} />
            </div>
        </>
    )
}

export default Contact