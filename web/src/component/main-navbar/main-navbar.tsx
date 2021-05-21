import React from "react";
import MainNavbarItems from "./main-navbaritems";

const MainNavbar = () => {
  return (
    <>
      <div className="flex sm:flex-row">
        <MainNavbarItems
          name="Committees"
          img="/icons/committee.svg"
          alt="committee"
          number="15"
        />
        <MainNavbarItems
          name="Training centers"
          img="/icons/training center.svg"
          alt="training center"
          number="27"
        />
        <MainNavbarItems
          name="Courses"
          img="/icons/courses.svg"
          alt="courses"
          number="107"
        />
        <MainNavbarItems
          name="Tutors"
          img="/icons/teachers.svg"
          alt="teachers"
          number="27"
        />
        <MainNavbarItems
          name="Students"
          img="/icons/students.svg"
          alt="students"
          number="225"
        />
      </div>
    </>
  );
};

export default MainNavbar;
