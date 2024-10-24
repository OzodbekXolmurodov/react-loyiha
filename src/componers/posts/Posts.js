import "./Posts.css";
import rasim3 from "../../imgs/Frame.svg";
const Posts = () => {
  return (
    <div className="posts-div contenaer">
      <h2 className="posts-h2">Featured Posts</h2>
      <hr className="posts-hr" />
      <img className="posts-img" src={rasim3} alt="rasim" />
    </div>
  );
};

export default Posts;
