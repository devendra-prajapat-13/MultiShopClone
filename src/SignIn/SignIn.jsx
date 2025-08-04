import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../Apis/EndPoints";
import { toast ,ToastContainer} from "react-toastify";

function SignIn(){
    const navigate = useNavigate();
    const [state , setState] = useState({
        email:"",
        password:""
    });
    const handleSubmit = async (event)=>{
        try{
              event.preventDefault();
               if(state.email && state.password)
               {
                   let response = await axios.post(EndPoints.Sign_In , state);
                   toast.success(response.data.message);
                   navigate(-1);    
               }
               else
               {
                  toast.error("Please Enter email or password ")
               }
        }
        catch(err){
             console.log(err);
             toast.error(err.response?.data?.error|| "something went wrong ");
             
        }
    }
     return <>
        <ToastContainer/>
         <div className="d-flex justify-content-center align-items-center " style={{height:"600px"}}>
            <div className="form-container">
              <h5 className="p-3 text-center bg-primary text-white">SignIn</h5>
              <form onSubmit={handleSubmit} className="p-2 d-flex flex-column justify-content-center">
                  <input onChange={(event)=>setState({...state , email: event.target.value})} type="email" placeholder="enter your email here" className="form-control mt-2"></input>
                  <input onChange={(event)=>setState({...state , password:event.target.value})} type="password" placeholder="enter your password here " className="form-control mt-3"></input>
                  <button  type="submit" className="btn btn-primary mt-3 " style={{width:"100%"}}>Submit</button>
                  <Link to="/signup" className="text-center mt-2" >Create new account ?</Link>
              </form>
            </div>
         </div>
     </>
}
 

export default SignIn