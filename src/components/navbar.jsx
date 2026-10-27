
import { useContext } from "react";
import { AppContext } from "../context.js";
import ThemeToggle from "./theme.jsx";
import LangToggle from "./language.jsx";
import LogoImg from "../assets/logo.png";

const Navbar = () => {
    const { t } = useContext(AppContext);

    return (
        <header className="mx-auto flex w-full max-w-[1720px] items-center justify-between rounded-[35px] bg-white px-6 py-6 text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">

            {/* Logo */}
            <a href="#home">
                <img
                    src={LogoImg}
                    width="150"
                    height="75"
                    alt="logo"
                    className="object-contain"
                />
            </a>

            {/* Navigation Links */}
            <ul className="flex items-center gap-9 text-xl">
                <li>
                    <a href="#home" className="transition-colors hover:text-red-600">
                        {t.home}
                    </a>
                </li>

                <li>
                    <a href="#about" className="transition-colors hover:text-red-600">
                        {t.about}
                    </a>
                </li>

                <li>
                    <a href="#services" className="transition-colors hover:text-red-600">
                        {t.services}
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="transition-colors hover:text-red-600">
                        {t.portfolio}
                    </a>
                </li>

                <li>
                    <a href="#contact" className="transition-colors hover:text-red-600">
                        {t.contact}
                    </a>
                </li>
            </ul>

            {/* Dark Mode and Language Buttons */}
            <div className="flex shrink-0 items-center gap-4">
                <ThemeToggle />
                <LangToggle />
            </div>

        </header>
    );
};

export default Navbar;