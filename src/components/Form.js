import "../App.css"
import React, { useState } from "react";
const buttonValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Form({onSubmit}) {

  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  

  const handleScoreChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score:selectedValue,text:text});
  };

  return (
    <div>
      <form className="form">
        <div>
          <h3>How would you rate your service with us ?</h3>
        </div>
        <div>
          <select
            value={selectedValue}
            onChange={handleScoreChange}
          >
            <option value="" disabled>
              Select a number
            </option>
            {buttonValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input type="text" onChange={handleTextChange} />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
