import { motion } from "framer-motion";
import "../map.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export function Contacts() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <motion.div
      className="px-4 py-6 sm:px-6 bg-gray-100 drop-shadow-xl lg:h-full mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black mb-4 px-6 py-2 rounded text-lg font-bold text-center drop-shadow-md">
        <span className="font-poppins font-bold text-white text-xl">Kontaktai</span>
      </div>
      <div className="text-xs rounded px-6 py-4 bg-white flex gap-6 flex-col drop-shadow-md my-2 font-poppins">
        <div className="md:flex">
          <div className="md:w-1/2 mb-4">
            <div>
              <div className="bg-black text-white rounded text-center px-2 py-1 mb-4 md:w-1/2 font-poppins ">
                UAB "Motogija"
              </div>

              <div className="md:w-1/2 text-gray-700">
                <div className="border rounded p-2 mb-1 hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
                  Adresas:{" "}
                  <a
                    href="https://www.google.lt/maps/place/Motogija/@54.6699486,25.2633328,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd95d8e72f1e81:0x914de274704fbcdd!8m2!3d54.6699486!4d25.2655215"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Vytenio g. 61, Vilnius
                  </a>
                </div>
                <div className="border rounded p-2 mb-1 hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
                  Telefonas: <a href="tel:+37063629896">+37063629896</a>
                </div>
                <div className="border rounded p-2 mb-1 hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
                  El. paštas:
                  <a href="mailto:motogijaservisas@gmail.com"> motogijaservisas@gmail.com</a>
                </div>
                <div className="border rounded p-2 mb-1 hover:bg-indigo-600 hover:text-white transition hover:duration-300 ease-in-out">
                  Įmonės kodas: 305991020
                </div>
              </div>
            </div>

            <div className="hidden md:block md:border md:rounded md:p-2 md:mt-4 md:text-xs text-gray-700">
              Atliekame automobilių ir motociklų remonto darbus Vilniuje. Kokybiškai ir profesonaliai aptarnaujame
              klientus, atliekame remonto ir priežiūros darbus, aptarnavimus. Konsultuojame ir patariame renkantis dalis
              pagal automobilio modelį ir kliento pageidavimus. Suderiname su jumis darbus, jų atlikimo terminą bei
              kainą. Naudojame kokybiškas dalis. Ieškome sprendimų, kurie būtų priimtini užtikrinant darbų kokybę ir
              klientų lūkesčius.
            </div>
          </div>
          <Map />
        </div>
      </div>
    </motion.div>
  );
}

function Map() {
  const location = { lat: 54.67001, lng: 25.26555 };
  return (
    <GoogleMap zoom={13} center={location} mapContainerClassName="map-container">
      <MarkerF position={location} />
    </GoogleMap>
  );
}
