import { Link } from "react-router-dom"
interface bottom{
  label:string,onclick:string,text:string
}
export function Bottomwarning({label,text,onclick}:bottom){
    return(<div className="flex justify-center text-left pr-8">
         
         <p className="  text-left text-gray-600">
        {label} </p>
        <div className="text-blue-400 hover:underline">
            <Link to={onclick} >{text}</Link>
        </div>
        
      
    </div>)
}