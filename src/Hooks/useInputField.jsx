import { useState } from "react";

const useInputField = (defaultValue) => {

    //declaring the state for the input field
    const [fieldValue,setFieldValue] = useState(defaultValue);

    //event handling function 
    const handleFieldOnChange = (event) =>{
        // console.log(event.target.value);
        setFieldValue(event.target.value);

    }
    //returning the state variable and event handling function as an array.
return [fieldValue,handleFieldOnChange];
};

export default useInputField;

//thats how custom hook can be used to reduce the duplication code.