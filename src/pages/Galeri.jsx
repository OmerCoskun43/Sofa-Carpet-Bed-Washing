import { Carousel } from "@material-tailwind/react";
import carpet from "../assets/carpet-1.jpg";
import carpet2 from "../assets/carpet-2.jpg";
import carpet3 from "../assets/carpet-3.jpg";
import koltuk from "../assets/koltukyikama.jpg";
import koltuk2 from "../assets/koltuk-2.jpg";
import koltuk3 from "../assets/koltuk-3.jpg";
import bed from "../assets/bed-1.jpg";
import bed2 from "../assets/bed-2.jpg";
import bed3 from "../assets/bed-3.jpg";

const Galeri = () => {
  return (
    <div className="h-[calc(100vh-12rem)]">
      <Carousel>
        <img src={carpet} className="h-full w-full object-cover" />
        <img src={carpet2} className="h-full w-full object-cover" />
        <img
          src={carpet3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img src={koltuk} className="h-full w-full object-cover" />
        <img src={koltuk2} className="h-full w-full object-cover" />
        <img
          src={koltuk3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img src={bed} className="h-full w-full object-cover" />
        <img src={bed2} className="h-full w-full object-cover" />
        <img src={bed3} alt="image 3" className="h-full w-full object-cover" />
      </Carousel>
    </div>
  );
};

export default Galeri;
