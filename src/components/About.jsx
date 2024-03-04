import aboutSectionImage from "../assets/AboutSectionImage.avif";
const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-10">
      <h2 className="text-3xl underline font-bold">About Me</h2>
      <div className="flex justify-center items-center">
        <div className="w-full px-16">
          {/* Image */}
          <img
            src={aboutSectionImage}
            alt="About Image"
            className="mix-blend-multiply"
          />
        </div>
        <div className="w-full m-10">
          <div className="w-5/6 ps-10 py-10">
            {/* Text */}

            <h1 className="text-3xl font-bold mb-4">
              Java Backend & Frontend Developer
            </h1>
            <p className="mb-4 overflow-clip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              consequuntur perferendis inventore.
            </p>
            <p className="h-24 mb-6 overflow-clip">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              quos esse at exercitationem numquam rem repellendus, ea atque,
              quasi voluptates repudiandae, accusamus aspernatur nobis eum
              quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Qui atque omnis blanditiis asperiores voluptatem temporibus
              modi tempore consectetur veniam nemo, alias facere unde distinctio
              placeat officiis aliquid. Provident, odit magni, exercitationem
              recusandae alias vero enim saepe dolores repellat qui ratione
              numquam commodi cupiditate dicta eveniet deserunt minus ea harum
              non!
            </p>

            <a
              className="bg-orange-500 font-semibold text-lg rounded-full px-3 py-2 hover:bg-orange-400 "
              href="/about-read-more"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
