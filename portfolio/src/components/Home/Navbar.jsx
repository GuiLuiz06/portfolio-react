import { Link, useLocation } from "react-router-dom";
import { Home, Pencil, Layers, User, Send } from "lucide-react";

function Navbar() {

  const location = useLocation();

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-slate-500 lg:hidden">
        <div className="">
          <ul className="flex justify-around px- py-4">
            <li className={`p-2 rounded-xl transition-all duration-300 ${location.pathname === "/" ? "bg-white" : "bg-transparent"
              }`}>
              <Link to="/">
                  <Home/>
              </Link>
            </li>
            <li className={`p-2 rounded-xl transition-all duration-300 ${location.pathname === "/Projetos" ? "bg-white" : "bg-transparent"
              }`}>
              <Link to="/Projetos">
                <Pencil />
              </Link>
            </li>
            <li className={`p-2 rounded-xl transition-all duration-300 ${location.pathname === "/MyStacks" ? "bg-white" : "bg-transparent"
              }`}>
              <Link to="/MyStacks">
                <Layers />
              </Link>
            </li>
            <li className={`p-2 rounded-xl transition-all duration-300 ${location.pathname === "/SobreMim" ? "bg-white" : "bg-transparent"
              }`}>
              <Link to="/SobreMim">
                <User />
              </Link>
            </li>
            <li className={`p-2 rounded-xl transition-all duration-300 ${location.pathname === "/Contatos" ? "bg-white" : "bg-transparent"
              }`}>
              <Link to="/Contatos">
                <Send />
              </Link>
            </li>
          </ul >
        </div>
      </nav >

      <nav className="hidden lg:flex fixed top-0 left-0 w-full bg-black text-white justify-center">
        <div className="flex">
          <ul className="flex justify-around py-4 gap-6">
            <li className={`rounded-xl transition-all duration-300 ${location.pathname === "/" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}>
              <Link to="/" className="block px-4 py-2">
                Home
              </Link>
            </li>

            <li className={`rounded-xl transition-all duration-300 ${location.pathname === "/Projetos" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}>
              <Link to="/Projetos" className="block px-4 py-2">
                Projetos
              </Link>
            </li>

            <li className={`rounded-xl transition-all duration-300 ${location.pathname === "/MyStacks" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}>
              <Link to="/MyStacks" className="block px-4 py-2">
                Stack's
              </Link>
            </li>

            <li className={`rounded-xl transition-all duration-300 ${location.pathname === "/SobreMim" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}>
              <Link to="/SobreMim" className="block px-4 py-2">
                Sobre mim
              </Link>
            </li>

            <li className={`rounded-xl transition-all duration-300 ${location.pathname === "/Contatos" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}>
              <Link to="/Contatos" className="block px-4 py-2">
                Contatos
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
