import classNames from 'classnames';
import React from 'react';
import Broadcast from "../../../public/icons/broadcast.svg";
import Calendar from "../../../public/icons/calendar.svg";
import Notification from "../../../public/icons/notification.svg"
import Downarrow from  "../../../public/icons/down-arrow.svg"

const Navbar = () => {
  return (
    <div>
      <div className="flex absolute right-2 top-12">
        <Broadcast className={classNames('stroke-current text-blue-170 transform scale-125 mx-3')} /> 
        <Calendar className={classNames('transform scale-125 mx-3')}/>
        <Notification className={classNames('transform scale-125 mx-3')}/>
        <Downarrow className={classNames('transform scale-125 mx-3 mt-1')}/>
      </div>
    </div>
  );
};

export default Navbar;
