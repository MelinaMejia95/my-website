import "./Home.styles.scss";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <img src="src/assets/me.png" />
        <div className="mainInfo">
          <h1>I'm Melina!</h1>
          <p>
            I'm a front-end developer who loves turning ideas into sleek,
            user-friendly websites. When I’m not coding, you’ll probably find me
            diving into anime, exploring horror movies, or dabbling in
            illustration. I’m also a verified mentor on ADPList, helping others
            grow in tech. Let’s collaborate and create something awesome!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
