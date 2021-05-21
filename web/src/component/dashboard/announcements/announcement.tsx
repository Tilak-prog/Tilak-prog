import React from 'react';

const Announcement = (props) => {
  return (
    <>
      <ul className="flex mt-3 ">
        <li className="mx-4 text-xs opacity-50">{props.name}</li>
        <li className=" text-xs absolute left-40 opacity-50">{props.name1}</li>
      </ul>
      <ul className="text-xs mt-1 px-4 font-sans font-bold">{props.li}</ul>
      <ul className=" mt-1 flex">
        <li className=" ml-4 text-xs opacity-50">{props.date}</li>
        <li className="text-xs absolute left-40 pl-2 opacity-50">{props.time}</li>
      </ul>
    </>
  );
};

export default Announcement;
