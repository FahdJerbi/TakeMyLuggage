import React, { useEffect, useState } from "react";
import axios from "axios";
import DriverCardItems from "./DriverCardItems";
// ********************************************************

function DriverCard() {
  return (
    <div>
      {/* {myOrders.map((order) => {
        return <OrderCardItems key={order._id} {...order} />;
      })} */}
      <DriverCardItems />
    </div>
  );
}

export default DriverCard;
