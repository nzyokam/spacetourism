import { NavLink } from "react-router-dom";
import { navLinks } from "../ui/constants";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "../ui/HamMenu";

const NavBar = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [logoSrc, setLogoSrc] = useState("/Logo.png");

  useEffect(() => {
    if (isLargeScreen) {
      setLogoSrc("/Logo-desktop.svg");
    } else {
      setLogoSrc("/Logo-tablet.png");
    }
  }, [isLargeScreen]);

  return (
    <div className="absolute w-full flex justify-end pt-5">
      <HamburgerMenu />
      <nav className="absolute w-full flex items-center justify-between lg:pt-[30px] md:p-0 z-50">
        <div>
          <img
            src={logoSrc}
            alt="logo"
            className="md:h-25 lg:h-[100px] md:pl-[25px] xs:h-[70px] sm:h-[70px] xs:pl-[20px] sm:pl-[20px] xs:pb-[20px] sm:pb-[20px] relative z-50"
          />
        </div>
        <div className="md:hidden sm:hidden xs:hidden items-center justify-between lg:flex">
          <img
            src="/line.svg"
            alt="logo"
            className="lg:w-[40vw] xl:w-[30vw] xl:ml-[-10vw] lg:ml-[-15vw] absolute z-50"
          />
        </div>
        <div className="max-md:hidden xs:p-10 sm:p-10 xs:pr-7 sm:pr-7 xs:m-0 sm:m-0 glassbg relative z-10">
          <ul className="flex lg:pl-20 lg:pr-10 lg:text-xl">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white xs:m-10 sm:m-10 pb-10 whitespace-nowrap ${
                      isActive ? "border-b-2 border-white" : ""
                    } hover:text-gray-300`
                  }
                >
                  <span className="text-slate-gray">{link.number}</span>{" "}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
