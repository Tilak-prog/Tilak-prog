import React from 'react'
import classNames from 'classnames';
import Arrow from "../../../public/icons/arrow.svg";

const Broad = () => {
    return (
      <>
         <div className="w-1/3 h-20 bg-white border-2 border-blue-170  rounded-2xl tracking-wide">
              <p className="px-3 pt-2 text-xs  font-sans font-bold text-blue-170">New Broadcast message for you</p>

              <div className="flex">
                <small className="text-xs px-3 my-1 font-semibold font-sans text-blue-170 ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </small>
              </div>   
         </div>
</>
    )
}

export default Broad
