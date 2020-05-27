import React from "react";
import exampleOne from "./assets/loveisafunnything.mp3";

export default function Definition() {
  return (
    <div className="blue-slot">
      <ul className="no-style">
        <li>Pick a theme</li>
        <li className="vertical-line"></li>
        <li>Pick a script or write your own</li>
        <li className="vertical-line"></li>
        <li>Pick a soundtrack</li>
        <li className="vertical-line"></li>
        <li>Invite collaborators</li>
        <li className="vertical-line"></li>
        <li>Select a delivery format</li>
        <li className="vertical-line"></li>
        <li>Record your part</li>
        <li className="vertical-line"></li>
        <li>Make a Wish and submit!</li>
        <li className="vertical-line"></li>
        <li>
          <audio controls="controls">
            <source src={exampleOne} />
          </audio>
        </li>
      </ul>
    </div>
  );
}
