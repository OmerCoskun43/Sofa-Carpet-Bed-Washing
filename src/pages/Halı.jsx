import { Carousel } from "@material-tailwind/react";
import carpet from "../assets/carpet-1.jpg";
import carpet2 from "../assets/carpet-2.jpg";
import carpet3 from "../assets/carpet-3.jpg";

const Halı = () => {
  return (
    <div className="bg-gray-300 px-5 md:px-10 py-6 text-justify pb-5">
      <h1 className="font-bold  text-xl md:text-3xl text-red-600 pb-5">
        Halı Yıkama
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row gap-3">
        <Carousel className="rounded-xl md:w-[50%] h-full ">
          <img src={carpet} className="h-[25rem] w-full object-cover" />
          <img src={carpet2} className="h-[25rem] w-full object-cover" />
          <img
            src={carpet3}
            alt="image 3"
            className="h-[25rem] w-full object-cover"
          />
        </Carousel>

        <div className="md:w-[49%]">
          <p className="font-bold ">
            El dokuma halı yıkama; yün halı yıkama, ipek halı yıkama, hereke
            halı yıkama, afgan halı yıkama, iran halı yıkama, antik yörük halı
            yıkama, bünyan halı yıkama, milas halı yıkama, patchwork halı
            yıkama, vintege halı yıkama, pelüş halı yıkama deri halı yıkama;
            keçi postu, dana postu, koyun postu, vs gibi halılarınızı itinayla
            yerinde yıkıyoruz. Halılarınızın dokusuna uygun tamamen organik
            ilaçlarla evlerinizde yerinde serili halde halılarınızı yıkıyoruz
            Halılarınızı itinalı ve titizlik içerisinde yıkamaktayız. Yerinde
            yıkadığımız halıların alt kısmı ıslanmamaktadır; yani parkelerinize
            her hangi bir su teması olmamaktadır. Yıkanan halılarınız yüksek
            vakumlu makinelerimiz sayesinde 3-5 saat içerisinde kurumaktadır.
            <span className="font-bold text-red-700"> Lüx Cleaning </span>
            temizlik şirketi olarak; İstanbul geneline profesyonel ekip ve
            ekipmanlarımız ile ücretsiz servis ağımız bulunmaktadır Karcher
            marka Profesyonel makinelerle siz değerli müşterilerimize hizmet
            verkteyiz Her zaman önceliğimiz müşteri memnuniyetidir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Halı;
