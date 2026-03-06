import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-center gap-20 bg-black text-white p-6 font-bold">
        <Link
          to="/"
          className="hover:bg-white rounded-xl text-cyan-300 w-24 h-10"
        >
          <div className="flex items-center justify-center h-full">
            <p>Início</p>
          </div>
        </Link>
        <Link to="/Projetos" className="hover:bg-white text-bold rounded-xl text-cyan-300 w-24 h-10">
          <div className="flex items-center justify-center h-full">
            <p>Projetos</p>
          </div>
        </Link>
        <Link to="/MyStacks" className="hover:bg-white text-bold rounded-xl text-cyan-300 w-24 h-10">
          <div className="flex items-center justify-center h-full">
            <p>Stack's</p>
          </div>
        </Link>
        <Link to="/Sobremim" className="hover:bg-white rounded-xl text-cyan-300 w-24 h-10">
          <div className="flex items-center justify-center h-full">
            <p>Sobre mim</p>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
