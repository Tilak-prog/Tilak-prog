import classNames from 'classnames';
import moment from "moment";
import React from 'react';
import Broadcast from "../../../../public/icons/broadcast.svg";
import Button from '../../ui/Buttons/button';
import Announcement from "./announcement";

const RecentAnnouncement = (Date) => {
  const formattedDate =moment().format('LL'); 
  const formattedTime =moment().format('LTS');
  return (
    <div>
      <div className="w-64 h-auto bg-blue-180 relative left-2 mx-8 px-auto border-2 border-gray-300 mr-12 rounded-2xl top-48 lg:top-0 tracking-tight lg:flex-col ">
        <ul className="px-4 pt-2 text-base font-bold font-sans text-blue-170">Recent Announcements</ul>

        <Announcement datetime={Date}
          name="Committee name"
          name1="Committees"
          li="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
          date={formattedDate}       
          time={formattedTime}
        />

        <Announcement datetime={Date}
          name="Training Center Name"
          name1="Training Center"
          li="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
          date={formattedDate}       
          time={formattedTime}
        />
        <Announcement datetime={Date}
          name="Training Center Name"
          name1="Training Center"
          li="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
          date={formattedDate}       
          time={formattedTime}
        />
        <Announcement datetime={Date}
          name="Training Center Name"
          name1="Training Center"
          li="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
          date={formattedDate}       
          time={formattedTime}
        />

        <div className="mt-6">
        <Button announcement className="flex my-3 mx-4" >
        <Broadcast className={classNames('transform scale-125 mt-1 mr-3')}/>
            <span className="text-xs font-sans font-bold ">Broadcast an announcement</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentAnnouncement;
