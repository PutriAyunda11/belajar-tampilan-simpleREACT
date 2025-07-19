import "@fontsource/raleway";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Header({ jumlahTrolli, cari, sortir }) {
  return (
    <header className="w-full bg-white shadow-md font-raleway">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-3xl text-[#2F2FA2] font-raleway">Aurora Luxe</div>
        <div className="flex-1 mx-12 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full pl-10 pr-6 py-1 border-sm rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F2FA2]"
            onChange={(e) => cari(e.target.value)}
          />
        </div>
        <select
          onChange={(e) => sortir(e.target.value)}
          className="mr-4 py-1 px-3 border rounded-full text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2F2FA2]"
        >
          <option value="">Sorting</option>
          <option value="nama-asc">Nama A-Z</option>
          <option value="nama-desc">Nama Z-A</option>
          <option value="harga-asc">Harga Terendah</option>
          <option value="harga-desc">Harga Tertinggi</option>
        </select>

        <div className="flex items-center space-x-6">
          <button className="flex text-sm items-center px-4 py-1 text-[#2F2FA2] border border-[#2F2FA2] hover:bg-[#2F2FA2] hover:text-white rounded-full transition cursor-pointer">
            <AiOutlineUser className="mr-2 text-lg" />
            Masuk / Daftar
          </button>
          <button className="relative">
            <AiOutlineShoppingCart className="text-[#2F2FA2] text-3xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {jumlahTrolli}
            </span>
          </button>
        </div>
      </div>

      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center space-x-15 py-3 text-sm font-bold text-gray-600">
          {["Pandora", "Cartier", "Tiffany & Co", "Bvlgari"].map((label) => (
            <a
              key={label}
              href="#"
              className={`relative group transition ${
                label === "Pandora" ? "text-[#2F2FA2]" : ""
              }`}
            >
              <span
                className={`underline-offset-4 decoration-[#2F2FA2] ${
                  label === "Pandora" ? "underline" : "group-hover:underline"
                }`}
              >
                {label}
              </span>
            </a>
          ))}{" "}
        </div>
      </nav>
    </header>
  );
}
