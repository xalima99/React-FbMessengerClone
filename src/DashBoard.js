import React, { useEffect, useState, useRef } from "react";
import Sidebard from "./components/Sidebard";
import UserInfos from "./components/UserInfos";
import Discussion from "./components/Discussion";
import { getRealTimeUsers } from "./redux/actions";
import ActiveUsers from "./components/ActiveUsers";
import Messages from "./components/Messages";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./redux/actions";
import db from "./firebase";


function setOneToOneChat(uid1, uid2) {
  //Check if user1’s id is less than user2's
  if (uid1 < uid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
}

function DashBoard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const Allusers = useSelector((state) => state.user.users);
  const [chatUserName, setchatUserName] = useState("");
  const [chatStarted, setchatStarted] = useState(false);
  const [ImgUrl, setImgUrl] = useState("");
  const [isOnline, setisOnline] = useState(null);
  const [userUid, setuserUid] = useState(null);
  const [privateMessage, setPrivate] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  let unsubscribe;
 
  useEffect(() => {
    unsubscribe = dispatch(getRealTimeUsers);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setFiltered(
  
      Allusers.filter(user => {        // return null
        return user.displayName.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, Allusers])

  const initChat = (user) => {
    setchatStarted(true);
    setchatUserName(user.displayName);
    setuserUid(user.uid);
    setisOnline(user.isOnline);
    setImgUrl(user.photoURL);
  };

  return (
    <div className="App">
      <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <main className="flex-grow flex flex-row min-h-0">
            <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
              <div className="header p-4 flex flex-row justify-between items-center flex-none">
                <div
                  className="w-16 h-16 relative flex flex-shrink-0"
                  style={{ filter: "invert(100%)" }}
                >
                  <img
                    className="rounded-full w-full h-full object-cover"
                    alt="ravisankarchinnam"
                    src="https://avatars3.githubusercontent.com/u/22351907?s=60"
                  />
                </div>
                <p className="text-md font-bold hidden md:block group-hover:block">
                  Messenger
                </p>

                <span
                  onClick={() => dispatch(signout(auth.uid))}
                  className="block relative rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
                >
                  <i
                    style={{ color: "red", opacity: ".6", fontSize: "25px" }}
                    className="fas fa-power-off absolute"
                  ></i>
                </span>
              </div>
              <div className="search-box p-4 flex-none">
                <form>
                  <div className="relative">
                    <label>
                      <input
                        className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path
                            fill="#bbb"
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                          />
                        </svg>
                      </span>
                    </label>
                  </div>
                </form>
              </div>
              {/* <ActiveUsers /> */}
              <div className="contacts p-2 flex-1 overflow-y-scroll">
                {filtered.map((item) => {
                  return (
                    <Messages
                    onClick={() => console.log("clicked", item)}
                    key={item.uid}
                    displayName={item.displayName}
                    photoURL={item.photoURL}
                    uid={item.uid}
                    isOnline={item.isOnline}
                    onClick={initChat}
                  />
                  )
                })}
              </div>
            </section>
            <section className="flex flex-col flex-auto border-l border-gray-800">
              {chatStarted ? (
                <>
                  <UserInfos
                    displayName={chatUserName}
                    ImgUrl={ImgUrl}
                    isOnline={isOnline}
                  />
                  <Discussion user_uid_1={userUid} ImgUrl={ImgUrl} />
                </>
              ) : null}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
