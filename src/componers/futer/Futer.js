import "./Futer.css";
import rasim6 from "../../imgs/IMAGE2.svg";
import rasim1 from "../../imgs/Escape..svg";
const Futer = () => {
  return (
    <div className="futer-div">
      <img src={rasim6} alt="rasim" />
      <div className="futer-text">
        <h2 className="futer-h2">Stay in Touch</h2>
        <hr className="futer-hr" />
        <div className="futer-div-samll">
          <input
            placeholder="Enter your email address"
            className="futer-input"
            type="text"
          />
          <button className="futer-btn">Submit</button>
        </div>
      </div>
      <div className="futer-text1">
        <div className="futer-skill contenaer">
          <img src={rasim1} alt="rasim" />
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Futer;
