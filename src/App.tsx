import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import { CarService } from "./components/CarService";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";
import { BikeService } from "./components/BikeService";

const location = new ReactLocation();

function App() {
  return (
    <div className="">
      <AnimatePresence mode={"wait"}>
        <Router
          location={location}
          routes={[
            { path: "/motogija", element: <Home></Home> },
            { path: "/automobiliai", element: <CarService></CarService> },
            { path: "/motociklai", element: <BikeService></BikeService> },
            { path: "/kontaktai", element: <Contacts></Contacts> },
          ]}
        >
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
