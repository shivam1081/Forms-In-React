import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputNameIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const FormSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameIsTouched(false);

    //nameInputREfcurrent.value=""; NOT IDEAL, DON'T MAINPULATE THE DOM
  };

  const nameInputClasses = inputNameIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={FormSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {inputNameIsInValid && (
          <p className="error-text">Name Must Not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
