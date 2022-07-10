import Lamp from "../assets/lamp.png";
import App from "../assets/apptt.jpg";
import Down from "../assets/down.svg";

import { useState } from "react";

function Footer() {
  const [Text, setText] = useState("");
  const handleInput = (event) => {
    setText(event.target.value);
    // if (Text.toString.length > 0) {
    //   console.log("hey oooo");
    //   setFill(true);
    // }
    console.log(Text.toString.length);
  };

  return (
    <div className="md:pt-0 pt-20 md:mb-0 mb-6 ">
      <div className="  flex md:flex-row flex-col items-center container mx-auto px-12 space-y-12 md:space-y-0 justify-around">
        <div className="flex flex-col space-y-8 md:max-w-sm    justify-center items-center">
          <div>
            <img src={Lamp} alt="" className="w-fit mx-auto px-6" />
          </div>
          <a
            className="px-5 rounded-md lg:flex md:hidden transition duration-300 ease-in  hover:text-white  mx-auto py-3 font-bold bg-yellow-600 hover:bg-red-600 text-black w-fit  flex space-x-1 items-center"
            href="/"
          >
            {/* <img className="h-6 stroke-white" src={Down} alt="Download" />{" "} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download The App
          </a>
          <div className="md:inline-block  hidden rounded-t-3xl  -z-10">
            <img className="rounded-t-3xl w-56" src={App} alt="" />
          </div>
        </div>

        <form
          className="border-4    h-fit p-3 md:w-[40%] w-[88%]  flex flex-col space-y-4 border-neutral-700 rounded-xl"
          action=""
          method="post"
        >
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <span className="flex-col font-bold focus:text-yellow-600 flex space-y-2">
            <label htmlFor="Name">ENTER NAME</label>
            <input
              className="border-4 border-yellow-600 rounded-md"
              id="Name"
              type="text"
            />
          </span>
          <span className=" rounded-md font-bold flex-col flex space-y-2">
            <label htmlFor="Email">ENTER EMAIL</label>
            <input
              className="border-4 border-yellow-600 rounded-md"
              id="Email"
              type="email"
            />
          </span>
          <span className="flex flex-col space-y-2">
            {Text && (
              <label className="font-bold trans" htmlFor="msg">
                ENTER MESSAGE
              </label>
            )}

            <textarea
              placeholder="ENTER MESSAGE"
              className="outline-none placeholder:text-black pl-2 border-4 font-bold border-yellow-600 rounded-md"
              onChange={handleInput}
              name=""
              id="msg"
              cols="50"
              rows="5"
            ></textarea>
          </span>
          <a
            className="px-5 rounded-md flex transition duration-300 ease-in   hover:text-white  py-2 font-bold bg-yellow-600 hover:bg-red-600 text-black w-fit  "
            href="/"
          >
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
}
export default Footer;
