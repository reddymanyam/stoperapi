import { useEffect, useState } from "react";

const Timer = () =>{

    const[time,setTime] = useState(0)
    console.log("before mounting")

    useEffect(()=>{
       
        const Interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
     console.log("after mounting")
        return () => clearInterval(Interval);
    },[]);

    return(
          <>
            <h2>value:{time}</h2>
            
          </>
    )
}
export default Timer;