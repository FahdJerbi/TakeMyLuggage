import React, { useEffect, useState } from "react";
import axios from "axios";
import DriverCardItems from "./DriverCardItems";
// ********************************************************

function DriverCard() {
  const [userRequests, setUserRequests] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");
  // console.log(id, token);

  // get all orders related to User using id
  useEffect(() => {
    axios
      .get(`/api/driver/getRequest/${id}`)
      .then((res) => setUserRequests(res.data.UserRequest));
    // .catch((error) => {
    //   // console.log(error)
    //   if (error.response) {
    //     //do something
    //     console.log(error.response);
    //   } else if (error.request) {
    //     //do something else
    //     console.log(error.request);
    //   } else if (error.message) {
    //     //do something other than the other two
    //     console.log(error.message);
    //   }
    // });
  }, []);

  // console.log(userRequests);

  return (
    <div>
      {userRequests.map((userRequest) => {
        return <DriverCardItems key={userRequest._id} {...userRequest} />;
      })}

      {/* <DriverCardItems {...userRequest} /> */}
    </div>
  );
}

export default DriverCard;
