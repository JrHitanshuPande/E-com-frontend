import React from "react";
import "./CardG.css";
import Pcard from "./Pcard";
import useFetch from "../Database/useFetch";
import { baseurl } from "../Database/baseurl";
const CardG = () => {
  const { data, isPending, error } = useFetch(
    `${baseurl}/products`
  );
  return (
    <>
    <div className="Product"><h1>Products</h1></div>
      <div className="card-contianer">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <Pcard data={data} />}
      </div>
    </>
  );
};
 
export default CardG;
