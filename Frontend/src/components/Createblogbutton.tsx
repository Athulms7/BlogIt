
import { Bloginput } from "@/components/inputboxblog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { Blogbutton } from "@/components/blogbutton";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// interface onclick{
 
//    imageclick:()=>void,
// }
export function Createblogbutton() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const[image,setimageurl]=useState("");
  const navigate=useNavigate();
  console.log(description);
  const token =localStorage.getItem("token")
  async function onclick(){
 const resp=await axios.post("https://blogit-4lvo.onrender.com/api/v1/blog/createblog",{
  title:title,
  description:description,
  imageurl:image,
  
  
 },{
  headers:{
    authorization:token
  }
 })
 console.log(resp.data)


  }
  
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Blogbutton/>
        </DialogTrigger>
        <DialogContent>
          <div className="flex w-160">
            <div>
              <DialogHeader>
                <DialogTitle>Create Blog</DialogTitle>

                <Bloginput
                  title={"Blog name"}
                  placeholder="Blog title"
                  onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    settitle(e.target.value);
                  }}
                />
                <Bloginput
                  title={"Blog picture"}
                  placeholder="upload ur image url"
                  onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setimageurl(e.target.value);
                  }}
                />
                
                <Textarea
  className="border border-gray-400 p-4 rounded-3xl"
  placeholder="Write your Blog here..."
  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setdescription(e.target.value);
  }}
/>

               
                <DialogDescription>
                  This action create a blog. This can be edited from
                  your account.
                </DialogDescription>
              </DialogHeader>
            </div>
            <DialogHeader>
              <div className="w-80 h-30">
              <div className="css-ec9rg1 text-center flex-row justify-center h-60 w-45">
                <button
                  type="button"
                  className="group flex items-center justify-center relative overflow-hidden h-25 w-25 border dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-full ml-10 mt-18"
                >
                  <div className="group-hover:hidden text-slate-600 dark:text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="45"
                      viewBox="0 0 44 45"
                      fill="none"
                      className="stroke-current"
                    >
                      <path
                        d="M32.7853 20.365L25.3025 29.4735L18.5324 22.2134L10.4482 30.3198M26.0333 14.8941C26.0333 15.2991 25.7049 15.6274 25.2999 15.6274C24.8949 15.6274 24.5666 15.2991 24.5666 14.8941M26.0333 14.8941C26.0333 14.489 25.7049 14.1607 25.2999 14.1607C24.8949 14.1607 24.5666 14.489 24.5666 14.8941M26.0333 14.8941H24.5666M11.0001 38.5625H33.0001C36.0377 38.5625 38.5001 36.1001 38.5001 33.0625V11.0625C38.5001 8.02493 36.0377 5.5625 33.0001 5.5625H11.0001C7.96252 5.5625 5.50008 8.02494 5.50008 11.0625V33.0625C5.50008 36.1001 7.96252 38.5625 11.0001 38.5625Z"
                        stroke-width="2.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block z-50">
                    <span className="flex items-center justify-center transition-colors duration-100 text-slate-600 dark:text-slate-300 focus-visible:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:bg-slate-100 dark:focus-visible:bg-slate-800 disabled:text-slate-300 disabled:dark:text-slate-800 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:cursor-not-allowed rounded-full p-2 bg-slate-100 dark:bg-slate-800">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          stroke="currentColor"
                          d="M3 17v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2m-9-2V3m0 0 4.2 4.2M12 3 7.8 7.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="hidden group-hover:block absolute z-10 inset-0 w-full h-full bg-slate-950/50 dark:bg-slate-600/50"></div>
                </button>
                <input
                  className="hidden"
                  type="file"
                  accept="image/avif, image/gif, image/jpeg, image/png, image/webp, image/bmp, image/x, image/tiff, image/vnd, image/xbm"
                ></input>
                <div className="css-wn67v">
                  <div className="css-dry3dd text-md text-black dark:text-white">Logo</div>
                  <span className="css-147eg4u text-sm text-gray-700">
                    Recommended size<span className="css-h6sqxb"> </span>
                    <br className="css-vaak6u"></br>500x500px
                  </span>
                </div>
                <div className="">
           <button className="bg-blue-700 hover:bg-blue-600 rounded-3xl p-2 w-20 ml-2 mt-2 text-white" onClick={()=>{
            onclick();
            if(description.length>0){
            
            setTimeout(() => {
              toast.success("blog created succesfully")
            }, 500);
            navigate("/home")
            
            }
           }}>Create</button>
          </div>
              </div>
            </div>
            </DialogHeader>
            
          </div>
          
        </DialogContent>
    
      </Dialog>
    </>
  );
}
