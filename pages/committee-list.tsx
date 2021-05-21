import classNames from "classnames";
import React from "react";
import Broadcast from "../../public/icons/broadcast.svg";
import Edit from "../../public/icons/edit.svg";
import Search from "../../public/icons/search.svg";
import List from "../component/committee-list/list";
import Navbar from "../component/dashboard/navbar";

const Committee_list = () => {
  return (
    <div className=" flex bg-blue-160 ">
  
      <section className="relative left-20 ">
        <Navbar />
        <div className=" h-auto w-max bg-white rounded-2xl px-5 py-8 mb-8 mt-20  ">
          <div className="flex ">
            <h3 className="relative text-xl font-bold left-8">Committees</h3>
            <div className="flex absolute right-8 pl-4 top-24 ">
              <Search className={classNames("transform scale-125 mx-4 mt-7")} />
              <Edit className={classNames("transform scale-125 mx-6  mt-7")} />
              <button className="bg-blue-170 flex flex-wrap hover:bg-blue-700 text-white text-center text-xs my-3 font-semibold py-2 px-6 rounded">
                <Broadcast className={classNames("transform scale-125 mt-2")} />
                <p className="relative  px-1 my-1 pl-5 font-sans font-bold">
                  add new
                </p>
              </button>
            </div>
          </div>
          <table className="rounded-t-lg text-gray-800 mt-4">
            <tr className="text-left flex-wrap  text-xs opacity-40 border-gray-300">
              <th className="px-8 py-3">Committee name</th>
              <th className="px-8 py-3">Members</th>
              <th className="px-8 py-3">TCs</th>
              <th className="px-8 py-3">Location</th>
              <th className="px-8 py-3">Contact</th>
              <th className="px-8 py-3">Est year</th>
              <th className="px-8 py-3">Categories</th>
            </tr>

            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </table>
        </div>
      </section>
    </div>
  );
};

export default Committee_list;
