import "./Header.css";

function Header(onInput) {
  //   function handleDropDown() {
  //     onInput();
  //   }

  return (
    <header className="header-layout">
      <p>Max Results</p>
      <form>
        <label className="filterMenu" htmlFor="genderFilter">
          Filter:
        </label>
        <select id="genderFilter" name="gender">
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="submit" />
      </form>
    </header>
  );
}

export default Header;
