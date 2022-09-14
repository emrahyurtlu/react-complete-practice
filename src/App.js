import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const INITIAL_USERS = [];

const App = () => {
  const [usersList, setUsersList] = useState(INITIAL_USERS);

  const handleAddNewUser = (user) => {
    setUsersList((prevState) => [user, ...prevState]);
  };
  
  /* const handleDeleteUser = (event) => {
    console.log(event);
    setUsersList((prevState) => prevState.filter(item => item.name != user.name));
  }; */

  return (
    <div>
      <AddUser onAddUser={handleAddNewUser} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
