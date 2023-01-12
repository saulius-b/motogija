import FacebookLogo from "../svg_icons/facebook.svg";
import GmailLogo from "../svg_icons/gmail.svg";
import Pin from "../svg_icons/pinV4.svg";
import PhoneLogo from "../svg_icons/phone.svg";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div>
      <footer className="px-4 py-12 sm:px-6 border-t-2 border-gray-100 text-gray-500">
        <div className="flex justify-center">
          <span className="pb-8 text-gray-800 font-bold text-xl font-poppins">Motogija</span>
        </div>

        <div className="flex justify-center gap-4 ">
          <a href="https://www.facebook.com/profile.php?id=100085035469127" target={"_blank"} rel="noreferrer">
            <motion.img whileHover={{ scale: 1.1 }} className="h-8 w-8 " src={FacebookLogo} alt="Facebook Logo" />
          </a>
          <a href="mailto:motogijaservisas@gmail.com">
            <motion.img whileHover={{ scale: 1.1 }} className="h-8 w-8" src={GmailLogo} alt="Gmail Logo" />
          </a>
          <a href="tel:+37063629896">
            <motion.img whileHover={{ scale: 1.1 }} className="h-8 w-8" src={PhoneLogo} alt="Phone Logo" />
          </a>

          <a
            href="https://www.google.lt/maps/place/Motogija/@54.6699486,25.2633328,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd95d8e72f1e81:0x914de274704fbcdd!8m2!3d54.6699486!4d25.2655215"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.img whileHover={{ scale: 1.1 }} className="h-8 w-8" src={Pin} alt="Gmail Logo" />
          </a>
        </div>

        <div className="flex justify-center mt-8 text-xs text-gray-400 font-poppins">by SauliusB, 2022</div>
      </footer>
    </div>
  );
}
