import React from "react";

const StatusCard = ({ color, text, Icon, Numbers }) => {
    return (
        <div className="h-24 bg-white border border-gray-300 rounded-lg p-4 flex items-center justify-between hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className={color}>
              {text}
            </h2>
            <h1 className="text-lg leading-6 font-bold text-gray-700 mt-1">
              {Numbers}
            </h1>
          </div>
          {Icon}
        </div>
    );
  };
  

export default StatusCard;
