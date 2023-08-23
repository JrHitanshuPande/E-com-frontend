import React,{useState} from "react";
import "./Login.css"
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios'
import { baseurl } from '../Components/Database/baseurl';

const Login=(props)=>
{
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 const navigate = useNavigate();
 const {setUser} = props;
//  useEffect(() => {
//   console.log(userid); // This will log the updated userid value
// }, [userid]);

  const submit = (e)=>
  {
    e.preventDefault();
    if(email==="" || pass==="")
    {
      alert("Invalid input");
      return
    }
    else{

      axios.post( `${baseurl}/login`,{email,pass}) 
      .then((res)=>
      {
      //  res.data = setUserid ;
      //  alert(res.status)
      alert(res.data[0])
      setUser(res.data);
       navigate("/");
      })
      .catch((err)=>
      {
        console.error(err);
      });
    }
  }
  
  return (
  <>
  <div className="main-box">
  <div className="note">Note: Register and login System is in Development. Once logged in, if you refresh the page then all data will be reset which mean you have to login again.If you refresh the profile page then you might get error page, in that case, go to homepage link</div>
  <form className="form1">
  <div><label for="email" className="form-subtitle">Enter Your Gmail</label></div>
  <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="example@gmail.com"></input>
  <div><label for="password" className="form-subtitle">Enter your password</label></div>
  <input value={pass} onChange={(e)=> setPass(e.target.value)} type="pass" name="password" id="password"></input>
  <div><button id="fbutton" onClick={submit} >Login</button> </div>
  <div>Don't have Account?</div>
  <div><Link to="/register"><button id="fbutton">Create an Account</button></Link></div>
  </form>
  </div>
  </>
  )
}

export default Login;  
