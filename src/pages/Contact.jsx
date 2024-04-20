import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-300 h-[calc(100vh-12.25rem)]  text-justify">
      <h1 className="font-bold p-4  text-xl md:text-3xl text-red-600">
        İletişim Bilgileri
      </h1>

      <div
        style={{ boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.5)" }}
        className=" w-full  mt-20  bg-gray-400 p-5 mx-auto"
      >
        <div className=" flex flex-col w-[70%] md:w-[30%] mx-auto gap-2">
          <div className="flex gap-2 justify-between items-center">
            <span className="font-bold text-black md:text-2xl">
              Instagram Hesabımız{" "}
            </span>
            <a
              href="https://www.instagram.com/koltuktemizleme43pro?igsh=dGpueXVrbGZlcnR6"
              target="_blank"
            >
              <FaInstagram className=" text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-black md:text-2xl">
              Facebook Hesabımız{" "}
            </span>
            <a
              href="https://www.facebook.com/yusuf.esenturk.7/"
              target="_blank"
            >
              <FaFacebook className="   text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
            </a>
          </div>
          <div className="flex justify-between ">
            <span className="font-bold text-black md:text-2xl">
              WhatsApp Hesabımız{" "}
            </span>
            <a href="https://wa.me/905433533310" target="_blank">
              {" "}
              <FaWhatsapp className="  text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
            </a>
          </div>
          <div className="flex justify-between ">
            <span className="font-bold text-black md:text-2xl">
              {" "}
              Telefon: 543 353 3310
            </span>
            <FaPhoneAlt className="  text-blue-600 cursor-pointer hover:text-[#7FFF00] text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
