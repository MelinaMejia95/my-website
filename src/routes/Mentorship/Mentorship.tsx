import { useMediaQuery } from "react-responsive";

import "./Mentorship.styles.scss";
import Tooltip from "../../components/Tooltip/Tooltip";

const Mentorship = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="mentorshipContainer">
      <h1>I'm a mentor!</h1>
      <p>
        Mentorship is one of my greatest passions. Over the years, I’ve had the
        privilege of guiding aspiring developers and professionals through their
        tech journeys. As a verified mentor on ADPList, I help individuals from
        diverse backgrounds improve their skills, navigate career transitions,
        and build confidence in the ever-evolving tech industry.
      </p>
      <p>
        Seeing my mentees grow, achieve their goals, and unlock their potential
        is incredibly rewarding—it’s why I love what I do. If you’re looking for
        someone to support and inspire your journey in tech, let’s connect
        through{" "}
        <a href="https://adplist.org/mentors/melina-mejia-bedoya">
          my ADPList profile!
        </a>
      </p>
      <section className="assetsContainer">
        <img
          alt="Impact swag image"
          src="https://hcti.io/v1/image/f25980d8-e15f-47c2-9cde-31c0c7a8e9ec"
          height="100%"
          width="100%"
          className="impactSwag"
        />
        {isMobile ? (
          <img
            src="src/assets/manson.webP"
            className="petImage"
            alt="Manson the cat"
          />
        ) : (
          <Tooltip
            content={
              <img
                src="src/assets/manson-dialogue.webP"
                alt="Cat saying: Hi! I'm Manson! I'm a toothless cat. Mom is the best at mentoring people, what are you waiting to schedule something with her!"
              />
            }
            placement="top-start"
            xPosition={{ add: false, positionExtra: 50 }}
            yPosition={{ add: true, positionExtra: 10 }}
          >
            <img
              src="src/assets/manson.webP"
              className="petImage"
              alt="Manson the cat"
            />
          </Tooltip>
        )}
      </section>
    </div>
  );
};

export default Mentorship;
