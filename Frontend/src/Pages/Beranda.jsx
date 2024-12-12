import Carousel from "../components/Carousel";
import SlideCarousel from "../components/SlideCarousel";
import StrukturStaff from "../components/StrukturStaff";
import Tentang from "../components/Tentang";

const Beranda = () => {
  return (
    <>
      {/* <Carousel /> */}
      <SlideCarousel />
      <Tentang />
      <StrukturStaff />
    </>
  );
};

export default Beranda;
