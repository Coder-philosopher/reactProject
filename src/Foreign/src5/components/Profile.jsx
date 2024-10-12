import React, { useContext } from "react";
import UserContext from "../Context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-blue-600">
      {user
        ? "Welcome " + user.username + " Password:- " + user.password
        : "Please Login"}
    </div>
  );
}

export default Profile;
