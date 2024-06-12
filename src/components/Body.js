
import { useEffect, useState } from "react";

const Body = () =>{
     
    const [posts, setPosts ] = useState([]);

    const fetchPosts = async() => {
          
          try{
               const response = await fetch('https://static-assets-web.flixcart.com/www/linchpin/batman-returns/codes.json');
               if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
               }
               const data = await response.json();
               setPosts(data)
               console.log(data)
          }
          catch(error){

          console.log('error while fetching',error);
          }
    }

    useEffect (() =>{
        fetchPosts();
      },[])


    return(
        <>
        <h1>Posts</h1>
        { <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.fullCountryName}</h2>
              <h3>{post.shortCountryName}</h3>
              <h3>{post.locale}</h3>
              <h4>{post.countryTelephonyCode}</h4>
            </li>
          ))}
        </ul> }
        </>
    )
}
export default Body;