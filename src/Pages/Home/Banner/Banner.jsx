import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/ban1.jpg";
import img2 from "../../../assets/ban2.jpeg";
import img3 from "../../../assets/bannn2.jpg";
import img4 from "../../../assets/bann3.jpg";
import img5 from "../../../assets/bann5.jpg";
import img6 from "../../../assets/banner3.jpeg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img className="w-100 h-75" src={img1} />
      </div>
      <div>
        <img className="w-100 h-75" src={img2} />
      </div>
      <div>
        <img className="w-100 h-75" src={img3} />
      </div>
      <div>
        <img className="w-100 h-100" src={img4} />
      </div>
      <div>
        <img className="w-100 h-100" src={img5} />
      </div>
      <div>
        <img className="w-100 h-75" src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
