import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">CONTACT US</h3>
          <p className="mb-1">CV. AURORA LUXE</p>
          <p className="mb-1">Phone: +6281234567890</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Jl. Setra Murni Atas I No.20, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152
          </a>
          <div className="flex space-x-4 mt-4 text-2xl text-[#2F2FA2]">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        <div className="ml-50">
          <h3 className="font-semibold text-lg mb-2 ">FOOTER MENU</h3>
          <ul>
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">Return & Exchange</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-600">
        © AURORA LUXE INDONESIA <br />
        Powered by Shopify
      </div>
    </footer>
  );
}
