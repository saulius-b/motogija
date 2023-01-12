import { motion } from "framer-motion";
import PhoneLogo from "../svg_icons/phone.svg";

export function CarService() {
  const carServices = [
    {
      jobName: "Alyvos keitimas",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "10 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Kompiuterinė diagnostika",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "20 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Važiuoklės remontas",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "30 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Paruošimas prieš techninę apžiūrą",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "40 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Variklio remontas",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "50 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Patikra prieš pirkimą",
      jobDescription:
        "Nunc imperdiet malesuada mi, non dignissim massa maximus ac. Donec rhoncus arcu nec varius luctus. Nulla et purus facilisis, laoreet turpis at, viverra arcu.",
      price: "60 Eur",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Individualūs užsakymai",
      jobDescription: "Galimi ir kiti čia neįvardinti darbai",
      price: "sutartinė",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Individualūs užsakymai",
      jobDescription: "Galimi ir kiti čia neįvardinti darbai",
      price: "sutartinė",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
    {
      jobName: "Individualūs užsakymai",
      jobDescription: "Galimi ir kiti čia neįvardinti darbai",
      price: "sutartinė",
      logo: <img className="h-6 w-6" src={PhoneLogo} alt=" Logo" />,
    },
  ];

  const serviceList = carServices.map((service, index) => {
    return (
      <div
        key={index}
        className="text-xs rounded px-6 py-4 bg-white flex gap-6 flex-col font-light drop-shadow-md my-2 transition hover:bg-slate-100 hover:duration-500 ease-in-out"
      >
        <div className="text-lg bg-indigo-600 text-white rounded border pl-2 text-center font-poppins">
          {service.jobName}
        </div>

        <div className="flex justify-between">
          <div className="bg-black text-white rounded text-center px-2 py-1">
            Preliminari kaina nuo: {service.price}
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="pr-2">
            <a href="tel:+37063629896">{service.logo}</a>
          </motion.div>
        </div>
        <div className="border rounded p-2 text-gray-700">{service.jobDescription}</div>
      </div>
    );
  });
  return (
    <motion.div
      className="px-4 py-6 sm:px-6 bg-gray-100 drop-shadow-xl lg:h-full mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black mb-4 px-6 py-2 rounded text-lg font-bold text-center drop-shadow-md">
        <span className="font-poppins font-bold text-white text-xl">Automobilių remonto darbai</span>
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">{serviceList}</div>
    </motion.div>
  );
}
