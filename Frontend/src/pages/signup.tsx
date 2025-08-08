import { Heading } from "../components/heading";
import { InputBox } from "../components/Inputbox";
import { Buttons } from "../components/button";
import { Bottomwarning } from "../components/Bottomwarning";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner"
import { SignupVisualPanel } from "@/components/signside";


export function SignUp() {
  localStorage.clear();

   const [firstname, setfirstname] = useState("");
  const [lasttname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function signup() {
    
      const resp = await axios.post("https://blogit-4lvo.onrender.com/api/v1/user/signup", {
        username: username,
        password: password,
        firstname:firstname,
        lastname:lasttname
        
      });

    
 if(resp.data.token){
    toast.success("Signup Succesful.");
  setTimeout(() => {
    window.location.href = "/signin";
  
  }, 500);
  
        
    }else{
      console.log("hiiiii")
      toast.error("Error While Signup");
      console.log("hloo")
    }
  }

  return (
    <div className="flex">
      <div className="flex justify-center items-center bg-white pt-6 h-screen w-180">
        <div className="items-center bg-white w-90 p-5 h-100 rounded">
          <Heading
            label="Create an Account"
            text="Let's get started with your 30 day free trials"
          />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setfirstname(e.target.value)
            }
            label="firstame"
            placeholder="firstName"
            type="text"
          />
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setlastname(e.target.value)
            }
            label="lasttame"
            placeholder="lastName"
            type="text"
          />

          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setusername(e.target.value)
            }
            label="Username"
            placeholder="xyz@example.com"
            type="text"
          />

          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setpassword(e.target.value)
            }
            label="Password"
            placeholder="Password(min 6 characters)"
            type="password"
          />
          

          <div className="p-4">
            <Buttons onclick={signup} label="SignUp" />

            
          </div>
          <div className="">
             <Bottomwarning
              label="Already Have an Account?"
              text="SignIn"
              onclick="/signin"
            />
          </div>
         
        </div>
      </div>
      <div><SignupVisualPanel/></div>
    </div>
  );
}
