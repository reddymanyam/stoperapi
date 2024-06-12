import { green } from "@mui/material/colors";
import { useState } from "react";

const Header = () => {
    const [count, setCount] = useState(0);
    const[message,setMessage] = useState("");
    const increment = () =>{
        setCount(count+1);
        if(message !== ""){
            setMessage("")
        }
    }
    const decrement = () =>{
        if (count > 0) {
            setCount(count-1);
        }
        else{
            setMessage("We dont decrease to negatieve numbers")
        }
        
    }
    const reset = () =>{
        setCount(0)
    }

    return(
        <>
            <div className="increment">
                <div className="heading"><h2>This is HeaderComponent</h2></div>
                <div className="counter"><h3> Counter:{count}</h3></div>
                <div className="msg"><h2>{message}</h2></div>
                <div className="btn" ><button onClick={increment}>Increment</button></div>
                <div className="btn2"><button onClick={decrement}>Decrement</button></div>
                <div className="rst"><button onClick={reset}>Reset</button></div>
            </div>

          
        </>

    );
}

export default Header;