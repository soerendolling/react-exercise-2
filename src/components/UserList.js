import React, { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";

function UserList(onInput) {
  const [userData, setUser] = useState([]);
  const [filter, setFilter] = useState("");
  const [amount, setAmount] = useState();

  useEffect(() => {
    const baseUrl = "https://randomuser.me/api/";
    let url = baseUrl;
    if (amount) {
      url = `${baseUrl}${amount}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results;
        setUser(newData);
        console.log(newData);
      })
      .catch((error) => {});
  }, [amount]);

  console.log(userData);

  function handleAmountOfUsers(event) {
    event.preventDefault();
    let input = event.target;
    setAmount(`?results=${input.value}`);
  }

  let filteredUsers;
  if (filter === "female") {
    filteredUsers = userData.filter(
      (character) => character.gender === "female"
    );
  } else if (filter === "male") {
    filteredUsers = userData.filter((character) => character.gender === "male");
  } else {
    filteredUsers = userData;
  }

  function handleAllFilter() {
    setFilter("");
  }

  function handleFemaleFilter() {
    setFilter("female");
  }

  function handleMaleFilter() {
    setFilter("male");
  }

  function renderList() {
    return filteredUsers.map((userInfo) => (
      <User
        className="user"
        picture={userInfo.picture.medium}
        title={userInfo.name.title}
        first={userInfo.name.first}
        last={userInfo.name.last}
        gender={userInfo.gender}
        key={userInfo.name.last}
      />
    ));
  }

  return (
    <div>
      <header className="header-layout">
        <input type="text" onChange={handleAmountOfUsers} />
        <button onClick={handleAllFilter}>All</button>
        <button onClick={handleMaleFilter}>Male</button>
        <button onClick={handleFemaleFilter}>Female</button>
      </header>
      <article className="userList">{renderList()}</article>;
    </div>
  );
}

export default UserList;
