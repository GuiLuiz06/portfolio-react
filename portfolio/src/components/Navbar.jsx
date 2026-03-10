import { Link } from "react-router-dom";

function HomeIcon(props) {
  return (
    <svg
      {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" /></svg>
  )
}

function Navbar() {
  return (
    <>
      <nav className="flex bottom-0 sm:top-0 sm:bottom-auto left-0 w-full z-50 bg-black text-white p-4 justify-center items-center">
        <div className="hidden ml:flex flex-row gap-8">
          <Link
            to="/"
            className="hover:bg-white rounded-xl font-bold text-cyan-300 px-4 py-2 md:px-4 md:py-2 flex items-center justify-center"
          >
            <p>Início</p>
          </Link>
          <Link to="/Projetos" className="hover:bg-white font-bold rounded-xl text-cyan-300 px-3 py-2 md:px-4 md:py-2 flex items-center justify-center">
            <p>Projetos</p>
          </Link>
          <Link to="/MyStacks" className="hover:bg-white font-bold rounded-xl text-cyan-300 px-3 py-2 md:px-4 md:py-2 flex items-center justify-center
        ">
            <p>Stack's</p>
          </Link>
          <Link to="/Sobremim" className="hover:bg-white font-bold rounded-xl text-cyan-300 px-4 py-2 md:px-4 md:py-2 flex items-center justify-center">
            <p>Sobre mim</p>
          </Link>
        </div>
        <div className="gap-6 justify-center w-full bottom-0 left-0 p-4 bg-black z-50">
          <Link
            to="/"
            className="hover:bg-white rounded-full p-2 text-cyan-300 flex items-center justify-center"
            aria-label="Início"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>

        </div>

      </nav >
    </>
  );
}

export default Navbar;
