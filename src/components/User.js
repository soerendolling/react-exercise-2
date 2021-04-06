import "./User.css";

function User({ title, first, last, picture, gender }) {
  let classForGender;

  if (gender === "male") {
    classForGender = "userContent--male";
  } else if (gender === "female") {
    classForGender = "userContent--female";
  }

  return (
    <div className={`userContent ${classForGender}`}>
      <img src={`${picture}`} alt="A profile"></img>
      <p>{`Name: ${title}${first}${last}`}</p>
    </div>
  );
}

export default User;
