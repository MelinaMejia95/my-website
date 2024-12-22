import { useMediaQuery } from "react-responsive";
import AccessibilityIcon from "../../components/Icons/AccessibilityIcon";
import CSSIcon from "../../components/Icons/CSSIcon";
import CypressIcon from "../../components/Icons/CypressIcon";
import GitIcon from "../../components/Icons/GitIcon";
import HTMLIcon from "../../components/Icons/HTMLIcon";
import JavaScriptIcon from "../../components/Icons/JavaScriptIcon";
import JestIcon from "../../components/Icons/JestIcon";
import NextJSIcon from "../../components/Icons/NextJSIcon";
import NodeIcon from "../../components/Icons/NodeIcon";
import ReactIcon from "../../components/Icons/ReactIcon";
import RemixIcon from "../../components/Icons/RemixIcon";
import SASSIcon from "../../components/Icons/SASSIcon";
import TailwindIcon from "../../components/Icons/TailwindIcon";
import TypeScriptIcon from "../../components/Icons/TypeScriptIcon";
import Tooltip from "../../components/Tooltip/Tooltip";

import "./About.styles.scss";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="aboutContainer">
      <h1>I'm Melina Mejía Bedoya!</h1>
      <p>
        A senior front-end developer based in Colombia, passionate about
        crafting intuitive, responsive, and scalable web experiences. With years
        of professional experience, I specialize in modern frameworks, clean
        code, and innovative technologies like Web3. My goal is to transform
        complex ideas into user-friendly solutions that make the web a better
        place for everyone.
      </p>
      <p>
        Beyond my work in development, I love to mentor! I want to guide and
        inspire the next generation of developers to achieve their professional
        goals.
      </p>
      <div className="secondaryContainer">
        <div>
          <h2>Skills</h2>
          <div className="skillsContainer">
            <ul>
              <li>
                <HTMLIcon />
                HTML
              </li>
              <li>
                <CSSIcon />
                CSS
              </li>
              <li>
                <JavaScriptIcon />
                JavaScript
              </li>
              <li>
                <NextJSIcon /> Next.js
              </li>
              <li>
                <RemixIcon /> Remix
              </li>
              <li>
                <ReactIcon /> React
              </li>
              <li>
                <ReactIcon /> React Native
              </li>
              <li>
                <TypeScriptIcon /> TypeScript
              </li>
              <li>
                <NodeIcon /> Node.js
              </li>
              <li>
                <JestIcon /> Jest
              </li>
              <li>
                <CypressIcon /> Cypress
              </li>
              <li>
                <SASSIcon /> SASS
              </li>
              <li>
                <GitIcon /> Git
              </li>
              <li>
                <AccessibilityIcon /> Web A11y
              </li>
              <li>
                <TailwindIcon /> Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        {isMobile ? (
          <img
            src="src/assets/lucifer.png"
            alt="Lucifer the cat"
            className="catImg"
          />
        ) : (
          <Tooltip
            content={
              <img
                src="src/assets/lucifer-dialogue.png"
                alt="Cat saying: Hi there!
                    I'm Lucifer, I'm no longer part of this physical world but I'm still alive in mommy's heart!"
              />
            }
            xPosition={{ add: true, positionExtra: 10 }}
            yPosition={{ add: false, positionExtra: 100 }}
          >
            <img
              src="src/assets/lucifer.png"
              alt="Lucifer the cat"
              className="catImg"
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default About;
