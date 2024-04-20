import { Carousel, Typography, Button } from "@material-tailwind/react";
import koltuk from "../assets/koltukyikama.jpg";
import hali from "../assets/haliyikama.jpg";
import yatak from "../assets/yatakyikama1.jpg";
import { useNavigate } from "react-router-dom";

const Carousell = () => {
  const navigate = useNavigate();
  return (
    <Carousel className=" h-[calc(100vh-96px)]">
      <div className="relative h-full w-full">
        <img src={koltuk} className="h-full w-full " />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl "
            >
              Koltuk Yıkama
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Alanında uzman ekibimiz, sizin ve ailenizin sağlığı için koltuk ve
              yataklarınızdaki mayt, akar ve bakterileri yüksek buharlı yıkama
              ile doğal ürünler kullanarak derinlemesine temizlemektedir.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                onClick={() => navigate("/koltuk")}
                size="lg"
                color="white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                color="white"
                variant="text"
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={hali} alt="image 2" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Halı Yıkama
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Birinci sınıf makinelarımız ile halılarınızı ilk günkü
              temizliğinde yıkıyor ve hızlı bir şekilde teslim ediyoruz.
            </Typography>
            <div className="flex gap-2">
              <Button onClick={() => navigate("/hali")} size="lg" color="white">
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                color="white"
                variant="text"
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={yatak} alt="image 3" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/5">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Yatak Yıkama
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Yatak yıkama işlemi; ilaçlama, fırça ile köpükleme, buharlı
              dezenfekte ve fırçalama, son olarak temiz duru su gelene kadar
              vakumlama aşamalarından oluşmaktadır. Yataklarınız yıkandıktan
              sonra 7-8 saat içinde kurumaktadır.
            </Typography>
            <div className="flex gap-2">
              <Button
                onClick={() => navigate("/yatak")}
                size="lg"
                color="white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                color="white"
                variant="text"
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousell;
