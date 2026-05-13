import { useState } from "react";

const ControlledOnePerEach = () => {

    const hanldeSubmit = (event) => {
        event.preventDefault();
        // preventDefault() stops the browser from refreshing the page, which is the default behavior of HTML forms.
    };
    // Function that runs when the form is submitted.

  // State for storing the password input value.
  const [password, setPassword] = useState("");
  // useState("") creates a state variable named 'password', with an initial empty string value.

  //state for error alert for password
  const [error, setError] = useState("");

  // Event handler function for the password input field.
  const handlePassword = (event) => {

      console.log(event.target.value);
      // event.target.value contains the current value typed by the user in the input field.
      
      setPassword(event.target.value);
      // Updating the 'password' state with the latest input value. This keeps the React state synchronized with the input field.

      //condition for showing the error message.
      if(password.length<6){
        setError("Warning : Password must contain 6 characters!");
      }else{
        setError("");
      }
    }; //This function runs every time the user types something inside the password field.

  /*
    Steps for handling input fields with React state:

    1. Create a state variable using useState().
       Example:
       const [password, setPassword] = useState("");

    2. Connect the input field with the state variable.
       Usually, the 'value' attribute is used for controlled components.
       Example:
       value={password}

    3. Create an event handler function to capture user input.
       Example:
       const handlePassword = (event) => {
         setPassword(event.target.value);
       };

    4. Attach the event handler to the input field using onChange.
       This ensures the state updates whenever the user types.
       Example:
       onChange={handlePassword}

    5. As the user types, React updates the state in real time,
       making the input field fully controlled by React.
  */

//three steps to get data in controlled way ->
//1. declare a state for the input field
//2. create an event handling function. get the value and call the setter function here and pass the value.
//3. create event on the input field and call the event handling function from there and  create defaultValue on the input field and set the value to the state variable.


//state for email 
const [email,setEmail] = useState("");

//state for error alert for email
const [error2,setError2] = useState("");

//event handling function for email
const handleEmail = (event) =>{
  console.log(event.target.value);
  setEmail(event.target.value);

  //condition for error message
  if(!(email.includes("@"))){
    setError2("Warning : Email Must contain @!");
  }else{
    setError2("");
  }
}


  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input type="email" name="email" placeholder="email" required 
        onChange={handleEmail}
        defaultValue={email}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="password"
          required

          // The input field displays the current state value.
          // In React, using 'value' instead of 'defaultValue' makes this a controlled component.
          defaultValue={password}

          // Calls handlePassword() whenever the input value changes.
          onChange={handlePassword}
        />

        <br />

        <input type="submit" value="submit" />
      </form>
      
      <h2>user is typing password : {password}</h2>
      <b style={{color:"red"}}> {error}</b>

      <h2>user is typing email : {email}</h2>
      <b style={{color:"red"}}> {error2}</b>

    </div>
  );
};

export default ControlledOnePerEach;