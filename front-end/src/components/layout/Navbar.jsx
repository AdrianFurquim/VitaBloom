
import { Link, NavLink } from "react-router-dom";

import imageLogo from "../../assets/img/logo_imagem.png";
import writtenLogo from "../../assets/img/logo_escrita.png";
import UsuarioNavbar from "../user/UsuarioNavbar";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Produtos", to: "/catalogo" },
    { label: "Carrinho", to: "/carrinho" },
];

export default function Navbar({ name, logado }) {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#ead8b9] bg-[#FFE9C7]/95 shadow-sm backdrop-blur-md">

            <div className="mx-auto flex min-h-[100px] max-w-[1600px] items-center justify-between gap-8 px-8 py-3 lg:px-12 max-md:flex-col max-md:gap-3 max-md:px-5">

                {/* LOGO */}
                <Link
                    to="/"
                    className="group flex shrink-0 items-center gap-1 transition-opacity duration-300 hover:opacity-85"
                    aria-label="Vita Bloom - Página inicial"
                >
                    <img
                        src={imageLogo}
                        alt="Logo Vita Bloom"
                        className="h-[76px] w-[76px] object-contain transition-transform duration-300 group-hover:scale-105 max-sm:h-14 max-sm:w-14"
                    />

                    <img
                        src={writtenLogo}
                        alt="Vita Bloom"
                        className="w-[220px] object-contain max-sm:w-[175px]"
                    />
                </Link>

                {/* NAVIGATION */}
                <div className="flex items-center justify-end max-md:w-full max-md:justify-center">

                    <ul className="flex items-center gap-3 sm:gap-5 lg:gap-8">

                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === "/"}
                                    className={({ isActive }) =>
                                        `relative inline-flex items-center px-3 py-3 text-sm font-medium transition-colors duration-300 sm:text-base
                                        after:absolute after:bottom-1 after:left-3 after:h-[2px] after:bg-[#bd8126] after:transition-all after:duration-300
                                        ${
                                            isActive
                                                ? "text-[#a56e20] after:w-[calc(100%-24px)]"
                                                : "text-[#49382d] after:w-0 hover:text-[#a56e20] hover:after:w-[calc(100%-24px)]"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}

                        {/* USER */}
                        <li className="ml-2 flex items-center border-l border-[#d9c29e] pl-4 sm:ml-3 sm:pl-6">
                            <Link
                                to="/usuario/login"
                                className="flex items-center rounded-xl px-2 py-2 transition-colors duration-300 hover:bg-[#f6dfb8]"
                            >
                                <UsuarioNavbar
                                    nomeUsu={name}
                                    logado={logado}
                                />
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            {/* RESPONSIVE DECORATIVE LINE */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d6a14f]/60 to-transparent" />

        </nav>
    );
}
