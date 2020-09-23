import React from "react";

const UserInfos = ({displayName, ImgUrl, isOnline}) => {

  return (
    <div>
      <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
        <div className="flex">
          <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src={ImgUrl}
              alt=""
            />
             {isOnline ? (
            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
          ) : null}
          </div>
          <div className="text-sm">
            <p className="font-bold">{displayName}</p>
            <p>{isOnline ? 'Online' : 'Offline'}</p>
          </div>
        </div>

        <div className="flex">
          <span
            href="#"
            className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-full h-full fill-current text-blue-500"
            >
              <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
            </svg>
          </span>
          <span
            href="#"
            className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-full h-full fill-current text-blue-500"
            >
              <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfos;
