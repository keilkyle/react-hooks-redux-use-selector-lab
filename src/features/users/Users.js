import React from "react";
import {useSelector} from "react-redux";

function Users() {

  const users = useSelector((state) => state.users)
  console.log(users)

  return (
    <div>
      <ul>
        Users!
        {users.map((user) => <p>{user.username}</p>)}
        <p>Total Users: {users.length}</p>
      </ul>
    </div>
  );
}

export default Users;
