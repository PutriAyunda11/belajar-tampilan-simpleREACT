import { useState } from "react";
import Header from "./components/Header";
import Pandora from "./components/Pandora";
import Data from "./components/Data";
import Footer from "./components/Footer";

const MainApp = () => {
  const [jumlahTrolli, setJumlahTrolli] = useState(0);

  const tambahKeTrolli = (jumlah) => {
    setJumlahTrolli((prev) => prev + jumlah);
  };

  const jewelery = Data;
  const [cariData, setCariData] = useState([]);

  const handleChange = (e) => {
    const keyword = e;
    const filterData = jewelery.filter(
      (dataCari) =>
        dataCari.nama.toLowerCase().includes(keyword.toLowerCase()) ||
        dataCari.kategori.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log("Filtered:", filterData);
    setCariData(filterData);
  };

  const [dataTerurut, setDataTerurut] = useState([]);

  const handleSort = (tipeSort) => {
    let dataUntukSort = cariData.length > 0 ? [...cariData] : [...jewelery];

    switch (tipeSort) {
      case "nama-asc":
        dataUntukSort.sort((a, b) => a.nama.localeCompare(b.nama));
        break;
      case "nama-desc":
        dataUntukSort.sort((a, b) => b.nama.localeCompare(a.nama));
        break;
      case "harga-asc":
        dataUntukSort.sort((a, b) => a.harga - b.harga);
        break;
      case "harga-desc":
        dataUntukSort.sort((a, b) => b.harga - a.harga);
        break;
      default:
        break;
    }

    setDataTerurut(dataUntukSort);
  };

  return (
    <>
      <Header jumlahTrolli={jumlahTrolli} cari={handleChange} sortir={handleSort}/>
      <Pandora
        tambahKeTrolli={tambahKeTrolli}
        dataPandora={
          dataTerurut.length > 0
            ? dataTerurut
            : cariData.length > 0
            ? cariData
            : jewelery
        }
        search={cariData}
      />
      <Footer />
    </>
  );
};

export default MainApp;
