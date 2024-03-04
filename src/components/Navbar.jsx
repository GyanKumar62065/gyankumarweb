import { useState } from "react";
import devLogo from "../assets/dev-logo.jpg";
const Navbar = () => {
  const [brandName, setBrandName] = useState("Gyan Kumar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });

  return (
    <>
      <div className="flex justify-between px-10 h-16 bg-gray-200 items-center ">
        {/* left section */}
        <div
          className="text-xl font-bold flex items-center cursor-pointer"
          onClick={() => {
            //  refresh page on clicking on name and logo
            window.location.reload(false);
          }}
        >
          <img
            src={devLogo}
            className="h-14 w-14 me-2 mix-blend-multiply"
            alt=""
          />
          {brandName}
        </div>

        {/* mid section */}
        <div className="space-x-8 font-semibold">
          {menuLinks.map((links) => (
            <a
              key={links.id}
              className="hover:text-orange-500 "
              href={links.link}
            >
              {links.title}
            </a>
          ))}

          {/* <a className="hover:text-orange-500 " href="/about">
            About{" "}
          </a>
          <a className="hover:text-orange-500 " href="/portfolio">
            Portfolio
          </a>
          <a className="hover:text-orange-500 " href="/projects">
            Projects
          </a>
          <a className="hover:text-orange-500 " href="/contact">
            Contact
          </a> */}
        </div>

        {/* right section */}
        <div>
          <a
            href={actionButton.link}
            className="btn bg-orange-500 font-semibold text-lg rounded-full px-3 py-2 hover:bg-orange-400 "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
