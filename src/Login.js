import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"
export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token , setToken] = useState();
const submitLogin = async(e) =>{
    e.preventDefault();
    try {
        const res = await axios.post(" http://45.132.240.106/admin/user/login",user);
        // console.log(res.data.accesstoken);
        
        const res2 = await axios.get(" http://45.132.240.106/admin/user/infor" ,  { headers : {Authorization: `Bearer ${res.data.accesstoken}`}} )
        if(res2.data.isBlocked){
          alert("votre compte es desactivé , contacter l'adminisitrateur!")
        }else{
          Cookies.set("token" , res.data.accesstoken);
          window.location.href = "/";
          
        }
        
    } catch (error) {
        alert(error.response.data.msg);
    }
    console.log(user);
}
  return (
   
      <div className="card" style={{textAlign: "center" , display: "flex" ,justifyContent:"center" , alignItems: "center", height:"100vh"}}>
        <form onSubmit={submitLogin} style={{border : "1px solid white" , padding:"25px 60px" , borderRadius:"10px" , backgroundColor:"white"}}>
          <label style={{color:"black" , fontSize:"15px" , fontWeight:"500"}}>email:</label>
          <br /><br />
          <input onChange={(e)=>setUser({...user , email: e.target.value})} style={{padding:"10px"}}  type="email" name="email" />
          <br /><br />
          <label style={{color:"black" , fontSize:"15px" , fontWeight:"500"}}>password:</label>
          <br/><br />
          <input onChange={(e)=>setUser({...user , password: e.target.value})} style={{padding:"10px"}} type="password" name="password" />
          <br /><br />
          <button className="btn btn-primary mb-3">login</button>
        </form>
      </div>

  );
}
