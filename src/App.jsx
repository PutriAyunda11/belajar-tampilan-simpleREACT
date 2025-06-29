import { useState } from "react";
import Header from "./components/Header";
import Pandora from "./components/Pandora";
import Data from "./components/Data";
import Footer from "./components/Footer";

const MainApp = () => {
  const [jumlahTrolli, setJumlahTrolli] = useState(0); 

  const tambahKeTrolli = (jumlah) => {
    setJumlahTrolli(prev => prev + jumlah);
  };

  return (
    <>
      <Header jumlahTrolli={jumlahTrolli} />
      <Pandora tambahKeTrolli={tambahKeTrolli} dataPandora={Data} />
      <Footer />
    </>
  );
};

export default MainApp;
