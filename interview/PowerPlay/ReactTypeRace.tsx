import "./styles.css";
import { useState, useEffect, useRef } from "react";

const placeHolderTxt = "You have to type this sentence";

export default function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(0);
  let timerInterval = useRef(null);

  const onTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const buttonClick = () => {
    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    console.log("timerInterval", timerInterval);
  };

  useEffect(() => {
    if (text.length === placeHolderTxt.length) {
      console.log("SUCCESS", timerInterval);

      clearInterval(timerInterval.current);
    }
  }, [text]);

  getColor = (item, pos) => {
    if (pos >= text.length) {
      return "grey";
    }
    if (text[pos] === item) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <div className="App">
      <textarea
        style={{ "pointer-events": timer === 0 ? "none" : "auto" }}
        onChange={onTextChange}
        width={"500px"}
      />

      <div>
        {placeHolderTxt.split("").map((item, pos) => (
          <span style={{ color: getColor(item, pos) }}>{item}</span>
        ))}
      </div>

      <button onClick={buttonClick}>Start timer</button>
      <div>{timer}</div>
    </div>
  );
}
