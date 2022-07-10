import Dell from "../assets/dell.svg";
import Sportify from "../assets/spotify.svg";
import Dezzer from "../assets/deezer.svg";
import Cisco from "../assets/cisco.svg";
import Disney from "../assets/disney.svg";
import Verizon from "../assets/verizon.svg";
import Texas from "../assets/texas.svg";
function partners() {
  return (
    <section className="bg-black">
      <div className=" container mx-auto flex flex-col space-x-4 py-6 items-center">
        <h3 className="text-yellow-600 text-2xl font-bold">Our Partners</h3>
        <p className="text-white text-center max-w-[500px] mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque
          iusto accusamus consequuntur nulla? Dolores quasi nobis aut temporibus
          ipsum?
        </p>
        <div className="flex flex-wrap max-w-[650px] place-items-center md:grid-cols-4 justify-center gap-8 mx-auto py-12 ">
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Sportify} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Dell} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Cisco} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Disney} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Dezzer} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Verizon} alt="" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <img className="h-20 w-20" src={Texas} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default partners;
