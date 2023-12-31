import banner1 from "../../../assets/assets/images/banner/1.jpg";
import banner2 from "../../../assets/assets/images/banner/2.jpg";
import banner3 from "../../../assets/assets/images/banner/3.jpg";
import banner4 from "../../../assets/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-xl" />
        <div className="absolute flex h-full items-center left-5 right-5 bottom-0">
          <div className="text-white font-bold space-y-7 w-1/2 pl-12 bg-gradient-to-r from-[#2b2b2b] to-[rgba(21,21,21, 0)]">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              esse quia porro libero voluptatem quae nulla sequi eius inventore
              consequatur!
            </p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-xl" />
        <div className="absolute flex h-full items-center left-5 right-5 bottom-0">
          <div className="text-white font-bold space-y-7 w-1/2 pl-12 bg-gradient-to-r from-[#2b2b2b] to-[rgba(21,21,21, 0)]">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              esse quia porro libero voluptatem quae nulla sequi eius inventore
              consequatur!
            </p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-xl" />
        <div className="absolute flex h-full items-center left-5 right-5 bottom-0">
          <div className="text-white font-bold space-y-7 w-1/2 pl-12 bg-gradient-to-r from-[#2b2b2b] to-[rgba(21,21,21, 0)]">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              esse quia porro libero voluptatem quae nulla sequi eius inventore
              consequatur!
            </p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-xl" />
        <div className="absolute flex h-full items-center left-0 top-0">
          <div className="text-white font-bold space-y-7 w-1/2 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
            <h2 className="text-6xl">Affordable price for car servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              esse quia porro libero voluptatem quae nulla sequi eius inventore
              consequatur!
            </p>
            <div>
              <button className="btn btn-warning mr-5">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
