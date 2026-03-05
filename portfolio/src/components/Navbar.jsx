import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
        <nav className="flex flex-wrap justify-center gap-20 bg-black text-white p-4 font-semibold">
            <Link to="/">Início</Link>
            <Link to="/Projetos">Projetos</Link>
            <Link to="/MyStacks">Stack's</Link>
            <Link to="/Sobremim">Sobre mim</Link>
        </nav>
        </>
    )
}

export default Navbar