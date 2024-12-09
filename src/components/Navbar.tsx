import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-sm" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-sm" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        <div className="hidden md:block text-center font-medium">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex items-center space-x-4">
          <span className="hidden md:block">Follow Us:</span>
          <FaInstagram className="text-lg hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="text-lg hover:text-gray-400 cursor-pointer" />
          <FaFacebook className="text-lg hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="text-lg hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
