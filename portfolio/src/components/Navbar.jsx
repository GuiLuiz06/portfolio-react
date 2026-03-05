import { Link } from "react-router-dom"


function nav() {
    return (
        <>
        <nav class="flex justify-center gap-20 bg-black text-white p-4 font-semibold">
            <Link to="/">Início</Link>
            <Link to="/Projetos">Projetos</Link>
            <Link to="/stacks">Stack's</Link>
            <Link to="/sobremim">Sobre mim</Link>
            <Link to="/contato">Contato</Link>
        </nav>
        </>
    )
}

export default nav