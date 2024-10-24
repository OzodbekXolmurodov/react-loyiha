import "./Header.css";
import rasim from "../../imgs/IMAGE.svg";
import rasim1 from "../../imgs/Escape..svg";
function Header() {
  return (
    <>
      <div className="header">
        <img src={rasim} alt="raism" />
        <div className="tatle contenaer">
          <img src={rasim1} alt="rasim" />
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text">
          <h1 className="text-h1">Let's do it together.</h1>
          <p className="text-p">
            We travel the world in search of stories. Come along for the ride.
          </p>
          <button className="text-btn">View Latest Posts</button>
        </div>
      </div>
    </>
  );
}

export default Header;
