import React, {useState} from "react";
import "./EightBall.css"
import { chooseRandomMessage } from "./helpers";

// might be worth breaking out into separate file just for length
const ANSWER_OPTIONS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 * EightBall: component representing an EightBall, complete with message and
 * dynamic color.
 * 
 * Props:
 * - answers (list of possible answer/color combinations) // incl. data type and example
 * 
 * State:
 * - ball (Object { msg: "", color: "" })
 * 
 * App -> EightBall
 */
function EightBall({ answers=ANSWER_OPTIONS }) {
  const [ball, setBall] = useState({msg: "Think of a question", color: "black"});

  function updateBall() {
    setBall(chooseRandomMessage(answers));
  }

  // mindful of line length; convention is class name
  return (
    <div id="EightBall" style={{backgroundColor: ball.color}} onClick={updateBall}>
      <p id="EightBall-msg">{ball.msg}</p>
    </div>
  )
}

export default EightBall;