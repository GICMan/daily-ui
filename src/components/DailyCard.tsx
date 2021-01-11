import * as React from "react";
import { Link } from "react-router-dom";

import "../scss/DailyCard";

type CardProps = {
  number: number;
  name: string;
  thumbnail: string;
  link: string;
};

const DailyCard: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <h2>
          {props.number.toLocaleString("en-US", {
            minimumIntegerDigits: 3
          })}
        </h2>
        <h3>{props.name}</h3>
        <Link to={props.link}>Check it out</Link>
      </div>
      <img src={props.thumbnail}></img>
    </div>
  );
};

export default DailyCard;
