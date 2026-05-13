import { useRef } from "react";

const UncontrolledUseRef = () => {

    const emailRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(emailRef.current);//returns the element(input field) from where the emailRef is triggered.
        console.log(emailRef.current.value)//returns the text(Email) user has typed.
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" 
                ref={emailRef}
                />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledUseRef;