import {
  AiOutlineInfoCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Pandora = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [dropDown, setDropDown] = useState(null);
  const [jumlahAdd, setJumlahAdd] = useState(1);

  const tombolFav = (id) => {
    setFavorite((cekId) =>
      cekId.includes(id)
        ? cekId.filter((favId) => favId !== id)
        : [...cekId, id]
    );
  };
  const tombolDropDown = (id) => {
    setDropDown(dropDown === id ? null : id);
  };
  const tambahjumlahProduk = () => {
    setJumlahAdd(jumlahAdd + 1);
  };
  const kurangjumlahProduk = () => {
    setJumlahAdd((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const coment =()=>{
    const inputComent = prompt(`Masukkan komentar Anda :`);
    if(inputComent){
      alert(`Berhasil menambahkan komentar!`);
    }else{
      alert(`Anda tidak menambahkan komentar apapun`);
    }

  }
  useEffect(() => {
    setJumlahAdd(1);
  }, [dropDown]);


  return (
    <div className="max-w-auto mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {props.dataPandora.map((content) => (
          <div
            key={content.id}
            className="bg-white shadow transition flex flex-col"
          >
            <img
              src={content.foto}
              alt={content.nama}
              className="w-full h-94 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-sm font-semibold text-center mb-4">
                {content.nama}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => tombolDropDown(content.id)}
                  className="flex items-center gap-2 px-6 py-1.5 bg-white text-[#2F2FA2] font-semibold hover:bg-[#2F2FA2] hover:text-white shadow-sm rounded-md transition"
                >
                  <AiOutlineInfoCircle className="text-lg" />
                  Information
                </button>

                <button
                  onClick={() => tombolFav(content.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  {favorite.includes(content.id) ? (
                    <AiFillHeart className="text-2xl text-red-500" />
                  ) : (
                    <AiOutlineHeart className="text-2xl text-[#2F2FA2]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {dropDown && (
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
          <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md z-50 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setDropDown(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
            >
              X
            </button>

            {(() => {
              const item = props.dataPandora.find((p) => p.id === dropDown);
              return (
                <>
                  <img
                    src={item.foto}
                    alt={item.nama}
                    className="w-100 h-90 object-cover rounded-md mb-6"
                  />
                  <h2 className="text-lg font-bold mb-2">{item.nama}</h2>
                  <p className="text-sm mb-1 ">
                    <strong>Harga:</strong>{" "}
                    <strong className="text-red-500"> Rp {item.harga}</strong>
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Kategori:</strong> {item.kategori}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Ukuran:</strong> {item.ukuran}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => kurangjumlahProduk()}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{jumlahAdd}</span>
                    <button
                      onClick={() => tambahjumlahProduk()}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg font-bold"
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        props.tambahKeTrolli(jumlahAdd);
                        setJumlahAdd(jumlahAdd);
                        alert("Produk berhasil ditambahkan ke trolli!");
                        setDropDown(null);
                      }}
                      className="flex-1 bg-[#2F2FA2] text-white py-2 rounded hover:bg-[#1e1e84] font-semibold"
                    >
                      Add to Trolli!
                    </button>
                    <button onClick={()=>coment()} className="p-2 rounded-full hover:bg-gray-100 transition text-[#2F2FA2] text-xl">
                      <FaRegCommentDots size={29}/>
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pandora;
