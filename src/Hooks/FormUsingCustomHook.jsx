import useInputField from "./useInputField";

const FormUsingCustomHook = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  //deconstructuring the array that the custom hook (useInputField.jsx) is returning.

  //for email
  const [email, emailOnChange] = useInputField("");//initial value(defaultValue) is an empty string.

  //for password
  const [password, passwordOnChange] = useInputField("");


  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          placeholder="email"
          defaultValue={email}
          onChange={emailOnChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          defaultValue={password}
          onChange={passwordOnChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>

<h2>user's email is {email}</h2>
<h2>user's password is {password}</h2>

    </div>
  );
};

export default FormUsingCustomHook;
