import "./Header.css";

function Header() {
  return (
    <header className="header-layout">
      <p>Max Results</p>
      <input type="text" placeholder="0" id="header-input" />
    </header>
  );
}

export default Header;
