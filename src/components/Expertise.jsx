import { useState } from "react";
import bannerLogo from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [skillsArray, setSkillsArray] = useState([
    "Core Java",
    "Java EE",
    "C++",
    "Data Structure",
    "Algorithms",
    "OOP's",
    "DBMS",
    "MySQL",
    "Computer Network",
    "Cloud",
    "AWS",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "MUI",
    "React Js",
    "Android Devlopment",
    "Spring Framework",
    "Spring boot",
    "JDBC",
    "Hibernate",
    "JSP",
    "Servlate",
    "Postman",
  ]);

  return (
    <div className=" py-10">
      <h1 className="flex justify-center  font-bold underline text-3xl">
        My Expertise
      </h1>
      <div
        className="mt-16 py-16"
        style={{
          backgroundImage: `url(${bannerLogo})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center space-x-16 ">
          <div className="w-full flex justify-center py-10  ">
            {/* text  */}

            <div className="w-2/3 space-y-5  text-white">
              <h2 className="text-5xl font-semibold">
                I love these technology
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                fuga eligendi tenetur iure assumenda veniam esse natus illo
                nulla fugiat. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati, aspernatur?
              </p>
              <button className="px-5 py-2 rounded-full text-lg font-semibold bg-orange-500 ">
                Hire Me
              </button>
            </div>
          </div>

          <div className="w-full mb-3  flex items-center justify-center">
            <div className="w-5/6 flex justify-center flex-wrap space-x-3 ">
              {skillsArray.map((skills, index) => (
                <p
                  key={index}
                  className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold"
                >
                  {skills}
                </p>
              ))}

              {/* <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p>
              <p className="bg-gray-300 rounded-full px-3 py-2 mb-3 font-semibold">
                Core Java
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expertise;
