import Table from "../assets/table.png";
function showcase() {
  return (
    <div>
      <div className="container mx-auto flex md:flex-row px-8 flex-col-reverse justify-around">
        <div className="flex flex-col justify-center space-y-3 px-6  ">
          <h3 className="text-4xl font-bold text-black">Relax, You're Home!</h3>
          <p className="pb-3 max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            dolore voluptatem dolores optio sed ut rem, libero expedita quam ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            similique tempora minima eaque cum libero voluptatibus ex!
            Voluptates, corrupti ducimus.
          </p>
          <a
            className="px-5 rounded-md flex transition duration-300 ease-in   hover:text-white  py-2 font-bold bg-yellow-600 hover:bg-red-600 text-black w-fit  "
            href="/"
          >
            Sign Up
          </a>
        </div>
        <div className=" px-6 ">
          <img src={Table} alt="" />
        </div>
      </div>
    </div>
  );
}
export default showcase;
