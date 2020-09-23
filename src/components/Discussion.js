import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, {timestamp} from "../firebase";
import { sendMessage } from "../redux/actions";



function setOneToOneChat(uid1, uid2) {
  //Check if user1’s id is less than user2's
  if (uid1 < uid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
}

const Discussion = ({ user_uid_1, ImgUrl }) => {
  const [message, setMessage] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [privateMessage, setPrivate] = useState([]);
  const dummy = useRef()
  useEffect(() => {
    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    let unsubscribe = db
      .collection("rooms")
      .doc(roomID)
      .collection("messages").orderBy('timestamp', 'asc')
      .onSnapshot((snap) => {
        setPrivate(snap.docs.map((doc) => ({data: doc.data(), MessageId: doc.id})));
      });
    return () => unsubscribe();
  }, [user_uid_1]);

  const submitMessage = async (e) => {
    e.preventDefault();

    const msgObj = {
      receiver: user_uid_1,
      sender: auth.uid,
      message,
      timestamp: timestamp
    };

    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    // db.collection("rooms").doc(roomID).collection("messages").add(msgObj);

    if (message !== "") {
      dispatch(sendMessage(msgObj, roomID));
      
    }
    
    setMessage("");
    dummy.current.scrollIntoView({behavior: 'smooth'})
  };

  const deleteMessage = (id) => {
    let roomID = setOneToOneChat(user_uid_1, auth.uid);
    db.collection('rooms').doc(roomID).collection('messages').doc(id).delete()
    .then(() => {
      console.log('deleted')
    })
  }

  return (
    <div>
      <div className="chat-body p-4 flex-1 overflow-y-scroll" >
        {privateMessage.map((item) => {
          if (item.data.sender === auth.uid) {
            return (
              <div className="flex flex-row justify-end my-4">
                <div className="messages text-sm text-white grid grid-flow-row gap-2">
                  <div className="flex items-center flex-row-reverse group">
                    <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                     {item.data.message}
                    </p>
                    <button
                      type="button"
                      className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                    >
                     <i class="far fa-trash-alt" onClick={() => deleteMessage(item.MessageId)}></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex flex-row justify-start my-4">
                <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                  <img
                    className="shadow-md rounded-full w-full h-full object-cover"
                    src={ImgUrl}
                    alt=""
                  />
                </div>
                <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                  <div className="flex items-center group">
                    <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                    {item.data.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div ref={dummy}></div>
        {/** Other message */}
      </div>

      {/* FOOTER */}
      <div className="chat-footer flex-none">
        <div className="flex flex-row items-center p-4">
          <div className="relative flex-grow">
            <form onSubmit={submitMessage}>
              <input
                className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </form>
            <button
              type="button"
              className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
            >
              <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
