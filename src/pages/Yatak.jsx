import { Carousel } from "@material-tailwind/react";
import bed from "../assets/bed-1.jpg";
import bed2 from "../assets/bed-2.jpg";
import bed3 from "../assets/bed-3.jpg";

const Yatak = () => {
  return (
    <div className="bg-gray-300 px-5 md:px-10 py-6 text-justify pb-5">
      <h1 className="font-bold  text-xl md:text-3xl text-red-600 pb-5">
        Yatak Yıkama
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row gap-3">
        <Carousel className="rounded-xl md:w-[50%] h-full">
          <img src={bed} className="h-[25rem] w-full object-cover" />
          <img src={bed2} className="h-[25rem] w-full object-cover" />
          <img
            src={bed3}
            alt="image 3"
            className="h-[25rem] w-full object-cover"
          />
        </Carousel>

        <div className="md:w-[49%]">
          <p className="indent-8 font-bold font-['times new roman']">
            Hayatımızın 3’te 1’ini yataklarımızda geçirdiğimizi düşünürsek
            uyuduğumuz ve oldukça vakit geçirdiğimiz yatakların hijyeni bir
            hayli önem arz ediyor. Yataklar istisnasız olarak zamanla maytlar ya
            da diğer adıyla toz akarları tarafından konak edilir. Sadece maytlar
            değil yataklarda birçok bakteri, mikrop, böcek, mantar ve spor türü
            bulunur ve insan sağlığa ciddi derece zarar verebilirler. Bu sebeple
            profesyonel bir yatak temizliği insan sağlığı için gereklidir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yatak;
