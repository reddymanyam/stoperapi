import { useEffect, useState } from "react";

const Mui = () =>{
    
    const [data, setData] = useState([])
    const fetchData = async() =>{
        try{
        const response = await fetch('https://static-assets-web.flixcart.com/www/linchpin/batman-returns/codes.json')  
        const data = await response.json(); 
        setData(data)  
        }
        catch(err){
            console.log(err,"error while fetching....!")
        } 
    }

    useEffect(()=>{
        fetchData()
    },[])
    return(
    <>
    <div className="container">
    {
        data.map((post)=>
        
        (
            <h2>{post.fullCountryName}</h2>
        ))
    }

    </div>
    </>
    );
};
export default Mui;