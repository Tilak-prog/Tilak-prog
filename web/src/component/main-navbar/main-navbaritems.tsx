import Link from 'next/link';
import className from 'classnames';
import React from 'react';
import styles from '../../styles/Home.module.scss';
import Broadcast from "../../../public/icons/broadcast.svg"

const MainNavbarItems = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 pr-3">
        <Link href="#">
          <a className="block md:inline-block text-black-150 text-xs hover:text-blue-500 px-3 py-3 pb-2 tracking-tight opacity-70 font-sans font-bold">
            {props.name}
          </a>
        </Link>
        <div className="grid relative mb-5">
          <img src={props.img} alt={props.alt} className={className("transform scale-150 absolute left-4  ")} />
          <strong className="text-blue-170 absolute left-10 -top-2 ">{props.number}</strong>
        </div>
      </div>
    </div>
  );
};

export default MainNavbarItems;
