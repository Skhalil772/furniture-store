import Dot from "../assets/dots.svg";
import Key from "../assets/key.svg";
import Idea from "../assets/idea.png";
import Down from "../assets/down.svg";
import Paypal from "../assets/paypal.png";
function header() {
  return (
    <div className="-mt-52 md:mt-0 py-12 md:pt-16">
      <div className="py-5">
        <a
          className="px-5 rounded-md lg:flex md:hidden transition duration-300 ease-in  hover:text-white  mx-auto py-3 font-bold bg-yellow-600 hover:bg-red-600 text-black w-fit  flex space-x-1 items-center"
          href="/"
        >
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
      </div>
      <div className="flex flex-row justify-between">
        <span className="lg:block absolute lg:-translate-x-[70%] xl:translate-x-0 hidden">
          <img src={Dot} alt="design" />
        </span>
        <div className="md:flex-row flex-col space-x-3 flex max-w-[1000px] lg:px-0 px-6  mx-auto ">
          <div className="flex flex-col items-center space-y-3 pl-2  justify-center">
            <span className="border-[8px] rounded-full p-3 border-yellow-600 ">
              <img className="w-10" src={Key} alt="" />
            </span>
            <h3 className="font-semibold text-2xl">Safe</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 items-center">
            <span className="border-[8px] rounded-full p-3 border-yellow-600">
              <img className="w-6" src={Paypal} alt="" />
            </span>
            <h3 className="font-semibold text-2xl">Easy Payments</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 justify-center">
            <span className="border-[8px] rounded-full p-3 border-yellow-600">
              <img className="w-10" src={Idea} alt="" />
            </span>
            <h3 className="font-semibold text-2xl">Anytime</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              facilis?
            </p>
          </div>
        </div>
        <span className="lg:block hidden lg:translate-x-[70%] xl:translate-x-0">
          <img src={Dot} alt="design" />
        </span>
      </div>
    </div>
  );
}
export default header;
