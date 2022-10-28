import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const FormSubmissionHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim()==='')
    {
      return;
    }
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue); 
    setEnteredName("");

    //nameInputREfcurrent.value=""; NOT IDEAL, DON'T MAINPULATE THE DOM 
  };
  return (
    <form onSubmit={FormSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;