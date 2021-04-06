import React, { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";

function UserList() {
  const [userData, setUser] = useState([]);

  useEffect(() => {
    const baseUrl =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    let url = baseUrl;

    // if (male){
    //     url = "https://randomuser.me/api/?gender=female"
    // }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results;
        setUser(newData);
        console.log(newData);
      })
      .catch((error) => {});
  }, []);

  console.log(userData);

  function renderList() {
    return userData.map((userInfo) => (
      <User
        className="userList"
        picture={userInfo.picture.medium}
        title={userInfo.name.title}
        first={userInfo.name.first}
        last={userInfo.name.last}
        gender={userInfo.gender}
        key={userInfo.name.last}
      />
    ));
  }

  return <article className="userList">{renderList()}</article>;
}

export default UserList;
