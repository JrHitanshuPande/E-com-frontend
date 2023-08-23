import axios from 'axios';
import {useState , useEffect} from 'react';

const Axios=(url)=>{
   const [data,setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
    useEffect(()=>
    {
    axios.get(url)
    .then((res)=> setData(res.data))
    .then(()=>{
        setIsPending(false);
        // setData(res.data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
    } ,[]);

    return {data , isPending , error};
}

export default Axios;