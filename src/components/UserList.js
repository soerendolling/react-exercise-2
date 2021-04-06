import React, { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";
import Header from "./Header";

function UserList(onInput) {
  const [userData, setUser] = useState([]);

  useEffect(() => {
    const baseUrl =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    let url = baseUrl;

    // function handleFilter (inputValue) {
    //   if (inputValue === "male") {
    //     url = `https://randomuser.me/api/?gender=male`;
    //   } else if (inputValue === "female") {
    //     url = `https://randomuser.me/api/?gender=female`;
    //   } else url = baseUrl;
    // }

    function handleFilter() {
      const filtered = userData.filter((character) => {
        return character.gender !== "male";
      });
      setUser(filtered);
    }

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
      <Header />
      <article className="userList">{renderList()}</article>;
    </div>
  );
}

export default UserList;
