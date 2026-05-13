//FormData-based form handling or React form actions with FormData. (Uncontrolled + FormData)

const UncontrolledFormData = () => {

    const handleFormAction = (FormData) =>{
    //  event.preventDefault();
     console.log(FormData.get("email"));//returns the text user typed into the input filed named 'email'
     console.log(FormData.get("pass"));
    }

    //this way of getting data from the form -> use an event handling function, pass FormData as the parameter, FormData.get("name of the input field") 

  return <div>
    <form action={handleFormAction}>
<input type="email" name="email" placeholder="email" />
<br />
<input type="password" name="pass" placeholder="password" />
<br />
<input type="submit" value="submit" />
    </form>
  </div>;
};

export default UncontrolledFormData;