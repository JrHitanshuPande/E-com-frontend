import React from "react";
import "./Profile.css"
const Profile=(props)=>
{
    const {user} = props;
return(
<>
<div className="main-box">
<div className="note">Note: Register and login System is in Development. Once logged in, if you refresh the page then all data will be reset which mean you have to login again.
If you refresh the profile page then you might get error page, in that case, go to homepage link</div>
<div className="p-box">
<div className="title">Name</div>
<div className="value" >{user[2]}</div>
<div className="title">Email</div>
<div className="value" >{user[3]}</div>
</div>
</div>
</>
)
}

export default Profile; 