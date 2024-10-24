import "./App.css";
import Futer from "./componers/futer/Futer";
import Header from "./componers/header/Header";
import Hero from "./componers/Hero/Hero";
import Posts from "./componers/posts/Posts";
import Prodacts from "./componers/prodacts/Prodacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Posts />
      <Prodacts />
      <Futer />
    </div>
  );
}

export default App;
