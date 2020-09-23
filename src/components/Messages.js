import React from "react";

const Messages = (user) => {
  return (
    <div onClick={() => user.onClick(user)}>
      <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div className="w-16 h-16 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src={user.photoURL}
            alt=""
          />
          {user.isOnline ? (
            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
          ) : null}
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p className="font-bold">{user.displayName}</p>
          {/* <div className="flex items-center text-sm font-bold">
            <div className="min-w-0">
              <p className="truncate">Hey, Are you there?</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">10min</p>
          </div> */}
        </div>
        <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
      </div>
    </div>
  );
};

export default Messages;
