import Chair from "../assets/couch.png";
import App from "../assets/app.svg";
function header() {
  return (
    <div className="h-screen">
      <div className=" ">
        <div className=" relative -z-20 bg-gradient-to-b from-yellow-600 w-full pr-4  to-yellow-400 xl:h-[584px] lg:h-[616px] md:h-[505px] sm:h-[442px] h-348">
          <div className="container mx-auto  ">
            <img
              className=" -z-10   absolute xl:w-[93%] lg:w-[83%] md:w-[78%] w-[60%] -translate-x-1/2 left-[50%]   xl:-bottom-32  lg:-bottom-24 md:-bottom-24 -bottom-8    "
              src={Chair}
              alt=""
            />
            <img
              className="lg:w-72 z-10 md:w-64 w-52 relative  xl:-bottom-36  lg:-bottom-36 md:-bottom-24 sm:-bottom-16 -bottom-8 mx-auto"
              src={App}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default header;
