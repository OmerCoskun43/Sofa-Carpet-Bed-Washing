import Carousell from "../components/Carousel";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <div className="relative">
      <Carousell />
      <a href="https://wa.me/905433533310" target="_blank">
        {" "}
        <IoLogoWhatsapp className="fixed md:top-28 right-10 text-[#65e44c]  cursor-pointer hover:text-[#7FFF00] text-7xl" />
      </a>
    </div>
  );
};

export default Home;
