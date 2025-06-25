import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 text-center">
    <div className="flex justify-center space-x-6 text-xl">
      <a href="#" className="hover:text-blue-400" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="#" className="hover:text-blue-400" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-blue-400" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
    <p className="mt-4 text-sm md:text-base">Contact: support@socialcause.org | +234-800-000-0000</p>
  </footer>
);

export default Footer;
