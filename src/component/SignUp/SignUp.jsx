import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import axios from "axios";
import EndPoints from "../../Apis/EndPoints";
function SignUp()
{
    const navigate = useNavigate();
    const[state , setState] = useState({
        name:"",
        email:"",
        password:"",
        contact:""
    });
   
    const [isLoading , setIsLoading] = useState(false);
    const handleSubmit =async(event)=>{
          try{
               event.preventDefault();
               setIsLoading(true);
               let response = await axios.post(EndPoints.Sign_Up , state);
               toast.success(response.data.message);
               navigate(-1);
               setState({
                   name:"",
                   email:"",
                   password:"",
                   contact:""
               });  
          }
          catch(err)
          {
             console.log(err);
             toast.error("Ooops! something went wrong...")
          }
          setIsLoading(false);
    }
    
    return <>
         <ToastContainer/>
          <div className="container d-flex justify-content-center align-items-center " style={{height:"600px"}}>
             <div className="form-container">
             {isLoading? <div className="spinner-border spinner-position"></div>: ""}
             <h6 className="p-3 text-center bg-primary text-white">Sign-Up</h6>
                <form className="p-2 d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                     <input type="text" defaultValue={state.name} onChange={(event)=>setState({...state,name:event.target.value})} className="form-contol" placeholder="enter your name"></input>
                     <input type="email" defaultValue={state.email} onChange={(event)=>setState({...state,email:event.target.value})} className="form-contol mt-3" placeholder="enter your email"></input>
                     <input type="password"defaultValue={state.password} onChange={(event)=>setState({...state , password:event.target.value})} className="form-contol mt-3" placeholder="enter your password"></input>
                     <input type="text" defaultValue={state.contact} onChange={(event)=>setState({...state ,contact:event.target.value})} className="form-contol mt-3" placeholder="enter your contact"></input>
                     <button type="submit" className="btn btn-primary mt-3 " style={{width:"100%"}}>Submit</button>
                     <Link to="" className="text-center mt-2">Already have an Account ?</Link>
                </form>
             </div>
          </div>
    </>
}
export default SignUp;

