import slide1 from "../../../assets/banner3.jpeg";
import slide2 from "../../../assets/banner5.jpeg";
import slide3 from "../../../assets/ban1.jpg";
import slide4 from "../../../assets/ban2.jpeg";
import slide5 from "../../../assets/banner3.jpeg";

const Category = () => {
  return (
    <section className="pb-28">
      <div className="carousel carousel-center bg-indigo-400 max-w-full p-4 space-x-4 rounded-box">
        <div className="carousel-item">
          <img src={slide1} className="rounded-box h-32 w-60" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="rounded-box h-32 w-60" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="rounded-box h-32 w-60" />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="rounded-box h-32 w-60" />
        </div>
        <div className="carousel-item">
          <img src={slide5} className="rounded-box h-32 w-60" />
        </div>
      </div>
    </section>
  );
};

export default Category;
