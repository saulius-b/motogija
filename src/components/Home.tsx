import { motion } from "framer-motion";
import desktopImage from "../svg_icons/desktop.jpeg";

export function Home() {
  const reviews = [
    {
      name: "Evaldas",
      review:
        "Padangų montavimas 10 balų. Keičiant padangas apžiūrėjo automobilį, patikrino važiuoklę už tą pačią kainą. Tikrai rekomenduoju, šaunuolis vaikinas, tikrai dar sugrįšiu, esu labai patenkintas",
    },

    {
      name: "Monika",
      review:
        "Malonus aptarnavimas, kokybiškai atlikti darbai už protingą kainą. Meistras surado ir sutvarkė problemą kurios neišsprendė prieš tai lankyti servisai.",
    },

    {
      name: "Martynas",
      review: "Greitai rado kokia problema su mašina. Suremontavo gerai ir už gerą kainą. 10/10",
    },
  ];

  const review = reviews.map((item) => {
    return (
      <div className="mx-4">
        <p className="text-lg pb-4">{item.name}</p>
        <p className="text-sm">{item.review}</p>
      </div>
    );
  });

  return (
    <div className="min-h-screen">
      <motion.div
        className="bg-black w-full py-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl h-full flex m-auto text-center">
          <div className="text-white font-extra-bold font-poppins m-auto w-1/2">
            <div className="text-5xl pb-1">Motogija</div>
            <div className="text-sm">Automobilių bei motociklų servisas</div>
          </div>
        </div>
      </motion.div>

      <div
        className="grid grid-cols-3 gap-6 max-w-7xl m-auto pt-6 font-poppins text-center"
        style={{ gridTemplateRows: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        <ServiceCard title="Techninis aptarnavimas" image={desktopImage} />
        <ServiceCard title="Padangų montavimas ir balansavimas" image={desktopImage} />
        <ServiceCard title="Paruošimas techninei apžiūrai" image={desktopImage} />
        <ServiceCard title="Patikra prieš pirkimą" image={desktopImage} />
        <ServiceCard title="Kiti remonto darbai" image={desktopImage} />
        <ServiceCard title="Kiti remonto darbai" image={desktopImage} />
      </div>
      <div className="bg-black py-40 px-16 mt-6">
        <p className="text-lg text-white">
          Atliekame automobilių ir motociklų remonto darbus Vilniuje. Kokybiškai ir profesonaliai aptarnaujame klientus,
          atliekame remonto ir priežiūros darbus, aptarnavimus. Konsultuojame ir patariame renkantis dalis pagal
          automobilio modelį ir kliento pageidavimus. Suderiname su jumis darbus, jų atlikimo terminą bei kainą.
          Naudojame kokybiškas dalis. Ieškome sprendimų, kurie būtų priimtini užtikrinant darbų kokybę ir klientų
          lūkesčius.
        </p>
      </div>

      <div className="pb-40 pt-32 px-16 font-poppins text-center">
        {/* <div className="text-xl pb-10">Klientų atsiliepimai</div> */}
        <div className=" grid grid-cols-3 gap-6  ">{review}</div>
      </div>

      <div className="bg-gray-100 py-40 px-16 mt-6">
        <p className="text-lg">
          Atliekame automobilių ir motociklų remonto darbus Vilniuje. Kokybiškai ir profesonaliai aptarnaujame klientus,
          atliekame remonto ir priežiūros darbus, aptarnavimus. Konsultuojame ir patariame renkantis dalis pagal
          automobilio modelį ir kliento pageidavimus. Suderiname su jumis darbus, jų atlikimo terminą bei kainą.
          Naudojame kokybiškas dalis. Ieškome sprendimų, kurie būtų priimtini užtikrinant darbų kokybę ir klientų
          lūkesčius.
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ title, image }: any) {
  return (
    <div>
      <div className="h-50 w-full mb-2">
        <img src={image} alt={"Motogija"} />
      </div>
      <div className="text-sm text-left">{title}</div>
    </div>
  );
}
