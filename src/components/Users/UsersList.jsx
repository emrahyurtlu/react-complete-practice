import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  /* const handleDeleteUser = (user) => {
    props.onDelete(user);
  } */

  return (
    <Card className={classes.users}>
      <h4>Users</h4>
      <ul>
        {props.users.length === 0 && <p>No users found!</p>}
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
