import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black flex justify-between h-[6rem]  items-center p-8">
      <div className="font-bold animate-pulse text-[#7FFF00]">
        <p>
          Copyright <sup>© </sup> Cskn Design
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <a
          href="https://www.instagram.com/koltuktemizleme43pro?igsh=dGpueXVrbGZlcnR6"
          target="_blank"
        >
          <FaInstagram className=" text-blue-600 cursor-pointer  hover:text-[#7FFF00] text-3xl" />
        </a>
        <a href="https://www.facebook.com/yusuf.esenturk.7/" target="_blank">
          <FaFacebook className="   text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
        </a>
        <a href="https://wa.me/905433533310" target="_blank">
          {" "}
          <FaWhatsapp className="  text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
        </a>
      </div>{" "}
    </div>
  );
};

export default Footer;
