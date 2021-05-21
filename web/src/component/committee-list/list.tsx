import React from 'react';
import classNames from 'classnames';
import Downarrow from  "../../../public/icons/down-arrow.svg"

const List = () => {
  return (
    <>
      <tr className="bg-blue-160 text-xs flex-wrap font-semibold">
        <td className="px-8 py-3 font-bold">Committee Name</td>
        <div className="flex">
        <td className="px-8 py-3">Mr. Rakesh</td>
        <Downarrow  className={classNames('transform scale-125 relative right-5 mt-5 ')}/>
        </div>
        <td className="px-8 py-3">5</td>
        <td className="px-8 py-3">Tamil Nadu</td>
        <td className="px-8 py-3">91 123456789</td>
        <td className="px-8 py-3">1999</td>
        <div className="flex">
        <td className="px-8 py-3">Types of TC courses</td>
        <Downarrow  className={classNames('transform scale-125 relative right-5 mt-5 ')}/>
        </div>
      </tr>
      <div className="my-2"></div>
    </>
  );
};

export default List;
