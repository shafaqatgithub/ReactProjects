import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const user = useParams();
  return (
    <div className="text-xl text-red-900 flex justify-center align-middle">
      User : {user.userid}
    </div>
  );
};

export default User;
