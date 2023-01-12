import { Link } from "@tanstack/react-location";
import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import MotogijaLogo from "../svg_icons/motogijalogo.jpeg";
import MotoLogo from "../svg_icons/motorcycle.svg";
import CarLogo from "../svg_icons/car.svg";
import Home from "../svg_icons/home.svg";
import Info from "../svg_icons/info.svg";
import { motion } from "framer-motion";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        const clickedElement = event.target as HTMLElement;
        const isInsideNav = clickedElement.closest("nav");

        if (!isInsideNav) {
          setIsNavOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: false });
    document.addEventListener("touchstart", handleClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  const navLinks = (
    <div className="hidden lg:flex lg:gap-6 lg:text-gray-800 lg:font-poppins ">
      <Link to={"/"}>
        <div className="lg:p-2 lg:rounded lg:hover:bg-indigo-600 lg:hover:text-white transition hover:duration-300 ease-in-out ">
          Pradžia
        </div>
      </Link>

      <Link to={"/automobiliai"}>
        <div className="lg:p-2 lg:rounded lg:hover:bg-indigo-600 lg:hover:text-white transition hover:duration-300 ease-in-out">
          Automobilių remontas
        </div>
      </Link>

      <Link to={"/motociklai"}>
        <div className="lg:p-2 lg:rounded lg:hover:bg-indigo-600 lg:hover:text-white transition hover:duration-300 ease-in-out">
          Motociklų remontas
        </div>
      </Link>

      <Link to={"/kontaktai"}>
        <div className="lg:p-2 lg:rounded lg:hover:bg-indigo-600 lg:hover:text-white transition hover:duration-300 ease-in-out">
          Kontaktai
        </div>
      </Link>
    </div>
  );

  const mobileNavLinks = (
    <motion.div
      className="absolute top-18 left-8 z-10 bg-white rounded border w-3/4 p-6 flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        onClick={() => setIsNavOpen(false)}
        to={"/"}
        className="flex justify-between items-center border  p-2 rounded drop-shadow-xl"
      >
        <div> Pradžia</div>
        <div className="rounded-full bg-white h-9 w-9 flex justify-center items-center">
          <img className="h-6 w-6 bg-white" src={Home} alt="Home Logo" />
        </div>
      </Link>

      <Link
        onClick={() => setIsNavOpen(false)}
        to={"/automobiliai"}
        className="flex justify-between items-center border p-2 rounded drop-shadow-xl"
      >
        <div>Automobilių remontas</div>
        <div className="rounded-full bg-white h-9 w-9 flex justify-center items-center">
          <img className="h-6 w-6 bg-white" src={CarLogo} alt="Car Logo" />
        </div>
      </Link>

      <Link
        onClick={() => setIsNavOpen(false)}
        to={"/motociklai"}
        className="flex justify-between items-center border p-2 rounded drop-shadow-xl"
      >
        <div>Motociklų remontas</div>
        <div className="rounded-full bg-white h-9 w-9 flex justify-center items-center">
          <img className="h-6 w-6 bg-white" src={MotoLogo} alt="Motorcycle Logo" />
        </div>
      </Link>

      <Link
        onClick={() => setIsNavOpen(false)}
        to={"/kontaktai"}
        className="flex justify-between items-center border p-2 rounded drop-shadow-xl"
      >
        <div>Kontaktai</div>
        <div className="rounded-full bg-white h-9 w-9 flex justify-center items-center">
          <img className="h-6 w-6 bg-white" src={Info} alt="Information Logo" />
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div>
      <header className="px-4 py-6 sm:px-0 flex justify-between border-b-2 border-gray-100 text-gray-500 gap-2">
        <nav className="lg:flex lg:items-center">
          <div className="lg:hidden" ref={navRef}>
            <Hamburger
              toggled={isNavOpen}
              toggle={setIsNavOpen}
              size={20}
              label={"Show menu"}
              color={"black"}
            ></Hamburger>
          </div>
          {isNavOpen ? mobileNavLinks : null}
          {navLinks}
        </nav>

        <a href="/" className="flex gap-2">
          <span className="sr-only">Motogija</span>

          <img className="h-8 w-auto rounded sm:h-10 self-center" src={MotogijaLogo} alt="" />
        </a>
      </header>
    </div>
  );
}
