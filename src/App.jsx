import { useState } from "react";
import Header from "./components/Header";
import Pandora from "./components/Pandora";
import Data from "./components/Data";

const MainApp = () => {
  const [jumlahTrolli, setJumlahTrolli] = useState(0); // state global keranjang

  const tambahKeTrolli = (jumlah) => {
    setJumlahTrolli(prev => prev + jumlah);
  };

  return (
    <>
      <Header jumlahTrolli={jumlahTrolli} />
      <Pandora tambahKeTrolli={tambahKeTrolli} dataPandora={Data} />
    </>
  );
};

export default MainApp;
