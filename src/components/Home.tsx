import * as React from "react";
import { Link } from "react-router-dom";

import "../scss/Home.scss";

import dailies from "./dailyIndex";
import DailyCard from "./DailyCard";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home-page">
      <h1>Gabriel Casselman's DailyUI</h1>
      <p>
        I’m designing and implementing 100 challenges given by DailyUI in Figma
        and then React. Follow my progress here!
      </p>
      <a href="https://www.dailyui.co">
        <span>dailyui.co </span>
        for more info
      </a>
      <div className="completed">
        <span>
          {dailies.length.toLocaleString("en-US", { minimumIntegerDigits: 3 })}
          /100
        </span>
        Challenges Completed
      </div>
      <div className="progress">
        <span style={{ width: `${dailies.length}%` }}></span>
      </div>
      <div className="all">
        {dailies.map((daily, index) => (
          <DailyCard
            number={daily.number}
            name={daily.name}
            link={daily.path}
            thumbnail={daily.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
