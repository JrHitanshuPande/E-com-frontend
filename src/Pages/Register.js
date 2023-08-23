import React,{useState} from "react";
import "./Login.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import { baseurl } from '../Components/Database/baseurl';
const Register=()=>
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if password and confirm password match
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Send a POST request to the backend server
    if(name==="" || email==="" || password==="")
    {
      alert("Invalid input");
    }
    else 
    {
    axios.post(`${baseurl}/register`, {name,email,password})
      .then((res) => {
        // Handle the response from the server, if needed
        alert(res.data);
      })
      .catch((error) => {
        // Handle errors, if any
        console.error(error);
      });
  };
  }
  return (
  <>
  <div className="main-box">
  <div className="note">Note: Register and login System is in Development. Once logged in, if you refresh the page then all data will be reset which mean you have to login again.If you refresh the profile page then you might get error page, in that case, go to homepage link</div>
  <form className="form1">
  <div><label for="email" className="form-subtitle">Enter Your Name</label></div>
  <input value={name} onChange={(e)=> setName(e.target.value)} type="email" name="email" id="email" placeholder="example@gmail.com"></input>
  <div><label for="email" className="form-subtitle">Enter Your Gmail</label></div>
  <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="example@gmail.com"></input>
  <div><label for="password" className="form-subtitle">Create a password</label></div>
  <input value={password} onChange={(e)=> setPass(e.target.value)} type="pass" name="password" id="password"></input>
  <div><label for="cpassword" className="form-subtitle">Confirm a password</label></div>
  <input value={confirm} onChange={(e)=> setConfirm(e.target.value)} type="cpass" name="cpass" id="cpass" ></input>
  <div><button id="fbutton" onClick={handleSubmit} >Create an Account</button></div>
  <div>Already have Account?</div>
  <div><Link to="/login"><button id="fbutton" >Login here</button></Link></div>
  </form>
  </div>
  </>
  )
}

export default Register;