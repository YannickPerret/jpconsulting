import react from "react";

import Header from "../components/Header";
import Presentation from '../components/Presentation';
import Service from '../components/Service';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <Service />
      <Contact />
    </div>
  );
}

export default Home;
