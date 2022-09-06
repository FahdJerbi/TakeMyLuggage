import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCardItems from "./OrderCardItems";
// ********************************************************

function OrderCard() {
  const [myOrders, setMyOrders] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");
  // console.log(id, token);

  // get all orders related to User using id
  useEffect(() => {
    axios
      .get(`/api/getUserOrders/${id}`)
      .then((res) => setMyOrders(res.data.UserOrders))
      .catch((error) => {
        // console.log(error)
        if (error.response) {
          //do something
          console.log(error.response);
        } else if (error.request) {
          //do something else
          console.log(error.request);
        } else if (error.message) {
          //do something other than the other two
          console.log(error.message);
        }
      });
  }, [myOrders]);

  return (
    <div>
      {/* {myOrders.map((order) => {
        return <OrderCardItems key={order._id} {...order} />;
      })} */}

      {myOrders.length >= 1 ? (
        myOrders.map((order) => {
          return <OrderCardItems key={order._id} {...order} />;
        })
      ) : (
        <h3>Nothing here yet !</h3>
      )}
    </div>
  );
}

export default OrderCard;
