const Services = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl flex justify-center underline font-bold pb-10">
        My Services
      </h1>

      <div className="  flex space-x-3 px-12 justify-center items-center">
        <div className="bg-gray-200 cursor-pointer hover:bg-gray-100 flex flex-col justify-center items-center space-y-5 border shadow-xl rounded-2xl px-8 py-4 ">
          <i class="text-5xl fa-solid fa-code"></i>

          <h3 className="text-3xl">Frontend Devlopment</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
            et ad voluptatum dolor! Assumenda, alias quo delectus optio est
            possimus laborum sapiente minus dicta!
          </p>
          <button className="px-5 py-2 bg-orange-500 rounded-full hover:bg-orange-400 font-semibold cursor-pointer">
            Check
          </button>
        </div>
        <div className=" bg-gray-200  cursor-pointer hover:bg-gray-100 flex flex-col justify-center items-center space-y-5 border shadow-xl rounded-2xl px-8 py-4 ">
          <i class="text-5xl fa-solid fa-server"></i>

          <h3 className="text-3xl">Backend Devlopment</h3>

          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
            et ad voluptatum dolor! Assumenda, alias quo delectus optio est
            possimus laborum sapiente minus dicta!
          </p>
          <button className="px-5 py-2 bg-orange-500 rounded-full hover:bg-orange-400 font-semibold cursor-pointer">
            Check
          </button>
        </div>
        <div className=" bg-gray-200  cursor-pointer hover:bg-gray-100 flex flex-col justify-center items-center space-y-5 border shadow-xl rounded-2xl px-8 py-4 ">
          <i class="text-5xl fa-solid fa-mobile"></i>

          <h3 className="text-3xl">Android Devlopment</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
            et ad voluptatum dolor! Assumenda, alias quo delectus optio est
            possimus laborum sapiente minus dicta!
          </p>
          <button className="px-5 py-2 bg-orange-500 rounded-full hover:bg-orange-400 font-semibold cursor-pointer">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
