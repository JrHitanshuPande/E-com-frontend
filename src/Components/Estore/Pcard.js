import React from "react";
import "./Pcard.css";
import { Link } from 'react-router-dom';

const Pcard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((data) => (
        <div className="product-container" key={data.Id} >
        <Link to={"/productdetail/"+data.Id}>
          <div className="product-img">
            <img src={data.Images}></img>
          </div>
          <div className="product-name" >{data.Title}</div>
          <div className="product-catagory">{data.Catagory}</div>
          <div className="product-Review">{data.Rating + "★"}</div>
          <div className="Price">₹{data.Price}</div>
         </Link>
        </div>
    
      ))}
    </>
  );
};
export default Pcard;
