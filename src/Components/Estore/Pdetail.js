import React from 'react'
import useFetch from '../Database/useFetch'
import {useParams } from 'react-router-dom';
import "./Pdetail.css";
import { baseurl } from '../Database/baseurl';


function Pdetail() {
   const params = useParams();
   var ids = params.id;
    const { data, isPending, error } = useFetch(`${baseurl}/products/${ids}`);
    // console.log(data.id);
  
  return (
   <>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data &&  
        <>
 <div className="big-box">
 <div className="P-image"><img src={data.Images} alt=' product'></img></div>
 {/* <div className="P-image"></div> */}
 <div className="P-details">
 <div className="P-title"><h2>{data.Title}</h2></div>
 {/* <div>{data.category}</div>    No need to SHow */}
 <div className="P-description"><div><h3>Description</h3></div>{data.Description}</div>
 <div className="P-rating"><div><h3>Rating</h3></div>{data.Rating + "★"}</div>
 <div className="P-Price"><div><h3>Price</h3></div>₹{data.Price}</div>
 <div className='button'><button className="P-cart">Add to Cart</button></div>
 <div className='button'><button className="P-buy">Buy Now</button></div>
 </div>
 </div>
 </>
        }
  </>
  )
}

export default Pdetail