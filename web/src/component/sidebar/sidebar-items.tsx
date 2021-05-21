import Link from 'next/link';
import React from 'react';
import className from 'classnames';

const SidebarItems = (props) => {
  return (
    <div className="flex">
      <img src={props.img} alt={props.alt} />
      <Link href={props.href}>
        <a className={className("block md:inline-block text-black-150 focus:text-blue-190 active:text-blue-190 hover:text-blue-190 text-sm px-3 py-3 border-b-2 border-blue-900 md:border-none")}>{props.name}</a>
      </Link>
    </div>
  );
};

export default SidebarItems;
