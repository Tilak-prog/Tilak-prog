import Navbar from "../component/dashboard/navbar";

const Commitee_description = () => {
  return (
    <div>
      <div className=" flex bg-blue-160 ">
      
        <section className="relative left-20 ">
          <Navbar />

          <div className=" h-screen w-max bg-white rounded-2xl px-5 pt-8 mt-2 pr-96 relative top-16 ">
            <div className="flex ">
              <h3 className="relative text-xl font-bold opacity-60 bottom-3 pr-2">
                Committees
              </h3>
              <h3 className="relative text-xl font-bold  bottom-3">
         
                / Committees name
              </h3>
              <img
                src="/icons/edit.svg"
                alt="edit"
                className="relative left-2 w-3 bottom-3"
              />
            </div>
            <ul className="flex border-b text-sm tracking-tight">
              <li className="-mb-px mr-1">
                <a
                  className="bg-white inline-block rounded-t py-2 px-4 text-blue-700 border-b-4 border-blue-170 font-sans font-bold"
                  href="#"
                >
                  Details
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-gray-400 font-sans font-bold"
                  href="#"
                >
                  Functionals
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-gray-400 font-sans font-bold"
                  href="#"
                >
                  Training Centers
                </a>
              </li>
              <li className="mr-1">
                <a
                  className="bg-white inline-block py-2 px-4 text-gray-400 font-sans font-bold"
                  href="#"
                >
                  Courses Associated
                </a>
              </li>
            </ul>
            <div className="relative top-8">
              <small className="opacity-40 font-roboto font-semibold">
                Committee name
              </small>
              <h5 className="font-roboto font-semibold opacity-70">
                Committee name
              </h5>
            </div>
            <div className="relative top-8">
              <span>Description</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Commitee_description;
