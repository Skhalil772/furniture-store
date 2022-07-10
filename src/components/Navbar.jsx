import Image from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!Open);
  };
  return (
    <div>
      <div className="bg-yellow-600 pt-2 flex justify-around sm:block  pl-3 pb-8 sm:shadow-xl lg:shadow-none h-fit">
        <a
          href="/"
          className="w-fit lg:absolute left-1/2 transform z-50 lg:pt-4 hover:opacity-75 trans-opa -translate-x-1/2"
        >
          <img src={Image} className="lg:w-72 md:w-64 w-32" alt="logo" />
        </a>
        <div className="sm:flex hidden justify-between h-14 pb-4 pt-16  items-center font-semibold text-xl  container mx-auto flex-row">
          <div className="flex flex-row space-x-4">
            <a href="/">HOME</a>
            <a href="/">CONTACT</a>
          </div>
          <ul className="flex space-x-4 pr-3">
            <li>
              <a
                className="bg-red-500 trans-opa rounded-md hover:opacity-75 text-white p-4"
                href="/"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="bg-black trans-opa rounded-md hover:opacity-75 text-white p-4"
                href="/"
              >
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
        <span
          className="  z-50 hover:cursor-pointer sm:hidden"
          onClick={handleClick}
        >
          {Open ? <FaTimes size={30} /> : <FaBars size={30} />}
        </span>
        {Open && (
          <div className="fixed  inset-0 bg-yellow-600 z-40">
            <ul className="flex space-y-8  justify-center container mx-auto  items-center font-semibold text-xl pt-24   flex-col">
              <li className="w-full px-20 text-center">
                <a href="/">HOME</a>
              </li>
              <li className="w-full text-center px-20">
                <a href="/">CONTACT</a>
              </li>

              <li className="w-full px-20">
                <a
                  className="bg-red-500 w-full trans-opa container text-center mx-auto  block rounded-md hover:opacity-75 text-white p-4"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li className="w-full px-20">
                <a
                  className="bg-black trans-opa container text-center mx-auto  block rounded-md hover:opacity-75 text-white py-3"
                  href="/"
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
