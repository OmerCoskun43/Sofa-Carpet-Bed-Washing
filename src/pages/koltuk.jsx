import { Carousel } from "@material-tailwind/react";
import koltuk from "../assets/koltukyikama.jpg";
import koltuk2 from "../assets/koltuk-2.jpg";
import koltuk3 from "../assets/koltuk-3.jpg";

/* eslint-disable react/no-unescaped-entities */
const Koltuk = () => {
  return (
    <div className="bg-gray-300 px-5 md:px-10 py-6 text-justify pb-5">
      <h1 className="font-bold  text-xl md:text-3xl text-red-600 pb-5">
        Koltuk Yıkama
      </h1>

      <div className="flex flex-wrap flex-col md:flex-row gap-3">
        <Carousel className="rounded-xl md:w-[50%] h-full">
          <img src={koltuk} className="h-[25rem] w-full object-cover" />
          <img src={koltuk2} className="h-[25rem] w-full object-cover" />
          <img
            src={koltuk3}
            alt="image 3"
            className="h-[25rem] w-full object-cover"
          />
        </Carousel>

        <div className="md:w-[49%]">
          <p className="indent-8 font-bold">
            Kütahya'da en iyi koltuk yıkama hizmetini sunmak için kurulmuştur.
            Alanında uzman ekibimiz, sizin ve ailenizin sağlığı için koltuk ve
            yataklarınızdaki mayt, akar ve bakterileri yüksek buharlı yıkama ile
            doğal ürünler kullanarak derinlemesine temizlemektedir. Ev ve
            işyerlerinde kullandığınız koltuklar zamanla kirlenebilir ve bakteri
            ortamı oluşabilir. Bu nedenle, koltuk temizliği sadece koltukların
            yüzeyindeki kirleri silerek değil, profesyonel makine ve özel
            kimyasallar kullanarak derinlemesine yapılması gerekir. Koltuk silme
            ise, kumaşın altındaki süngerlere kir taşıyan ve hijyenik olmayan
            bir işlemdir. Firmamız, koltuk temizliğinde kullandığı makine ve
            kimyasallar sayesinde koltuklarınızı zarar vermeden derinlemesine
            temizler. Basınçlı buhar makinesi ve vakum makinesi kullanarak,
            kumaşa zarar vermeden ilk günkü hijyen ve görünümüne kavuşmanızı
            sağlar. Koltuk yıkama işlemleri, evler, kamu kurumları, ofisler ve
            diğer alanlarda yapılır. Koltuklar insanların dinlenmelerini
            sağladığı önemli eşyalardır ve oturarak temas ettikleri için her
            zaman temiz olmaları hayati önem taşır. Kütahya koltuk yıkama
            firması olarak, lekeler, toz ve diğer kalıntıları yok etmeye odaklı
            hizmet veriyoruz. Koltuklarınızı en steril halde temizletmek ve daha
            canlı hale getirmek için bizimle iletişime geçebilirsiniz. Koltuk
            Yıkama Neden Önemlidir? Koltuk yıkama, daha sağlıklı bir ortam
            oluşturmak için önemlidir çünkü koltuklar zamanla toz, lekeler ve
            bakterilerle dolabilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Koltuk;
