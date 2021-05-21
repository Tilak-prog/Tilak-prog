import classNames from 'classnames';
import React from 'react';
import Logo from '../logo';
import SidebarItems from "./sidebar-items";
const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <section className=" relative h-screen w-1/5 bg-blue-160 opacity-90 font-bold font-sans hidden md:block ">
        <Logo />
        <div className="pl-4 pt-8">
          <SidebarItems

            img="/icons/dashboard.svg" alt="dashboard"
            href="/dashboard"
            name="Dashboard" />

          <SidebarItems

            img="/icons/committee.svg" alt="committee"
            href="/committee-list"
            name="Committees" />

          <SidebarItems

            img="/icons/training center.svg" alt="training center"
            href="/training centers"
            name="Training centers" />


          <SidebarItems
            img="/icons/courses.svg" alt="courses"
            href="/courses"
            name="Courses" />

          <SidebarItems
            img="/icons/certificates.svg" alt="certificates"
            href="/certificates"
            name="Certificates" />

          <SidebarItems
            img="/icons/teachers.svg" alt="teachers"
            href="/teachers"
            name="Teachers" />

          <SidebarItems
            img="/icons/students.svg" alt="students"
            href="/students"
            name="Students" />

          <SidebarItems
            img="/icons/fees.svg" alt="fees"
            href="/fees"
            name="Fees" />

          <SidebarItems
            img="/icons/tickets.svg" alt="tickets"
            href="/tickets"
            name="Tickets" />
        </div>
      </section>

      <div className={classNames('flex-grow relative')}>
        <div className={classNames('')}>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;