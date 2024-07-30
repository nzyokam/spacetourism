import {  NavLink } from "react-router-dom";
import { navLinks } from "./constants";
import "./Hamburger.css";

export const HamburgerMenu = () => {
  const showSideBar = () => {
    const sidebar = document.querySelector("#bar");
    sidebar.style.transform = "translateX(0)";
  };
  const hideSideBar = () => {
    const sidebar = document.querySelector("#bar");
    sidebar.style.transform = "translateX(100%)";
  };

  return (
    <div className="lg:hidden xl:hidden 2xl:hidden md:hidden">
      <button className="hamburger" onClick={showSideBar}>
        <img src="/Menu.png" />
      </button>
      <nav id="bar" className="style-menu text-gray-200">
        <ul>
          <button onClick={hideSideBar} className="pb-[50px] xs:ml-[20px]">
            <img src="/Close.png" />
          </button>

          {navLinks.map((link, index) => (
            <li key={index} className="p-[20px] li-underlin text-black " onClick={hideSideBar}>
              <NavLink
                to={link.path}
                className="hover:text-gray-500 whitespace-nowrap border-r-2 pr-10 flex  border-white"
              >
                  <span className="text-slate-gray">{link.number}</span>{" "}
                  <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
