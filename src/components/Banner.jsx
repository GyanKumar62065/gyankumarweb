import bannerWallpaper from "../assets/banner_wallpaper.svg";
import bannerImage from "../assets/BannerLogo.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerWallpaper})`,
        backgroundSize: "cover",
      }}
      className="main-cointainer flex items-center text-white "
    >
      {/* text */}

      <div className="w-full flex justify-center">
        <div className="w-3/4 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="mt-2 text-5xl font-bold">Gyan Kumar</h1>
          <h3 className="mt-2 text-3xl font-semibold">
            A I am a Frontend Developer
          </h3>
          <p className="mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            excepturi magni accusantium eligendi, minus natus ipsam deleniti
            enim doloremque laborum ex dolore repellat iste, similique non
            impedit soluta sunt hic?
          </p>

          <div className="icons-conainer mt-2 mb-5 space-x-5 flex">
            <div className="w-10  h-10 shadow border  flex justify-center items-center bg-gray-900  cursor-pointer rounded-full hover:bg-orange-400 hover:border-none ">
              <i class="fa-brands text-2xl fa-facebook"></i>
            </div>
            <div className="w-10 h-10 shadow border  flex justify-center items-center bg-gray-900  cursor-pointer rounded-full hover:bg-orange-400 hover:border-none ">
              <i class="fa-brands text-2xl fa-instagram"></i>
            </div>
            <div className="w-10 h-10 shadow border  flex justify-center items-center bg-gray-900  cursor-pointer rounded-full hover:bg-orange-400 hover:border-none ">
              <i class="fa-brands text-2xl fa-linkedin-in"></i>
            </div>
            <div className="w-10 h-10 shadow border  flex justify-center items-center bg-gray-900  cursor-pointer rounded-full hover:bg-orange-400 hover:border-none ">
              <i class="fa-brands text-2xl fa-github"></i>
            </div>
          </div>

          <a
            className="bg-orange-500 font-semibold text-lg rounded-full px-3 py-2 me-3 hover:bg-orange-400 "
            href="/contact"
          >
            Contact Me
          </a>
          <a
            className="bg-orange-500 font-semibold text-lg rounded-full px-3 py-2 hover:bg-orange-400 "
            href="/"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* image */}
      <div className="w-full flex justify-center">
        <img
          className=" w-2/3 mix-blend-multiply"
          src={bannerImage}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
