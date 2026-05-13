// Uncontrolled form data collection using event.target ---->

const UncontrolledDataCollection = () => {
  const hanldeSubmit = (event) => {
    console.log("form submitted");

    //right now when the sumbit btn is clicked the page reloads. thats the default behavior of the browser.  to prevent that you need to use -
    event.preventDefault();

    console.log(event.target); //returns the element where the event handling function has been called. here its gonna return the form element and every element it contains.
    /*
       <form onSubmit={hanldeSubmit}>
    <input type="text" placeholder='enter your name'/>
    <br />
    <input type="submit" value="submit" />
  </form> 
     */
    console.log(event.target.nameField); //returns the element based on the name of it.
    //<input type="text" name="nameField" placeholder="enter your name" />
    
    console.log(event.target.nameField.value); //returns the text user typed into this input field

  }; //when the submit btn will be clicked the this event will be executed.

  //this way of getting data from the form -> event.target.[name of the input field].value
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input type="text" name="nameField" placeholder="enter your name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UncontrolledDataCollection;