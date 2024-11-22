import NavBar from "../../components/Navbar/Navbar";
import "./Home.styles.scss";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <img src="src/assets/sesshomaru.png" />
        <div className="mainInfo">
          <div className="descriptionContainer">
            <h1>Hi! I'm Melina</h1>
            <p>
              I'm a front-end developer who loves turning ideas into sleek,
              user-friendly websites. When I’m not coding, you’ll probably find
              me diving into anime, exploring horror movies, or dabbling in
              illustration. I’m also a verified mentor on ADPList, helping
              others grow in tech. Let’s collaborate and create something
              awesome!
            </p>
          </div>
          <div className="networksContainer">
            <a
              href="https://www.linkedin.com/in/melinamejia95/"
              target="_blank"
            >
              <img
                className="linkedinIcon"
                src="src/assets/icons/linkedin.svg"
              />
            </a>
            <a href="https://github.com/MelinaMejia95" target="_blank">
              <img className="githubIcon" src="src/assets/icons/github.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
