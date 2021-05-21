import classNames from 'classnames';
import React from 'react';
import Arrow from "../../public/icons/arrow.svg";
import Calendar from "../../public/icons/calendar.svg";
import Downarrow from "../../public/icons/down-arrow.svg";
import Notification from "../../public/icons/notification.svg";
import RecentAnnouncement from '../component/dashboard/announcements/recent-announcement';
import RecentPayment from '../component/dashboard/payments/recent-payment';
import Tickets from "../component/dashboard/tickets";
import MainNavbar from '../component/main-navbar/main-navbar';


const Dashboard = () => {
  return (
    <div className="bg-blue-160 w-full pt-2">
      <section className="">
      <div className="flex">
            <MainNavbar />
            <div className=" flex absolute top-1 px-6 right-2  ">
            <Calendar className={classNames('transform scale-125 mx-4 mt-7')} />
            <Notification className={classNames('transform scale-125 mx-4 mt-7')} />
            <Downarrow className={classNames('transform scale-125 mx-4 mt-8')} />
            </div>
        </div>
        <div className=" h-auto w-max bg-white rounded-2xl px-5 py-8 mt-2 mb-8">
          <div className="flex">
            <div className="w-64 h-20 bg-blue-170 text-white mx-3 border-2 border-gray-300 p-5 rounded-2xl tracking-wide">
              <div className="flex">
              <Calendar className={classNames(' stroke-current text-white transform scale-125 mb-4')}/>

                <p className="px-4 relative bottom-2 font-sans font-semibold tracking-tight">21st February 2021</p>
              </div>
              <div className="flex">
                <p className="relative font-sans text-xs">Upcoming 23 new events</p>
                <Arrow className={classNames(' stroke-current text-white transform scale-125 mt-1 relative left-8')}/>
              </div>

              <div className="flex relative right-8 top-10">
                <p className="relative left-4 text-base font-bold text-blue-170 top-2 tracking-tighter ">
                  Recent payments
                </p>
                <Arrow className={classNames(' transform scale-125 mt-4 relative left-8 ')}/>
                <p className="relative left-16 text-base text-blue-170">
                  <strong className="text-2xl">32</strong>
                  /50.56
                </p>
              </div>

              <RecentPayment/>
            </div>

            <div className="w-64 h-20 bg-white mx-3 border-2 border-blue-170  rounded-2xl tracking-wide">
              <p className="px-3 pt-2 text-sm  font-sans font-bold text-blue-170">New Broadcast message for you</p>

              <div className="flex">
                <small className="text-xs px-3 my-1 font-semibold font-sans text-blue-170 ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </small>
              </div>

              <div className="flex relative left-1 top-11">
                <p className="text-base font-semibold text-blue-170 ">Tickets</p>
                <Arrow className={classNames(' transform scale-125 mt-2 relative left-4')}/>
                <div className="relative left-32 text-base text-blue-170 bottom-2">
                  <p>
                    <strong className=" text-2xl text-red-150 ">12</strong>/55
                  </p>
                </div>
              </div>

              <Tickets />
            </div>
            <RecentAnnouncement  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;