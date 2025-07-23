import { Heading } from "../components/heading";
import { InputBox } from "../components/Inputbox";
import { Buttons } from "../components/button";
import { Bottomwarning } from "../components/Bottomwarning";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner";
import { SignupVisualPanel } from "@/components/signside";


export function SignIn() {
  localStorage.clear();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    try {
      const resp = await axios.post("http://localhost:3001/api/v1/user/signin", {
        username: username,
        password: password,
      });

      console.log(resp.data.token);

      if (resp.data.token) {

        toast.success("Succesfully Signed In")
        localStorage.setItem("token", "Bearer " + resp.data.token);
        setTimeout(()=>{
            window.location.href="/community"
        },500)

      } else if (resp.data.msg) {
       toast.error("Error while Signin in");
      }
    } catch (error) {
      toast.error("Error while Signin in");
      console.error(error);
    }
  }

  return (
    <div className="flex">
      <div className="flex justify-center items-center bg-white pt-6 h-screen w-180">
        <div className="items-center bg-white w-90 p-5 h-100 rounded">
          <Heading
            label="Sign in to your Account"
            text="Let's get started with your 30 day free trials"
          />
       
          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            label="Username"
            placeholder="xyz@example.com"
            type="text"
          />

          <InputBox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            label="Password"
            placeholder="Password"
            type="password"
          />

          <div className="p-4">
            <Buttons onclick={signin} label="SignIn" />

            
          </div>
          <div className="">
             <Bottomwarning
              label="Don't Have an Account?"
              text="SignUp"
              onclick="/signup"
            />
          </div>
         
        </div>
      </div>
      <div>
        <SignupVisualPanel/>
      </div>
    </div>
  );
}
