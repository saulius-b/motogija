import { motion } from "framer-motion";
import mobileImage from "../svg_icons/standart.jpeg";
import desktopImage from "../svg_icons/desktop.jpeg";

export function Home() {
  return (
    <motion.div
      className="self-center text-lg font-extra-bold font-poppins bg-black h-full w-full flex flex-col relative "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img className="hidden sm:block opacity-80" src={desktopImage} alt={"Motogija"}></img>
      <div className="hidden sm:flex justify-between   text-white py-5 bg-black absolute w-full font-poppins bg-opacity-80">
        <div>
          <div className="pl-4">
            <div className="text-3xl pb-4">Motogija</div>
            <div>Automobilių ir motociklų servisas</div>
          </div>
          <div className="flex text-xs gap-2 pl-4">
            <div className="py-2 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
              Techninis aptarnavimas
            </div>
            <div className="py-2 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
              Padangų montavimas ir balansavimas
            </div>
            <div className="py-2 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
              Paruošimas techninei apžiūrai
            </div>
            <div className="py-2 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
              Patikra prieš pirkimą
            </div>
            <div className="py-2 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
              Kiti remonto darbai
            </div>
          </div>
        </div>
        <div className="text-right pr-4 text-sm">
          <div className="p-1 px-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
            <a
              href="https://www.google.lt/maps/place/Motogija/@54.6699486,25.2633328,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd95d8e72f1e81:0x914de274704fbcdd!8m2!3d54.6699486!4d25.2655215"
              target={"_blank"}
              rel="noreferrer"
            >
              Vytenio g. 61, Vilnius
            </a>
          </div>
          <div className="p-1 rounded hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
            <a href="tel:+37063629896">+37063629896</a>
          </div>
        </div>
      </div>

      <div className="text-white py-5 bg-black absolute w-full font-poppins bg-opacity-80 sm:hidden">
        <div className="text-center text-2xl sm:text-right sm:pr-4">Motogija</div>
      </div>

      <div className="text-white text-center text-sm  p-2 bg-black absolute left-2  top-24  h-10 w-3/4 rounded bg-opacity-60 sm:hidden">
        Automobilių ir motociklų servisas
      </div>

      <img className="h-full m-auto sm:hidden" src={mobileImage} alt={"Motogija"}></img>
      <div className="py-2 sm:hidden">
        <ul className="text-white text-xxs font-poppins text-center">
          <div>Techninis aptarnavimas</div>
          <div>Padangų montavimas ir balansavimas</div>
          <div>Paruošimas techninei apžiūrai</div>
          <div>Patikra prieš pirkimą</div>
          <div>Kiti remonto darbai</div>
        </ul>
      </div>
    </motion.div>
  );
}
